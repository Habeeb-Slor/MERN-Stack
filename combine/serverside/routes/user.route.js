const express =  require("express")
const router = express.Router();
const {register} = require("../controllers/user.contoller")

router.post("/register",register)

module.exports = router;

