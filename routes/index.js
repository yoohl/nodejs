const route = require('express').Router();
const todo = require('./todo')


route.get('/', function (req, res) {
    res.send('Hello World!');
});
route.use('/todo', todo);

module.exports = route;