const userModel = require("../models/userModel");
const bcryptjs = require("bcryptjs");

// since we can not store the user data like passwords directly in the database
// so we need to hash the password and than store it in the database so that no one can access it directly.
//this function takes user passward as an argument and hash it.
async function hashpass(password) {
  const res = await bcryptjs.hash(password, 10);
  return res;
}
//this function compares the hashedpassward with the original userpassword to check wether they are same or not.
async function compare(userpass, hashpass) {
  const res = await bcryptjs.compare(userpass, hashpass);
  return res;
}


// login callback to check wether the user exist in the system or not.
const loginController = async (req, res) => {
  try {
    //destructing the data from req.body
    const { email, password } = req.body;
    //check wether user exist in the database or not.
    const user = await userModel.findOne({ email });
    //if user exist in the database then compare the passward they entered with the passward stored in db.
    const passcheck = await compare(password, user.password);
    if (!user) {
      return res.status(404).send("User Not Found");
    }
    if (user && passcheck) {
      res.status(200).json({
        success: true,
        user,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};


//Register Callback to register the new user in the database.
const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //creating a object of the data that user is entered.
    const data = {
      name: req.body.name,
      email: req.body.email,
      password: await hashpass(req.body.password),
    };
    //store the data in the db.
    await userModel.insertMany([data]);
    res.status(201).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

module.exports = { loginController, registerController };
