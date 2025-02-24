const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDb = require("./config/connectDb");

// config the dot env file to use it.
dotenv.config();

//databse call to establish the connection between the database and the server
connectDb();

//middlewares calling.
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

//routes
app.use("/api/v1/users", require("./routes/userRoute"));
app.use("/api/v1/transections", require("./routes/transectionRoutes"));
// app.use("/api/v1/To_Do_List", require("./routes/todoRoute"));
app.use("/api/v1/Diaries", require("./routes/diaryRoutes"));

//port
const PORT = 8080 || process.env.PORT;

//listen server 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
