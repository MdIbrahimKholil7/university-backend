import config from '../../config'
import { User } from '../interface/userInterface'
import UserModel from '../modules/user.model'
import { generateID } from '../utils/generateInncrementId'

const createUserService = async (data: User): Promise<User | null> => {
  data.id = await generateID()
  data.password = config.default_user_pass as string
  const user = await UserModel.create(data)
  if (!user) {
    throw new Error('Failed to create user')
  }
  return user
}

export { createUserService }
