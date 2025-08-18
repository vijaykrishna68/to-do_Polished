const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title : {
        type : String ,
        required : [true, 'Title is necessary'],
        trim : true,
        validate: {
    validator: function(v) {
        return v.length > 0;
    },
    message: 'title cannot be empty'
}
    },
    completed : {
        type: Boolean ,
        default : false
    },
    priority :{
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    },
    dueDate :{
        type: Date
    },
    order:{
        type : Number
    }
},{timestamps:true})
taskSchema.index({createdAt:1})

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;

