const router = require("express").Router();

// setting up the routes...
const { createUser, getUsers } = require("../controllers/dbRoutes");

router.get("/getUsers", getUsers);
router.get("/createUser", createUser);

module.exports = router;
