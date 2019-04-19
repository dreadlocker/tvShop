const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const uri = 'mongodb://localhost:27017/tvs';
const Tv = require('../models/tv'); // Initialize model
const Admin = require('../models/admin'); // Initialize model

mongoose.connect(uri).then(
    () => { 
        console.log('Connected to Mongo');
        Tv.uploadData()
          .then(() => {
            console.log('Database ready');                
        }).catch((reason) => {
            console.log('Something went wrong');
            console.log(reason);
        });
    },
    err => {
         /** handle initial connection error */ 
         console.log('error connecting to Mongo: ')
         console.log(err);
        }
  );

module.exports = mongoose.connection