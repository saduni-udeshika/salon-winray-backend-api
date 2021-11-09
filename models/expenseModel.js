const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({

    date: Date,
    expenseCategory: String,
    description: String,
    amount: Number
  });


const expense = mongoose.model("expense",expenseSchema);

module.exports = expense;