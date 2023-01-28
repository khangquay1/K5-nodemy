const express = require('express')
const router = express.Router()
const accountModel = require('../models/account')

router.get('/', (req, res, next) => {
  accountModel.find({

  })
  .then(data => {
    res.json(data)
  })
  .catch(err => {
    res.status(500).json('Loi server')
  })
})
  
router.post('/', (req, res, next) => {
  var username = req.body.username
  var password = req.body.password

  accountModel.findOne({
    username: username
  })
  .then(data=>{
    if(data) {
      res.json('Tai khoan da ton tai')
    } else {
      return accountModel.create({
        username: username,
        password: password
      })
    }
  })
  .then(data=>{
    res.json('Tao tai khoan thanh cong.')
  })
  .catch(err=>{
    // res.status(500).json('Tao tai khoan that bai.')
  })
})

router.put('/:id', (req, res, next) => {
  var id = req.params.id
  var newPassword = req.body.newPassword

  accountModel.findByIdAndUpdate(id,{
    password: newPassword
  })
  .then(data=>{
    res.json('Doi mat khau thanh cong')
  })
  .catch(err=>{
    res.status(500).json('Loi server!')
  })
})
  
router.delete('/:id', (req, res, next) => {
  var id = req.params.id

  accountModel.deleteOne({
    _id: id
  })
  .then(data=>{
    res.json('Xoa tai khoan thanh cong')
  })
  .catch(err=>{
    res.status(500).json('Loi server!')
  })
})

module.exports = router;