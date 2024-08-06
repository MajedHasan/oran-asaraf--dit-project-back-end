const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const ditRoutes = require("./routes/ditRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const inboxRoutes = require("./routes/inboxRoutes");
const upload = require("./middleware/uploadMiddleware");
const cors = require("cors"); // Import the cors package

// Middleware for parsing JSON
app.use(express.json());

// Use CORS middleware
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/dit", ditRoutes);
app.use("/api/transaction", transactionRoutes);
app.use("/api/inbox", inboxRoutes);

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the Node.js & Express.js app!");
});

// File upload route
app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded successfully");
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
