import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, successLogger } from './shared/logger'

process.on('uncaughtException', error => {
  errorLogger.error('Uncaught Exception:', error)
})

const bootstrap = async () => {
  try {
    mongoose.connect(config.database_url as string)
    successLogger.info(
      '😎😋😎 database connection established successfully ✅✅✅',
    )
    successLogger.info('Port', 33)
    app.listen(config.port, () =>
      successLogger.info('server listening on port ', config.port),
    )
  } catch (err) {
    errorLogger.error('😡😡🥵 Error:', err)
  }
}

process.on('unhandledRejection', () => {
  errorLogger.error('Unhandled rejection')
})
process.on('SIGTERM', () => {
  errorLogger.error('Sigterm received')
})
bootstrap()
