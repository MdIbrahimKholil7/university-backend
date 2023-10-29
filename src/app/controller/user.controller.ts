import { Request, Response } from 'express'
import { createUserService } from '../userService/createUser'
import { successLogger } from '../../shared/logger'

class UserController {
  static createUser = async (req: Request, res: Response) => {
    const data = await createUserService({
      id: '8888',
      password: 'Hello!',
      role: 'student',
    })
    successLogger.info(data)
    res.send(data)
  }
}

export { UserController }
