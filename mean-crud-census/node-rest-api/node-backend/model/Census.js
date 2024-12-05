const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CensusSchema = new Schema({
    census_year: { type: String },
    takers_name: { type: String },
    household_members: { type: String },
    street: { type: String },
    state: { type: String },
    city: { type: String },
    zip_code: { type: String },
    updated_date: { type: Date, default: Date.now }
}, {
    collection: 'census'
});

module.exports = mongoose.model('Census', CensusSchema);
