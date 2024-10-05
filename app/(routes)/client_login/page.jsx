'use client'

import { useState } from 'react'
import { User, Lock } from 'lucide-react'

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempted with:', { username, password })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b 
    from-blue-500 to-blue-900">
      <div className="w-[90%] max-w-md p-8 bg-white bg-opacity-20 
        rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-white mb-8">Client Support System</h1>
        <h2 className="text-xl text-center text-white mb-6">Login to your account</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login →
          </button>
        </form>
        <p className="mt-8 text-center text-sm text-white">
          2024 © Moon SEZ Consultants Pvt.Ltd. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}