const mongoose = require('mongoose')

const connectionString = "mongodb://127.0.0.1:27017/course"

mongoose.connect(connectionString)
.then(()=>{
    console.log('connection Established')
})
.catch((err)=>{
    console.log(err)
})