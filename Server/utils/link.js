const { generateToken } = require("./jwtToken")

const verificationLink = (user) => {
    const token = generateToken(user.id, user.email);
    const link = `${process.env.CLIENT_URL}/verify/${token}`;

    return link;
}

module.exports = {verificationLink};