import { Schema, Model, model } from 'mongoose'
import { User } from '../interface/userInterface'

type UserModel = Model<User, object>

const userSchema = new Schema<User>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)
const UserModel = model<User, UserModel>('User', userSchema)
export default UserModel
