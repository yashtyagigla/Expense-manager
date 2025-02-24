const mongoose = require("mongoose");
const colors = require("colors");
//creating a function to establish a connection between server and the database.
const connectDb = async () => {
  try {
    //here we are using the  local database.
    await mongoose.connect(process.env.MONGO_URL);
    //printing the url of the local database and using the colors package to show it differently.
    console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    //if any kind of errors occured printing the errors.
    console.log(`${error}`.bgRed);
  }
};
//exporting the file
module.exports = connectDb;
