const mongoose = require('mongoose');
const Tv = mongoose.model('Tv');
let allTvs = [];
let allBrands = []


module.exports = app => {
    app.get('/tvs', (req, res) => {

        Tv.find({})
            .sort('-price')
            .then((tv) => {
                res.send({
                    tvs: tv
                })
            })
            .catch(err => console.log(err))
    });

    app.post('/tvs', (req, res) => {
        let checked = req.body.models.join('|');

        Tv.find({})
            .where('model')
            .regex(new RegExp(checked, 'i'))
            .then((tvs) => {
                res.send({
                    tvs: tvs
                })
            })
            .catch(err => console.log(err))
    });

    app.get('/tv/:id', (req, res) => {
        let id = Number(req.params.id) + 1; // the tv id
        Tv.findOne({
                id: id
            })
            .then(tv => {
                res.send({
                    tv: tv
                })
            })
            .catch(err => console.log(err))
    })

    app.get('/tvs/sortby/:criteria', (req, res) => {
        let sortParam = req.params.criteria; // this must be descending order or ascending 

        Tv.find({})
            .sort({'price' : sortParam})
            .then(tv => {
                res.send({
                    tvs: tv
                })
            })
            .catch(err => console.log(err))
    })


    app.get('/tvs/all-tvs-length/:count', (req, res) => {
        let counter = req.params.count; // this must be the number of tvs

        Tv.find({})
            .limit(counter)
            .sort({
                id: 1
            })
            .then(tv => {
                res.send({
                    tvs: tv
                })
            })
            .catch(err => console.log(err))
    })
}