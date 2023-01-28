const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const accountModel = require('./models/account')
const path = require('path')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = 3000

// const router = require('./apiRouter.js')
// app.use('/admin/api/',router)
// app.use('/api/',router)

app.post('/register', (req, res, next) => {
  var username = req.body.username;
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

app.post('/login', (req, res, next)=> {
  var username = req.body.username
  var password = req.body.password
  
  accountModel.findOne({
    username: username,
    password: password
  })
  .then(data => {
    if(data) {
      res.json('dang nhap thanh cong')
    } else {
      res.status(300).json('account ko dung, dang nhap that bai!')
    }
  })
  .catch(err => {
    res.status(500).json('co loi ben server')    
  })
})

/////
var accountRouter = require('./routers/account.js')
app.use('/api/account', accountRouter)

/////
app.use('/public',express.static(path.join(__dirname,'./public')))

app.get('/', (req, res, next) => {
  var linkIndex = path.join(__dirname,'./views/index.html');
  res.sendFile(linkIndex);
})

app.listen(port, () => {
  console.log(`Example app listening on port  http://localhost:${port}`)
})