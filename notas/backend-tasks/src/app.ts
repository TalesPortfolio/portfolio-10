import express from 'express'
import cors from 'cors'
import userRoutes from './routes/user.routes'

const app = express()

app.use(express.json())
app.use(cors({
  origin: 'https://bloco-note.vercel.app/',
  credentials: true,
}))

app.use(userRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})