const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const Inventory = require('./models/inventory.model');
const { connectDB } = require('./config/db');

dotenv.config();

const app = express();

app.use(cors({
    origin: 'https://inventory-cyan-iota.vercel.app/',
    credentials: true
}));
app.use(express.json());

app.post('/create', async (req, res) => {
    try {
        const { name, description, price, quantity } = req.body;


        const newItem = await Inventory.create({ name, description, price, quantity });

        return res.status(201).json({ success: true, data: newItem });
    } catch (error) {
        console.error("Error in /create:", error);
        return res.status(500).json({ success: false, message: error.message });
    }
});

app.get('/', async (req, res) => {
    try {
        const inventoryData = await Inventory.find();
        return res.status(200).json({ success: true, data: inventoryData });
    } catch (error) {
        console.error("Error in /:", error);
        return res.status(500).json({ success: false, message: error.message });
    }
});


connectDB()
    .then(() => {
        const PORT = process.env.PORT || 8080;
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error(`❌ Database connection failed: ${err.message}`);
        process.exit(1); 
    });
