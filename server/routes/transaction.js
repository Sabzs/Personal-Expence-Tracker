const express = require("express");
const { get } = require("mongoose");
const router = express.Router();
const { getTransactions, addTransaction, deleteTransaction } = require("../controllers/transactions")

// router.get("/", (req, res) => { res.send("Welcome to the Backend ROUTER")})

router.route("/")
  .get(getTransactions)
  .post(addTransaction);

router.route("/:id")
  .delete(deleteTransaction)


module.exports = router; 