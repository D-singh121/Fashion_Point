import express from express;
import mongoose from "mongoose";

const app = express();

const PORT = process.env.PORT || 8000;
// console.log(PORT);

const URI = process.env.dburi;


// create a database connection;

mongoose.connect(URI, )