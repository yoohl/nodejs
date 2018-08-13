const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoSChema = new Schema(
    {
        isComplete: { type: Boolean },
        content: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
    }, 
    { collection: 'todo' }
);

const Todo = mongoose.model('Todo', TodoSChema);

module.exports = { Todo }