const mongoose = require('mongoose');
const Tv = mongoose.model('Tv');


module.exports = app => {
    app.get('/tvs', (req, res) => {

        Tv.find({})
          .sort({id: 1})
          .then((tv) => {
              res.send({
                  tvs: tv
              })
          });
    });

    app.post('/tvs', (req, res) => {
        let checked = req.body.checked;
        let foundedTvs;
        let allTvs = [];

      

        checked.map(check => {
            if(checked){
                foundedTvs =
                    Tv.find({})
                      .where('model')
                      .regex(new RegExp(check, 'i'))
                      .then(tv => {
                          allTvs.push(tv)
                      });
            }
        });

        allTvs.map(tvs => {
            // res.send({
            //     tvs: tvs
            // })
            console.log(tvs)
        })
        // console.log(allTvs)

      


        // console.log()
    });
}