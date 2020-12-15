const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const transactionsRoutes = require("./routes/transaction");

dotenv.config({ path: "./config/config.env" });
connectDB();


app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}


app.use("/api/v1/transactions", transactionsRoutes);



const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`.yellow.bold
  ));


