const bcrypt = require('bcryptjs');

exports.get = (req, res) => {
};

exports.register = function(req, res){
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    res.status(200).send({
        name : req.body.name,
        email : req.body.email,
    });
    // User.create({
    //     name : req.body.name,
    //     email : req.body.email,
    //     password : hashedPassword
    // },
    // function (err, user) {
    //     if (err) return res.status(500).send("There was a problem registering the user.")
    //     // create a token
    //     var token = jwt.sign({ id: user._id }, "config.secret", {
    //     expiresIn: 86400 // expires in 24 hours
    //     });
    //     res.status(200).send({ auth: true, token: token });
    // }); 
}

exports.sign_in = function(req, res){

}