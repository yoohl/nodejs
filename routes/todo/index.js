const route = require('express').Router();
const ctrl = require('./controller');


route.get('/', ctrl.find);

route.post('/', ctrl.create)
route.put('/:id', ctrl.modify)
route.delete('/:id', ctrl.remove)

module.exports = route;