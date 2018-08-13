const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const database = require('./database');

// const { Todo } = require('./model');

const app = express();

app.use(bodyParser.json())
app.use(routes)

// app.get('/', (req,res) => {
//     Todo.find({}).then((rows) => {
//         res.send(rows)
//     })
// })

app.listen('8080', async () => {
    console.log('start server port : 8080');
    try {
        await database.connect();  
        console.log('connect!') 
    } catch(e) {
        console.log('fail!')
    }
})


// app.listen('8080', () => {
//     console.log('start server port : 8080');
    
//     database.connect()
//         .then(() => {
//             console.log('connect!')
//         })
//         .catch(e => {
         
//         console.log('fail!')    
//         })
   
// })