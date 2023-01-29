const mongoose = require ("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    phone: Number,
    aadhar: Number,
    img: String,
    age: Number,
    bio: String,
    country: String,
    countryCode: Number,
    state: String,
    stateCode: Number,
    city: String,
    interests: [String],
    isVerified: Boolean,
    isCompleted: Boolean

}, {timeStamps : true});

module.exports = mongoose.model('users', userSchema);