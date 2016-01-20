"use strict";

/**
* We will use require instead of the new and fancy 'import' keyword because
 * the import feature is not yet supported in NodeJS v 5.4.1
* */

let express = require('express');


let apiController = require('./controllers/apiController.js');
let subApiController = require('./controllers/subApiController.js');

let app = express();
let router = express.Router();

/*ES6 POO training*/
let parentClass = new apiController(12,13);
let childClass = new subApiController(12,13, "red");


/**
 * POO calls
 * */


console.log(parentClass.calcArea());
console.log(childClass.calcArea());
console.log(childClass.printSizesAndColor());
console.log("Static method for child class");
console.log(childClass.getDefaultVariables());


/**
 * Getters and setters
 * */

console.log(childClass.height);
console.log(childClass.getDefaultVariables());
childClass.height = 300;
console.log(childClass.getDefaultVariables());
console.log(childClass.calcArea());




// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    "use strict";
    res.json({
        "code" : "2",
        "msg" : "The form is invalid."
    });
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Development mode: Node front-end resume listening at http://%s:%s', host, port);
});