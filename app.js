const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cats = require("./routes/cats");
const cors = require("cors");
const home = require("./routes/home");
const users = require("./routes/users")
const auth = require("./routes/auth")

app.use(cors());
app.use('/api/cats', cats);
app.use(express.json());
app.use('/', home);
app.use('/api/users', users);
app.use('/api/auth', auth);

app.listen(5000, () => {
    console.log("app started successfully");
});

// databas connection
mongoose.connect("mongodb://localhost/catsdb", {useNewUrlParser: true})
.then(() => {
    console.log("DB connection successfull");
})
.catch(() => {
    console.log("Error: " + err);
});
    
