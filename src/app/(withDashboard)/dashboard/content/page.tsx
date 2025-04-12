import Header from '@/components/dashboard/Header/Header'
import React from 'react'
import {
  
    Upload,
    
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Heading,
    List,
    ListOrdered,
    CheckSquare,
    Superscript,
    Subscript,
    Link,
  } from "lucide-react"


const page = () => {
  return (
    <div>
        <Header/>


{/* Content */}
<main className="m-6 p-6 bg-white rounded-lg shadow-sm">
  <h1 className="text-2xl font-bold mb-6">Add New Blog</h1>

  <form>
    {/* Blog Title */}
    <div className="mb-6">
      <label className="block font-medium mb-2">
        Blog Title <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        placeholder="Tips To Keep Your Relevant To All The Positions"
        className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>


    {/* Upload Image */}
    <div className="mb-6">
      <label className="block font-medium mb-2">
        Upload Image <span className="text-red-500">*</span>
      </label>
      <div className="border-2 border-dashed border-gray-300 rounded-md p-8 text-center">
        <div className="flex justify-center mb-2">
          <Upload className="h-12 w-12 text-gray-400" />
        </div>
        <p className="text-base mb-1">Drop file or browse</p>
        <p className="text-sm text-gray-500 mb-4">Format: .jpeg, .png & Max file size: 25 MB</p>
        <button
          type="button"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Browse Files
        </button>
      </div>
    </div>

    {/* Blog Description */}
    <div className="mb-6">
      <label className="block font-medium mb-2">Blog Description</label>
      <div className="border border-gray-300 rounded-md">
        {/* Editor Toolbar */}
        <div className="border-b p-2 flex flex-wrap gap-1.5">
          <div className="flex items-center gap-1.5 mr-2">
            <button type="button" className="px-2 py-1 border border-gray-300 rounded text-sm">
              Poppins
            </button>
            <button type="button" className="px-2 py-1 border border-gray-300 rounded text-sm">
              Normal
            </button>
          </div>
          <div className="h-6 w-px bg-gray-300 mx-1"></div>
          <div className="flex items-center gap-1.5">
            <button type="button" className="p-1.5 hover:bg-gray-100 rounded-md">
              <Bold size={16} />
            </button>
            <button type="button" className="p-1.5 hover:bg-gray-100 rounded-md">
              <Italic size={16} />
            </button>
            <button type="button" className="p-1.5 hover:bg-gray-100 rounded-md">
              <Underline size={16} />
            </button>
            <button type="button" className="p-1.5 hover:bg-gray-100 rounded-md">
              <Strikethrough size={16} />
            </button>
            <button type="button" className="p-1.5 hover:bg-gray-100 rounded-md">
              <Heading size={16} />
            </button>
            <button type="button" className="p-1.5 hover:bg-gray-100 rounded-md">
              <List size={16} />
            </button>
            <button type="button" className="p-1.5 hover:bg-gray-100 rounded-md">
              <ListOrdered size={16} />
            </button>
            <button type="button" className="p-1.5 hover:bg-gray-100 rounded-md">
              <CheckSquare size={16} />
            </button>
            <button type="button" className="p-1.5 hover:bg-gray-100 rounded-md">
              <Superscript size={16} />
            </button>
            <button type="button" className="p-1.5 hover:bg-gray-100 rounded-md">
              <Subscript size={16} />
            </button>
            <button type="button" className="p-1.5 hover:bg-gray-100 rounded-md">
              <Link size={16} />
            </button>
            <button type="button" className="p-1.5 hover:bg-gray-100 rounded-md">
              {/* <Image size={16} /> */}
            </button>
          </div>
        </div>

        {/* Editor Content */}
        <div className="p-4">
          <textarea
            placeholder="Compose an epic..."
            className="w-full min-h-[250px] focus:outline-none resize-none"
          ></textarea>
        </div>
      </div>
    </div>

    {/* Action Buttons */}
    <div className="flex justify-end gap-3 mt-8">
      <button
        type="button"
        className="px-6 py-2.5 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="px-6 py-2.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Upload Blog
      </button>
    </div>
  </form>
</main>
    </div>
  )
}

export default page