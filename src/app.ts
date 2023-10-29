import express, { Application } from 'express'
const app: Application = express()
import cors from 'cors'
app.use(cors())

//app add fd
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
export default app
