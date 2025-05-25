import express, { Request, Response } from 'express'

const app = express()

app.use(express.json())

app.post('/login', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Funcionou!' })
})

app.listen(4000, () => {
  console.log('🚀 Servidor rodando na porta 4000')
})
