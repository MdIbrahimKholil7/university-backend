import express from 'express'
import validateRequest from '../../middlwares/validateRequest'
import { AcademicSemesterZodSchema } from './academicSemesterZodSchema'
const router = express.Router()

router.post(
  '/',
  validateRequest(
    AcademicSemesterZodSchema.academicSemesterZodSchemaValidation,
  ),
)

export default router
