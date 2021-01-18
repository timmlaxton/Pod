const express = require('express')
const podcasts = require('./data/podcasts')

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

app.listen(5000, console.log('Server running on port 5000'))