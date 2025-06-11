"use client"
import type React from "react"
import { useRef, useState } from "react"
import { Upload } from "lucide-react"
import Image from "next/image"
import Header from "@/components/dashboard/Header/Header"
import dynamic from "next/dynamic"
import { useCreateBlogMutation } from "@/redux/api/blog/blogApi"
import toast from "react-hot-toast"
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });;


export default function NewBlogPage() {
  const [title, setTitle] = useState("")
  const [subTitle, setSubTitle] = useState("")
  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)


  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setImage(file)
      setImagePreview(URL.createObjectURL(file))
    }
  }



  // Jodit
    const [content, setContent] = useState("");
    const editor = useRef(null);
    const config = {
      height: 400,
      tabIndex: 2,
    };
  const [loadding, setLoadding] = useState(false)
  const [ createBlog ]= useCreateBlogMutation()
  


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    // console.log({ title, image, content })
    setLoadding(true)
    const fullData = {
      title: title,
      description: content,
      subTitle: subTitle
    }


    


    const formData = new FormData()
          formData.append("data", JSON.stringify(fullData))
          if(image){
          formData.append("img", image)   
          }

      try{
        const result = await createBlog(formData).unwrap()
        // console.log("blog response", result)
        toast.success(result?.message || "Blog created successfully" )
        setLoadding(false) 
      }catch(error){
        console.log("blog error", error)
        toast.error("Blog created Filed")
        setLoadding(false)
      }

    // Reset form or redirect
  }



  const handleBlogCencel = () => {
    setTitle("")
    setSubTitle("")
    setContent("")
    setImage(null)
    setImagePreview(null)
  }



  return (
   <div>
     <Header/>
    <div className=" px-4 md:px-8 py-10  ">
      <div className="rounded-lg overflow-hidden bg-white">
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
                className="w-full px-3 py-3.5 border border-gray-200 rounded-md focus:outline-none  "
              />
            </div>


           <div className="space-y-2">
              <label htmlFor="title" className="text-base font-medium flex items-center">
                Blog Sub-Title <span className="text-red-500 ml-1">*</span>
              </label>
              <textarea
                rows={3}
                id="title"
                placeholder="Tips To Keep Your Relevant To All The Positions"
                value={subTitle}
                onChange={(e) => setSubTitle(e.target.value)}
                required
                className="w-full px-3 py-3.5 border border-gray-200 rounded-md focus:outline-none  "
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
                      className="mt-4 px-4 py-3.5 border border-red-400 text-red-400 rounded-md text-sm font-medium hover:bg-gray-50 focus:outline-none cursor-pointer  "
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
                      className="px-4 py-3.5 bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] hover:from-[#4f88df] hover:to-[#0096FF] cursor-pointer text-white rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
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



             {/* jodit components */}
            <div>
              <label
                htmlFor="sub-headline"
                className="text-[#2E4454] text-[18px] font-medium mb-4 block"
              >
                Description
              </label>
              <JoditEditor
                ref={editor}
                value={content}
                config={config}
                onBlur={(newContent) => setContent(newContent)}
              />
            </div>



          </form>
        </div>



        <div className="p-6  flex justify-end gap-2">
          <button
            onClick={() => handleBlogCencel() }
            type="button"
            className="px-12 py-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-6 py-3 bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] hover:from-[#4f88df] hover:to-[#0096FF] text-white rounded-md  focus:outline-none cursor-pointer"
          >
            {
              loadding ? "processing.." : "Upload Blog"
            }
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}
