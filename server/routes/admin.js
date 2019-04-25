const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const passport = require('passport');
const Tv = mongoose.model('Tv');

// Load Input Validation
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

// Load User model
const Admin = require('../models/admin');

module.exports = app => {

    app.post('/register', (req, res) => {
        const {
            errors,
            isValid
        } = validateRegisterInput(req.body);

        // Check Validation
        if (!isValid) {
            return res.status(400).json(errors);
        }

        Admin.findOne({
            name: req.body.name
        }).then(admin => {
            if (admin) {
                errors.name = 'Name already exists';
                return res.status(400).json(errors);
            } else {

                const regAdmin = new Admin({
                    name: req.body.name,
                    password: req.body.password
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(regAdmin.password, salt, (err, hash) => {
                        if (err) throw err;
                        regAdmin.password = hash;
                        regAdmin
                            .save()
                            .then(admin => res.json(admin))
                            .catch(err => console.log(err));
                    });
                });
            }
        });
    });

    app.post('/login', (req, res) => {
        const {
            errors,
            isValid
        } = validateLoginInput(req.body);

        // Check Validation
        if (!isValid) {
            return res.status(400).json(errors);
        }

        const { name, password } = req.body;

        // Find user by email
        Admin.findOne({
            name
        }).then(admin => {
            // Check for user
            if (!admin) {
                errors.name = 'User not found';
                return res.status(404).json(errors);
            }

            // Check Password
            bcrypt.compare(password, admin.password).then(isMatch => {
                if (isMatch) {
                    // User Matched
                    const payload = {
                        id: admin.id,
                        name: admin.name
                    }; // Create JWT Payload

                    // Sign Token
                    jwt.sign(
                        payload,
                        keys.secretOrKey, {
                            expiresIn: 3600
                        },
                        (err, token) => {
                            res.json({
                                success: true,
                                token: 'Bearer ' + token
                            });
                        }
                    );
                } else {
                    errors.password = 'Password incorrect';
                    return res.status(400).json(errors);
                }
            });
        });
    });

    app.get('/adminPanel', passport.authenticate('jwt', { session: false }), (req,res) => {
        Tv.find({})
          .sort({'price': -1})
          .then(tvs => {
            res.send({
                tvs: tvs
            })
        })
    })

    app.post('/adminPanel/', passport.authenticate('jwt', { session: false }), (req,res) => {

        let id = req.body.id; // the tv id

        Tv.findOneAndRemove({ id : id})
          .then(tvs => {
              tvs.save();
              Tv.find({})
                .sort({'price': -1})
                .then(tvs => {
                    res.send({
                        tvs: tvs
                    })
                })
          })
    })

    app.get(
        '/current',
        passport.authenticate('jwt', {
            session: false
        }),
        (req, res) => {
            res.json({
                id: req.admin.id,
                name: req.admin.name,
            });
        }
    );
}