import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

interface JwtPayload {
  id: number
  email: string
}

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload
    }
  }
}

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    res.status(401).json({ error: 'Token não fornecido' })
    return
  }

  try {
    const user = jwt.verify(token, 'SEGREDO_DO_JWT') as JwtPayload
    req.user = user
    next() // ✅ Só continua se o token for válido
  } catch (error) {
    res.status(403).json({ error: 'Token inválido' })
  }
}