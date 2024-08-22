// Importing the mongoose library
const { connect, connection } = require('mongoose');

const connectionString = 'mongodb://127.0.0.1:27017/PrekshaDB';

connect(connectionString);

// Exporting the connection to the database as a module
module.exports = connection 