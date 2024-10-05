'use client'
import React from 'react'
import { useState } from 'react'
import { Home, Phone, Mail } from 'lucide-react'

const page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }
  return (
    <div className='w-full min-h-screen'>
      <div className='w-full h-[100px] bg-[rgba(7,150,254)] flex justify-center items-center'>
        <h1 className='bg-white px-4 py-1' id='x'>Contact Us</h1>
      </div>
      <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-2 border border-blue-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-2 border border-blue-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full p-2 border border-blue-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                className="w-full p-2 border border-blue-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="recaptcha"
                className="mr-2"
                required
              />
              <label htmlFor="recaptcha" className="text-sm text-gray-600">
                I'm not a robot
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="px-4 py-2 text-white border bg-[rgba(7,150,254)] rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Drop Your Message
              </button>
            </div>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Our Offices</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-700">Head Office:</h3>
              <div className="flex items-start mt-2">
                <Home className="w-5 h-5 text-gray-500 mr-2 mt-1" />
                <p className="text-gray-600">
                  Office No 311, 312, Pride Purple Square, Kalewadi Phata, Wakad, Pune-411057
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Phone number:</h3>
              <div className="flex items-center mt-2">
                <Phone className="w-5 h-5 text-gray-500 mr-2" />
                <a href="tel:+910206791656" className="text-gray-600 hover:text-blue-500">
                  +91 020 6791 6565
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">E-mail:</h3>
              <div className="flex items-center mt-2">
                <Mail className="w-5 h-5 text-gray-500 mr-2" />
                <div>
                  <a href="mailto:ratan@sezindia.co.in" className="text-gray-600 hover:text-blue-500 block">
                    ratan@sezindia.co.in
                  </a>
                  <a href="mailto:ashish@sezindia.co.in" className="text-gray-600 hover:text-blue-500 block">
                    ashish@sezindia.co.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page

