const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

exports.connect = () => {

    return new Promise((resolve, reject) => {

        mongoose.connect('mongodb://test:test1234@ds149309.mlab.com:49309/databasetest', { useNewUrlParser: true });
    
        const connection = mongoose.connection;
        
        connection.on('error', reject);
        connection.once('open', resolve);
    
    })
}

