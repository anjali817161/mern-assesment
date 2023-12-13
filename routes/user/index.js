const express = require('express')
const { userCreation } = require('../../controllers/user')
const router = express.Router()

router.post('/', userCreation)


module.exports = router
