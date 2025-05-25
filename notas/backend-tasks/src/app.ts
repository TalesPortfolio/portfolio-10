import express from 'express'
import cors from 'cors'
import userRoutes from './routes/user.routes'

const app = express()

app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}))

app.use(userRoutes)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})