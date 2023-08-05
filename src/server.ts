import mongoose from 'mongoose'
import app from './app'
import config from './config'

const bootstrap = async () => {
  try {
    mongoose.connect(config.database_url as any)
    console.log('😎😋😎 database connection established successfully ✅✅✅')
    app.listen(config.port, () =>
      console.log('server listening on port ', config.port),
    )
  } catch (error) {
    console.log('😡😡🥵 Error:', error)
  }
}

bootstrap()
