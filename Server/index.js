const express = require ("express");
const cors = require ("cors");
const dotenv = require("dotenv");
const mongoDbConfig = require("./config/database");
const userRoutes = require("./route/user");

const app = express();
const port = process.env.PORT || 8000;

dotenv.config();
mongoDbConfig();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

app.use("/user", userRoutes);

app.listen(port, ()=>{
    console.log(`app is running on port :${port}`)
})