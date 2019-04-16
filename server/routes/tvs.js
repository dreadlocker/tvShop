const mongoose = require('mongoose');
const Tv = mongoose.model('Tv');
let allTvs = [];


module.exports = app => {
    app.get('/tvs', (req, res) => {

        Tv.find({})
            .sort({
                id: 1
            })
            .then((tv) => {
                res.send({
                    tvs: tv
                })
            });
    });

    app.post('/tvs', (req, res) => {
        let checked = req.body.checked.join('|');

        Tv.find({})
            .where('model')
            .regex(new RegExp(checked, 'i'))
            .then((tvs) => {
                console.log(tvs)
                res.send({
                    tvs: tvs
                })
            })
    });
}