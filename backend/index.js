const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product'); // ✅ added

const app = express();
app.use(cors());
app.use(express.json());

// ✅ route handlers
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes); // ✅ added

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// MongoDB connect
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
