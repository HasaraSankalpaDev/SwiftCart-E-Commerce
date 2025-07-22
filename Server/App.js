const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const path = require("path");

const userRoutes = require("./Routes/UserRoutes");
const productRoutes = require("./Routes/ProductRoutes");

const app = express();
const PORT = process.env.PORT || 8000;

// Middlewares
app.use(express.json());
app.use(cors());

// Serve uploads folder as static
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api", userRoutes);
app.use("/api", productRoutes);

// Connect to MongoDB and start server
mongoose
  .connect(
    "mongodb+srv://hasarasankalpa176:6HqSERASKUxWCMCR@users.va8qfqn.mongodb.net/?retryWrites=true&w=majority&appName=Users"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("Database connection error:", err));
