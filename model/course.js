const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    course_Name:String,
    course_Category:String,
    course_Status:String,
    created_at: Date
})

const CourseModel =  mongoose.model("course",courseSchema)

module.exports = CourseModel