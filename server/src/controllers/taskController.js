const { mongo, default: mongoose } = require('mongoose')
const Task = require('../models/taskModel')

const createTask = async(req,res)=>{
    try {
        const {title, completed, priority, dueDate, order }= req.body

        if(!title || title.trim() === ''){
            return res.status(400).json({error: 'Title is reqired'})
        }
        const newTask = await Task.create({
            title: title.trim(),
            completed,
            priority,
            dueDate,
            order
        }
        )
        return res.status(201).json(newTask)
    } catch (error) {
        console.error('Error creating task:', error)
        return res.status(500).json({error: 'Internal Server Error'})
    }
}

const getAllTasks = async(req,res)=>{
    try {
        const allTasks = await Task.find()
        return res.status(200).json(allTasks)
    } catch (error) {
        console.error('Error getting all Tasks', error)
        return res.status(500).json({error:'Internal Server Error'})
    }
}

const updateTask = async(req,res)=>{
    const {id}= req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'Invalid task ID'})
    }

    const allowedEdits = ['title','completed','priority','dueDate','order']
    const updates = {}

    for(const key of allowedEdits) {
        if(req.body.hasOwnProperty(key)) {
            updates[key]=req.body[key]
        }
    }

    try {
        const updatedTask = await Task.findByIdAndUpdate(id, updates, {
            new: true,
            runValidators: true
        })

        if(!updatedTask) {
            return res.status(404).json({error: 'Task not found'})
        }

        return res.status(200).json(updatedTask)
    } catch (error) {
        console.error('Error updating task:', error)
        return res.status(500).json({error: 'Internal Server Error'})
    }
}

const deleteTask = async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:'Invalid task id'})
    }
    try {
        const deletedTask = await Task.findByIdAndDelete(id)

        if(!deletedTask){
            return res.status(404).json({error:'Task not found'})
        }

        return res.status(204).send()
    } catch (error) {
        console.error('Error deleting the task', error)
        return res.status(500).json({error : 'Internal Server Error'})
    }
}

module.exports = {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask
};

