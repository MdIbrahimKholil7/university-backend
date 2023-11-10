import { Model } from 'mongoose'

type Month =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'
// 1. Create an interface representing a document in MongoDB.
export type IAcademicSemester = {
  title: 'Autumn' | 'Summer' | 'Fall'
  endMonth: Month
  startMonth: Month
  code: '01' | '02' | '03'
  year: number
}

export type IAcademicSemesterModel = Model<IAcademicSemester>
