import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import podcasts from './data/podcasts.js'
import User from './models/userModel.js'
import Podcast from './models/podcastModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    
    await Podcast.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const samplePodcasts = podcasts.map(podcast => {
      return { ...podcast, user: adminUser }
    })


    await Podcast.insertMany(samplePodcasts)
    console.log('Data Imported!')
    process.exit()
    
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
    
  }
}


const destroyData = async () => {
  try {
    
    await Podcast.deleteMany()
    await User.deleteMany()
  
  
    console.log('Data Destroyed!')
    process.exit()
    } catch (err) {
      console.error(`${error}`)
      process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}