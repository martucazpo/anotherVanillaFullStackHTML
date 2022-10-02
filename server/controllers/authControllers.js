const { User } = require("../db/models")
const bcrypt = require("bcryptjs")

module.exports = {
    testUser: function (req, res) {
        let { email } = req.body
        User.findOne({ email }, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.json(data)
            }
        })
    },
    createUser: function (req, res) {
        let { firstName, lastName, email, password1, password2 } = req.body
        let password
        if (password1 !== password2) {
            return res.json({ message: "The passwords do not match, please re-enter" })
        } else {
            password = bcrypt.hashSync(password1, 10)
        }
        User.findOne({ email }, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                if (!data) {
                    let newUser = new User({firstName, lastName, email, password})
                    newUser.save((err, data) => {
                        if (err) {
                            console.log(err)
                        } else {
                            return res.json(data)
                        }
                    })
                } else {
                    return res.json({ message: "This email is already registered in the database" })
                }
            }
        })
    }
}