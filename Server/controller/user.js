const User = require("../model/user");
const bcrypt = require("bcryptjs");
const {generateToken} = require("../utils/jwtToken");
// const {sendVerificationMail} = require("../utils/emails");
// const { verificationLink } = require("../utils/link");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user)
      return res.status(400).json({ message: "Account doesn't exist" });

    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched)
      return res.status(400).json({ message: "password don't matched" });

    const token = generateToken(user._id, user.email);

    res.status(200).json({
      user: user.name,
      token,
      role: user.role,
      isVerified: user.isVerified,
      isCompleted: user.isCompleted
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const signup = async (req, res) => {
  try{
    const {name, email, password, role} = req.body;

    const existingUser = await User.findOne({email});

    if(existingUser) 
      return res.status(400).json({ message: "Account already exist" });
    
    const user = new User({name, email, password, role, isVerified : false, isCompleted: false});

    //hashing password
    const salt =  bcrypt.genSaltSync(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;

    const newUser = await user.save();
    const token = generateToken(user._id, user.email);

    // const link = verificationLink(newUser);
    // sendVerificationMail(newUser, link);

    res.status(200).json({
      user: newUser.email,
      token,
      role: newUser.role,
      isVerified: newUser.isVerified,
      isCompleted: newUser.isCompleted
    });

  }catch (error){
    res.status(500).json({ message: "Something went wrong" });
  }

};

const verify = async (req, res) => {
  try{
    console.log(req.body);
  }catch(error){
    res.status(500).json({ message: "Something went wrong" });
  }  
}

module.exports = { login, signup, verify };
