const argon2 = require("bcrypt");


const hashPassword = (req, res, next) => {

  // hash the password using argon2 then call next()
argon2.hash(req.body.password).then(hashedPassword=> {
    delete req.body.password;
    req.body.hashedPassword = hashedPassword;
    next();
})
.catch =((err) => {
    console.error(err);
    res.sendStatus(500).send("not working")
})
console.log(req.body);
res.send(200);
};


module.exports = {

  hashPassword,

};