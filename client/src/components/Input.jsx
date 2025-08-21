import React, {useState} from 'react'
import axios from 'axios'

const Input = () => {
    const [taskName , setTaskName] = useState('')
    const handleChange = (e)=>{
        setTaskName(e.target.value)
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()

        if(!taskName.trim())return
        try {
            const response = await axios.post('http://localhost:5000/api/tasks',{
                title: taskName,
            })

            if (response.status === 200 || response.status=== 201){
                console.log('task added!', response.data)
                setTaskName('')
            } else{
                console.log('unexpected error..', response)
            }
        } catch (error) {
            console.log('error while sending task, cannot send task', error)
        }
    }

  return (
    
  <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <label htmlFor="task_name" className="block text-gray-700 font-medium">
        Enter task name
      </label>
      <input
        type="text"
        id="task_name"
        name="task_name"
        value={taskName}
        onChange={handleChange}
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="submit"
        value="Add"
        className="w-full p-2 border bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </form>
  </div>
  )
}

export default Input