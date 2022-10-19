const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://junheefr789:rka3695159!@junheefr789.pulw7eo.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>console.log('MongoDb Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))