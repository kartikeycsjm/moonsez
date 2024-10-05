'use client'
import React, { useState } from "react";

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    subject: "",
    role: "",
    resume: null,
    comments: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div className='w-full min-h-screen'>
         <div className='w-full h-[100px] bg-[rgba(7,150,254)] flex justify-center items-center'>
        <h1 className='bg-white px-4 py-1 capitalize' id='x'>Career with us</h1>
      </div>
      <h2 className="text-[17px] font-bold text-center my-6">
        YOUR PITCH FOR JOINING MOONSEZ
      </h2>
      <p className="text-center m-4 text-[12px]">
        The Moonsez Consultants provides a highly professional environment and
        career, Where sky is the limit for the right candidate's. We believe in
        Teamwork, Discipline & leadership. The best employees are always being
        trusted and recognized by the Company.
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="border p-2 rounded w-full border-blue-600"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-2 rounded w-full border-blue-600"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Contact Number"
            className="border p-2 rounded w-full border-blue-600"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="border p-2 rounded w-full border-blue-600"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="border p-2 rounded w-full border-blue-600"
          >
            <option value="">Select Your Role</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="w-full"
          />
        </div>
        <p className="text-sm text-gray-600">
          Upload Your Resume (only .pdf files allow and Max size 2MB)
        </p>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          placeholder="Reference/Comments/Questions" 
          className="border p-2 rounded w-full border-blue-600 resize-none"
          rows="3"
        />
        <div className="flex items-center space-x-2">
          <input type="checkbox" className="h-4 w-4" />
          <p className="text-sm">I'm not a robot</p>
        </div>
        <button
          type="submit"
          className="w-full bg-[rgba(7,150,254)] text-white p-3 rounded-lg hover:bg-orange-600"
        >
          Apply Job
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
