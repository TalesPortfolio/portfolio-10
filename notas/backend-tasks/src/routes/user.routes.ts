import express from 'express'
import * as UserController from '../controllers/user.controller'
import { authenticateToken } from '../middleware/auth.middleware'

const router = express.Router()

// Rotas públicas
router.post('/Users', UserController.createUser)
router.post('/login', UserController.login)

// Rotas protegidas
router.get('/Users', authenticateToken, UserController.getUsers)
router.put('/Users/:id', authenticateToken, UserController.updateUser)

export default router