import express from 'express'
import { dashboardContoller } from '../controllers/dashboardController.js'

const dashboardRoute=express.Router()

dashboardRoute.get('/dashboard',dashboardContoller)


export default dashboardRoute