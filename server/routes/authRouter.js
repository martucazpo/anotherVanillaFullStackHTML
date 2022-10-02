const router = require("express").Router()
const controllers = require("../controllers")

router.route("/signup")
    .post(controllers.createUser)
router.route("/test")
    .post(controllers.testUser)


module.exports = router