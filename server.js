var express = require('express');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8000;

// Requiring our models for syncing
var db = require("./models");

// Static directory
app.use(express.static(process.cwd() + '/public'));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: false}));


// Method Override
app.use(methodOverride('_method'));

//Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/helpinghands_controller.js');
app.use('/', routes);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT: " + PORT);
    });
});

