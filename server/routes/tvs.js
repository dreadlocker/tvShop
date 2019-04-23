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
            .catch(err => console.log(err));
    })

    app.get('/tvs/filters/', (req, res) => {
        let { models, criteria, count, inches } = req.query;

        let tvModel = Tv.find({})

        if (models.length !== 0) {
            tvModel.where('model').regex(new RegExp(models, 'i')).sort('-price')
        }
        if (criteria.length !== 0) {
            tvModel.sort({'price': criteria})
        }
        if (count !== 0) {
            tvModel.limit(count).sort({id: 1})
        }
        if(inches.length !== 0){
            tvModel.where('inches').regex(new RegExp(inches, 'i'))
        }

        tvModel.then(tv => {
                  res.send({
                     tvs: tv
                  })
               })
               .catch(err => console.log(err));
    })

    app.get('/tv/:id', (req, res) => {
        let id = Number(req.params.id) + 1; // the tv id

        Tv.findOne({id: id})
          .then(tv => {
                res.send({
                    tv: tv
                })
            })
          .catch(err => console.log(err));
    })
}