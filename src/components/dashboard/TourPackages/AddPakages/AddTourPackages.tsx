/* eslint-disable @next/next/no-img-element */
"use client"

import type React from "react"
import { useState } from "react"
import { Upload, Plus, Trash2, X } from "lucide-react"

interface Feature {
  title: string
  description: string
  icon: File | null
  iconPreview: string | null
}

export default function FeatureForm() {
  const [tourLovingReasons, settourLovingReasons] = useState<Feature[]>([
    {
      title: "",
      description: "",
      icon: null,
      iconPreview: null,
    },
  ])
  const [isSubmitting, setIsSubmitting] = useState(false)













  const handleAddFeature = () => {
    settourLovingReasons([
      ...tourLovingReasons,
      {
        title: "",
        description: "",
        icon: null,
        iconPreview: null,
      },
    ])
  }

  const handleRemoveFeature = (index: number) => {
    if (tourLovingReasons.length > 1) {
      settourLovingReasons(tourLovingReasons.filter((_, i) => i !== index))
    }
  }

  const handleInputChange = (index: number, field: "title" | "description", value: string) => {
    settourLovingReasons(tourLovingReasons.map((feature, i) => (i === index ? { ...feature, [field]: value } : feature)))
  }



  const handleFileChange = (index: number, file: File | null) => {
    settourLovingReasons(
      tourLovingReasons.map((feature, i) => {
        if (i === index) {
          return {
            ...feature,
            icon: file,
            iconPreview: file ? URL.createObjectURL(file) : null,
          }
        }
        return feature
      }),
    )
  }

























  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)


    
    try {
      // Create FormData to handle file uploads
      const formData = new FormData()

      // Add tourLovingReasons as JSON string (except for the files)
      const tourLovingReasonsData = tourLovingReasons.map((feature) => ({
        title: feature.title,
        description: feature.description,
        icon: feature.icon
      }))
      console.log('data', tourLovingReasonsData)



      formData.append("tourLovingReasons", JSON.stringify(tourLovingReasonsData))

      // Add files with index to match them later
      // tourLovingReasons.forEach((feature, index) => {
      //   if (feature.icon) {
      //     formData.append(`icon-${index}`, feature.icon)
      //   }
      // })

      // // Send to your API endpoint
      // const response = await fetch("/api/tourLovingReasons", {
      //   method: "POST",
      //   body: formData,
      // })

      // if (!response.ok) {
      //   throw new Error("Failed to submit tourLovingReasons")
      // }

      // const result = await response.json()
      // console.log("Success:", result)

      // Reset form or show success message
      alert("tourLovingReasons submitted successfully!")
    } catch (error) {
      console.error("Error:", error)
      alert("Failed to submit tourLovingReasons. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="px-4 md:px-6">




     
     <div>
       <h1 className="text-[#101010] text-[32px]">Why You will Love This Tour</h1>
    

      {tourLovingReasons.map((feature, index) => (
        <div key={index} className="">
          <div  className="flex justify-end items-center mt-0 text-red-500 ">
            {tourLovingReasons.length > 1 && (
              <button
                type="button"
                className="px-3 py-1  text-sm flex items-center cursor-pointer "
                onClick={() => handleRemoveFeature(index)}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Remove
              </button>
            )}
          </div>

          {/* container  */}
          <div  className="grid grid-cols-12 gap-6">
            <div className="space-y-4 col-span-7 lg:col-span-8 2xl:col-span-9">
              <div>
                <label htmlFor={`title-${index}`} className="block text-[#101010] text-[18px] font-[400] mb-1">
                  Title
                </label>
                <input
                  id={`title-${index}`}
                  className="w-full px-3 py-2 border border-[#98A2B3] rounded-md focus:outline-none "
                  value={feature.title}
                  onChange={(e) => handleInputChange(index, "title", e.target.value)}
                  placeholder="Tips To Keep Your Relevant To All The Positions"
                  required
                />
              </div>

              <div>
                <label htmlFor={`description-${index}`} className="block text-[#101010] text-[18px] font-[400] mb-1">
                  Description
                </label>
                <textarea
                  id={`description-${index}`}
                  className="w-full px-3 py-2 border border-[#98A2B3] rounded-md focus:outline-none "
                  value={feature.description}
                  onChange={(e) => handleInputChange(index, "description", e.target.value)}
                  placeholder="Tips To Keep Your Relevant To All The Positions"
                  rows={4}
                  required
                />
              </div>
            </div>


            <div className="overflow-hidden col-span-5 lg:col-span-4 2xl:col-span-3 ">
              <label className="block text-[#101010] text-[18px] font-[400] mb-2">Icon</label>
              <div className="border border-[#98A2B3] px-9 py-10 rounded-lg flex flex-col items-center justify-center text-center">


                {feature.iconPreview ? (

                  <div  className=" relative border">
                    <img 
                      src={feature.iconPreview || "/placeholder.svg"}
                      alt="Icon preview"
                      className="w-16 h-12 object-contain"
                    />
                    <button
                      type="button"
                      className=" border border-[#98A2B3] rounded-md text-sm hover:bg-gray-100 absolute top-0"
                      onClick={() => handleFileChange(index, null)}
                    >
                      <X/>
                    </button>
                  </div>
                ) : (
                  <Upload className="h-10 w-10 text-gray-400 mb-2" />
                )}

                
                <label htmlFor={`icon-${index}`}>
                  
                  <p className={`text-sm text-gray-500 mb-2 `} >{feature.icon ? feature.icon.name  : "Drop file or browse"}</p>

                  <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 rounded-md"
                    onClick={() => document.getElementById(`icon-${index}`)?.click()}
                  >
                    Browse Files
                  </button>
                  <input
                    id={`icon-${index}`}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null
                      handleFileChange(index, file)
                    }}
                  />
                </label>
              </div>
            </div>


          </div>
        </div>
      ))}
        <button
          type="button"
          className="py-4 text-[#1F90FF] rounded-md flex items-center"
          onClick={handleAddFeature}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Feature
        </button >

       </div>  













        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md"
        >
          {isSubmitting ? "Submitting..." : "Submit tourLovingReasons"}
        </button>
      
    </form>
  )
}
