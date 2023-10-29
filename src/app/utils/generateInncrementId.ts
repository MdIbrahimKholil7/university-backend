import { User } from '../interface/userInterface'
import UserModel from '../modules/user.model'

const findLastId = async (): Promise<string> => {
  const user: User | null = await UserModel.findOne({} /* { id: 1, _id: 0 } */)
    .sort({ createdAt: -1 })
    .lean()
  return user?.id || '0'.padStart(5, '0')
}

export const generateID = async (): Promise<string> => {
  const id = await findLastId()
  const incrementId = +id + 1
  return incrementId.toString().padStart(5, '0')
}
