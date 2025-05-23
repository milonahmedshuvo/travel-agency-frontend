"use client"

import { useState } from "react"
import { PlusCircle, X, Save } from "lucide-react"

interface TourLovingReasons {
  title: string
  description: string
}

export default function TourLovingReasonsForm() {



  const [tourLovingReasons, setTourLovingReasons] = useState<TourLovingReasons[]>([
    { title: "", description: "" }
  ])



  const [isSaving, setIsSaving] = useState(false)

  const handleChange = (index: number, field: keyof TourLovingReasons, value: string) => {
    const updated = [...tourLovingReasons]
    updated[index][field] = value
    setTourLovingReasons(updated)
  }

  const addFeature = () => {
    setTourLovingReasons([...tourLovingReasons, { title: "", description: "" }])
  }

  const removeFeature = (index: number) => {
    const updated = [...tourLovingReasons]
    updated.splice(index, 1)
    setTourLovingReasons(updated)
  }






  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Submitted tourLovingReasons:", tourLovingReasons)
    setIsSaving(false)
  }




  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Tour tourLovingReasons</h2>

      {tourLovingReasons.map((feature, index) => (
        <div  key={index} className="relative">

         {
            index > 0 && <button
            type="button"
            className="absolute top-2 right-2"
            onClick={() => removeFeature(index)}
          >
            <X className="h-4 w-4" />
          </button>
         }



          <div  className="space-y-3 px-4">
            <div>
               <div>
                <label className="text-[#101010] text-[17px] ">Title</label>
               </div>
              <input
                value={feature.title}
                onChange={(e) => handleChange(index, "title", e.target.value)}
                placeholder="Enter feature title"
                className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
              
              />
            </div>
            <div>
              <div>
                <label className="text-[#101010] text-[17px]" >Description</label>
              </div>

              <textarea
                value={feature.description}
                onChange={(e) => handleChange(index, "description", e.target.value)}
                placeholder="Enter feature description"
                className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
              />
            </div>
          </div>
        </div >
      ))}

      <div  className="flex flex-col sm:flex-row gap-3">
        <button type="button"  onClick={addFeature} className="flex items-center gap-2">
          <PlusCircle className="h-4 w-4" />
          Add Feature
        </button>









        <button type="submit" disabled={isSaving} className="flex items-center gap-2">
          {isSaving ? (
            <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          ) : (
            <Save className="h-4 w-4" />
          )}
          Save tourLovingReasons
        </button>
      </div>
    </form>
  )
}
