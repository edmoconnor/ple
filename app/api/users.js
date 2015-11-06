module.exports = function(app) {

var User = require('../../app/models/user');
app.get('/api/pldata', function(req, res) {

       // use mongoose to get all todos in the database
       User.find(function(err, users) {

           // if there is an error retrieving, send the error. nothing after res.send(err) will execute
           if (err)
               res.send(err)

           res.json(users); // return all todos in JSON format
       });
   });
   
};