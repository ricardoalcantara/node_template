const bcrypt = require('bcryptjs');

// users.js
// Fake list of users to be used in the authentication
var users = [
    {id: 1, name: "Ricardo Alcantara", email: "alcantarafox@yahoo.com.br", password: bcrypt.hashSync("123", 8)},
    {id: 2, name: "Diorbert", email: "diorbert@gmail.com", password: bcrypt.hashSync("321", 8)}
    ];
    
module.exports = users;