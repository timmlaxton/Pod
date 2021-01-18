import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import podcasts from './data/podcasts.js'


dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/podcasts', (req, res) => {
  res.json(podcasts)
})

app.get('/api/podcasts/:id', (req, res) => {
  const podcast = podcasts.find(p => p._id === req.params.id)
  res.json(podcast)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))