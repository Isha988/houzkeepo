const jwt = require("jsonwebtoken");

const generateToken = (id, email) => {
    const token = jwt.sign(
        {id, email},
        process.env.JWT_SECRET,
        { expiresIn: "15d" }
    )

    return token;
} 

const customToken = (id, email, expires) => {
    const token = jwt.sign(
        {id, email},
        process.env.JWT_SECRET,
        { expiresIn: expires }
    )

    return token;
} 

module.exports = {generateToken, customToken};