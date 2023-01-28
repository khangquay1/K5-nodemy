const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('API Link')
})

router.get('/product', (req, res) => {
  res.send('API product')
})

router.get('/cart', (req, res) => {
  res.send('API cart')
})

router.get('/:id', (req, res) => {
    res.send('API Link with ID:' + req.params.id )
  })

module.exports = router;