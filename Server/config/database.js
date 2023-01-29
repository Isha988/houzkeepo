const mongoose = require ("mongoose");

const databaseConfig = () => {
    mongoose.set('strictQuery', false);    
    mongoose.connect(process.env.MONGODB_URL)
        .then(()=> console.log("connected to database"))
        .catch((error) => console.log("connection failed"))
}


module.exports = databaseConfig;