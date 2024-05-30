const express = require('express')
const router = express.Router()

const { LoginUser, RegisterUser } = require('../controllers/userController')

router.post('/regsiterUser', RegisterUser)
router.post('/loginUser', LoginUser)

module.exports = router