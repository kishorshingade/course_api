const app = require('express')
const route = app.Router()
const CourseModel = require('../model/course')

route.get('/', async(req,res)=>{
    try{
       const sendData = await CourseModel.find({})
       res.send(sendData)
    }catch(err){
        res.send(err)
    }
})

route.get('/:courseId', async(req,res)=>{
      try{
      const id = req.params.courseId
      const sendData = await CourseModel.findById(id)
      res.send(sendData)
      }catch(err){
        res.send(err)
      }
})

route.post('/',async(req,res)=>{
     try{
        const sendData = new CourseModel(req.body)
        const saveData = await sendData.save()
        res.send(saveData)

     }catch(err){
       res.send(err)
     }
})

route.put('/:courseId',async(req,res)=>{
    try{
     const id = req.params.courseId
     const sendData = await CourseModel.findByIdAndUpdate(id,req.body)
     res.send(sendData)
    }catch(err){
        res.send(err)
    }
})

route.delete('/:courseId',async(req,res)=>{
    try{
      const id = req.params.courseId
      const sendData = await CourseModel.findByIdAndDelete(id)
      res.send(sendData)
    }catch(err){
        res.send(err)
    }
})

module.exports = route