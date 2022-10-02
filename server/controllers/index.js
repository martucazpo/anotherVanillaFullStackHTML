const authControllers = require("./authControllers")

module.exports = {
    testUser:authControllers.testUser,
    createUser: authControllers.createUser
}