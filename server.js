const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./models");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));

//require("./routes/html-routes.js")(app);
require("./routes/api-routes")(app);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log(`Listening on PORT: ${PORT}`);
    });
});