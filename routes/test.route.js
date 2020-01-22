const express = require('express')
import { Router } from 'express'
import { check, validationResult } from 'express-validator'
const router = Router()
//import router
// const testRoute = require('/routes/test.route.js')
import { api } from '../public/jsonData'

router.get('/api', api )

module.exports = router