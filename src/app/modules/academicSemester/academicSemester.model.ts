import { Schema, model } from 'mongoose'
import {
  IAcademicSemester,
  IAcademicSemesterModel,
} from './academicSemester.interfeace'

const monthEnum = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: ['Autumn', 'Summer', 'Fall'],
    },
    endMonth: {
      type: String,
      required: true,
      enum: monthEnum,
    },
    startMonth: {
      type: String,
      required: true,
      enum: monthEnum,
    },
    code: {
      type: String,
      required: true,
      enum: ['01', '02', '03'],
    },
    year: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)
const AcademicSemesterModel = model<IAcademicSemester, IAcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema,
)
export default AcademicSemesterModel
