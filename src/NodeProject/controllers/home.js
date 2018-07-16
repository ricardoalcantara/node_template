const business = require('../../BusinessOne/Business');

exports.index = (req, res) => {
    const obj = business.getObj();
    res.status(200).send("Welcome to our restful API " + obj.name);
};