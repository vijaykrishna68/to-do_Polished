const express = require('express')
const router = express.Router()
const {deleteTask, updateTask, createTask, getAllTasks} = require('../controllers/taskController')

router.delete('/:id',deleteTask)
router.get('/',getAllTasks)
router.put('/:id',updateTask)
router.post('/',createTask)

module.exports = router ;