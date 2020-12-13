const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");

dotenv.config({ path: "./config/config.env" });


const app = express();
app.use(cors());



// const transactionsRoutes = require("./routes/transaction");
// app.use("/api/v1/transactions", transactionsRoutes);




const PORT = process.env.PORT || 8080;
app.listen(
  PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`.yellow.bold
  ));