"use client"

import type React from "react"

import { useState } from "react"
import {
  Upload,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Link,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  ImageIcon,
} from "lucide-react"
import Image from "next/image"
import Header from "@/components/dashboard/Header/Header"

export default function NewBlogPage() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setImage(file)
      setImagePreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log({ title, description, image })
    // Reset form or redirect
  }

  return (
   <div>
     <Header/>
    <div className=" px-4 md:px-6 py-4 ">
      <div className="rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-[500]">Add New Blog</h1>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="title" className="text-base font-medium flex items-center">
                Blog Title <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                id="title"
                placeholder="Tips To Keep Your Relevant To All The Positions"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="image" className="text-base font-medium flex items-center">
                Upload Image <span className="text-red-500 ml-1">*</span>
              </label>
              <div
                className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center ${
                  imagePreview ? "border-gray-200" : "border-blue-100 hover:border-blue-200"
                }`}
              >
                {imagePreview ? (
                  <div className="w-full">
                    <Image
                      width={500}
                      height={500}
                      src={imagePreview || "/placeholder.svg"}
                      alt="Preview"
                      className="max-h-64 mx-auto object-contain"
                    />
                    <button
                      type="button"
                      className="mt-4 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onClick={() => {
                        setImage(null)
                        setImagePreview(null)
                      }}
                    >
                      Remove Image
                    </button>
                  </div>
                ) : (
                  <>
                    <Upload className="h-10 w-10 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600 mb-1">Drop file or browse</p>
                    <p className="text-xs text-gray-400 mb-4">Format: jpeg, png & Max file size: 25 MB</p>
                    <button
                      type="button"
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onClick={() => document.getElementById("image-upload")?.click()}
                    >
                      Browse Files
                    </button>
                  </>
                )}
                <input
                  id="image-upload"
                  type="file"
                  accept="image/jpeg, image/png"
                  onChange={handleImageChange}
                  className="hidden"
                  required={!image}
                />
              </div>
            </div>


            <div className="space-y-2">
              <label htmlFor="description" className="text-base font-medium">
                Blog Description
              </label>


              <div className="border border-gray-400 rounded-md">
                <div className="flex flex-wrap items-center gap-1 p-2 border-b border-gray-400">
                  <div className="relative">
                    <select className="appearance-none w-32 h-8 px-3 py-1 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="poppins">Poppins</option>
                      <option value="arial">Arial</option>
                      <option value="times">Times New Roman</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>

                  <div className="relative">
                    <select className="appearance-none w-28 h-8 px-3 py-1 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="normal">Normal</option>
                      <option value="bold">Bold</option>
                      <option value="italic">Italic</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-center border-l pl-2 ml-1">
                    <button
                      type="button"
                      className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-gray-100"
                    >
                      <Bold className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-gray-100"
                    >
                      <Italic className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-gray-100"
                    >
                      <Underline className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-gray-100"
                    >
                      <Strikethrough className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="flex items-center border-l pl-2 ml-1">
                    <button
                      type="button"
                      className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-gray-100"
                    >
                      <List className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-gray-100"
                    >
                      <ListOrdered className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="flex items-center border-l pl-2 ml-1">
                    <button
                      type="button"
                      className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-gray-100"
                    >
                      <Heading1 className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-gray-100"
                    >
                      <Heading2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="flex items-center border-l pl-2 ml-1">
                    <button
                      type="button"
                      className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-gray-100"
                    >
                      <Link className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-gray-100"
                    >
                      <ImageIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <textarea
                  id="description"
                  placeholder="Compose an epic..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-3 min-h-[200px] outline-none resize-y"
                />
              </div>
            </div>
          </form>
        </div>



        <div className="p-6  flex justify-end gap-2">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Upload Blog
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}
