const mongoose = require('mongoose');

const inventorySchema = mongoose.Schema({
    name:{type: String},
    description: {type: String},
    price: {type: Number},
    quantity: {type: Number, default: 0}
})


module.exports = mongoose.model("Inventory", inventorySchema)

