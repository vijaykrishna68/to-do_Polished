import React from 'react'

const Input = () => {
  return (
    
  <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
    <form className="space-y-4 bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <label htmlFor="task_name" className="block text-gray-700 font-medium">
        Enter task name
      </label>
      <input
        type="text"
        id="task_name"
        name="task_name"
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