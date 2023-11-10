import express, { Application, NextFunction, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'

import { createUserService } from '../src/app/userService/createUser'
import { AppError } from './error/error'

import userRouter from '../src/app/routes/user.routes'
import { errorLogger } from './shared/logger'
import morgan from 'morgan'
app.use(cors())
app.use(morgan('dev'))
//app add fd
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req: Request, res: Response) => {
  const data = await createUserService({
    id: '8888',
    password: 'Hello!',
    role: 'student',
  })
  res.send(data)
})

//Testing
app.get('/test-error', (req: Request, res: Response) => {
  throw new AppError(400, 'Error occured')
})
app.use('/user', userRouter)
app.use((err, req: Request, res: Response, next: NextFunction) => {
  errorLogger.error(err)
  res.status(500).json({
    success: false,
    message: err,
  })
})
export default app
