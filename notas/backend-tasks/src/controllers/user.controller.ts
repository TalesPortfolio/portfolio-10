import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export const createUser = async (req: Request, res: Response) => {
  const { email, password, city, name, surname, timezone } = req.body

  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        password,
        city,
        name,
        surname,
        timezone: timezone || 'UTC',
      },
    })
    res.status(201).json(newUser)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao criar usuário' })
  }
}

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar usuários' })
  }
}

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params
  const { email, password, city, name, surname, timezone } = req.body

  try {
    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: { email, password, city, name, surname, timezone },
    })

    res.status(200).json(updatedUser)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao atualizar usuário' })
  }
}

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body

  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Credenciais inválidas' })
  }

  // Gera o token JWT
  const token = jwt.sign(
    { id: user.id, email: user.email },
    'SEGREDO_DO_JWT', // Use variável de ambiente em produção!
    { expiresIn: '1h' }
  )

  res.json({ user, token }) // Retorna usuário + token
}