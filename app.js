const express = require('express')
const app = express()
const PORT = process.env.PORT || 3030
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const translate = require('./translate/translate_controller')

app.get('/',translate.main)

app.listen(PORT,()=>{
   console.log( `listening to port ${PORT}`
   )})