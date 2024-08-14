const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const ditRoutes = require("./routes/ditRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const inboxRoutes = require("./routes/inboxRoutes");
const bankRoutes = require("./routes/bankRoutes");
const upload = require("./middleware/uploadMiddleware");
const path = require("path");
const cors = require("cors"); // Import the cors package

// Middleware for parsing JSON
app.use(express.json());

// Use CORS middleware
app.use(cors());

// app.use("/uploads", express.static("public/uploads"));
app.use("/public", express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/dit", ditRoutes);
app.use("/api/transaction", transactionRoutes);
app.use("/api/inbox", inboxRoutes);
app.use("/api/bank", bankRoutes);

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the Node.js & Express.js app!");
});

// File upload route
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ error: "Please upload a file" });
  }

  const fileUrl = `${req.protocol}://${req.get("host")}/public/uploads/${
    req.file.filename
  }`;
  res.status(200).send({ fileUrl });
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
