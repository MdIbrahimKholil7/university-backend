import express from 'express'
import { UserController } from '../controller/user/user.controller'
import validateRequest from '../middlwares/validateRequest'
import { UserValidation } from '../controller/user/userZodValidation/userZodSchemaValidation'
const router = express.Router()

router.post(
  '/create',
  validateRequest(UserValidation.userZodSchemaValidation),
  UserController.createUser,
)

export default router
