const mongoose = require('mongoose');
const Tv = mongoose.model('Tv');

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
    })

    app.get('/tvs/filters/', (req, res) => {
        let checked = req.query.models;
        let sorting = req.query.criteria;
        let counter = +req.query.count;
        let inches = req.query.inches;

        let tvModel = Tv.find({})

        if (checked.length !== 0) {
            tvModel.where('model')
                   .regex(new RegExp(checked, 'i'))
                   .sort('-price')
        }
        if (sorting.length !== 0) {
            tvModel.sort({'price': sorting})
        }
        if (counter !== 0) {
            tvModel.limit(counter)
                   .sort({id: 1})
        }
        if(inches.length !== 0){
            tvModel.where('inches')
                   .regex(new RegExp(inches, 'i'))
        }

        tvModel
            .then(tv => {
                res.send({
                    tvs: tv
                })
            })
            .catch(err => console.log(err))
    })

    app.get('/tv/:id', (req, res) => {
        let id = Number(req.params.id) + 1; // the tv id

        Tv.findOne({id: id})
          .then(tv => {
                res.send({
                    tv: tv
                })
            })
          .catch(err => console.log(err))
    })
}