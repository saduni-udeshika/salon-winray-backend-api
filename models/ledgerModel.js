const mongoose = require('mongoose');

const ledgerSchema = new mongoose.Schema({

    ledgerId: Number,
    date: Date,
    note: String,
    type: String,
    paymentMethod: String
  });


const ledger = mongoose.model("ledger", ledgerSchema);

module.exports = ledger;