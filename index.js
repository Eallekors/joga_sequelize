const express = require("express")
const app = express();

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlecoded
app.use(express.urlencoded({ extended: true }));

//connect to database
const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

//testing connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Connected to the database.');
    })
    .catch(err => {
        console.log('Unable to onnect to the database:', err);
    })


//simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to sequilze application." });
});

//listen requests
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})