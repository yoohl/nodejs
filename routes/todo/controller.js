const { Todo } = require('../../model')


const find = (req, res) => {
    Todo.find({})
        .then( rows => {
            res.send(rows)
        })
}

const create = (req, res) => {
    const { content } = req.body;
    const todo = new Todo({done: false, content});

    todo.save((error, data) => {
        if (error) throw new Error(error);
        res.send(data);
    })
}
const modify = (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    Todo.update({_id:id}, {content})
        .then((data) => {
            res.send(data)
        })
    
}
const remove = (req, res) => {
    const { id } = req.params;
    Todo.remove({_id:id})
        .then((data) => {
            res.send(data)
        })
    
}

module.exports = { find, create, modify, remove }