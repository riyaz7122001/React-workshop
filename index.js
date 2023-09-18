require("dotenv").config();
const express = require("express");

// setting up the routes...
const dbRoutes = require("./routes/dbRoutes");

// setting up the server...
const PORT = process.env.PORT;
const app = express();
app.listen(PORT, async () => {
  console.log(`listening at http://localhost:${PORT}`);
});

//setting up the middlewares...
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/database", dbRoutes);
