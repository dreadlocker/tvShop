const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const uri = 'mongodb://localhost:27017/gig';
const tv = require('../models/tv'); // Initialize model

mongoose.connect(uri).then(
    () => { 
        console.log('Connected to Mongo');
    },
    err => {
         /** handle initial connection error */ 
         console.log('error connecting to Mongo: ')
         console.log(err);
        }
  );

module.exports = mongoose.connection