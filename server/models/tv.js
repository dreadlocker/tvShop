const mongoose = require('mongoose');
const allTvs = require('../config/allTvs');

const tvSchema = new mongoose.Schema({
    model: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: Array
    },
    id: {
        type: Number,
    },
    price: {
        type: Number
    },
    inches: {
        type: String
    },
    isBought: {
        type: Boolean
    }
});

const Tv = mongoose.model('Tv', tvSchema);

Tv.uploadData = async () => {
    try {
        let tvs = await Tv.find();
        if (tvs.length > 0) return;

        return allTvs.map(tv => {
            return Tv.create({
                model: tv.model,
                image: tv.image,
                description: tv.description,
                id: tv.id,
                price: Number(tv.price.split('.')[0]),
                inches: tv.inches,
                isBought: false
            })
        })

    } catch (e) {
        console.log(e);
    }
}

module.exports = Tv;