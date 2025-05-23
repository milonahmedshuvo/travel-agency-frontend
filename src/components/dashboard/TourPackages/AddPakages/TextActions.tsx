"use client"
import { useState } from "react"
import {  X, Save } from "lucide-react"


interface GroupLanguage {
  groupSize: number
  languages: string[]
}

export default function GroupLanguageForm() {
  const [activity, setActivity] = useState<GroupLanguage[]>([
    { groupSize: 0, languages: [""] }
  ])
  const [isSaving, setIsSaving] = useState(false)




  const handleGroupSizeChange = (index: number, value: string) => {
    const updated = [...activity]
    updated[index].groupSize = Number(value)
    setActivity(updated)
  }

  const handleLanguageChange = (index: number, langIndex: number, value: string) => {
    const updated = [...activity]
    updated[index].languages[langIndex] = value
    setActivity(updated)
  }

  const addLanguage = (index: number) => {
    const updated = [...activity]
    updated[index].languages.push("")
    setActivity(updated)
  }

  const removeLanguage = (index: number, langIndex: number) => {
    const updated = [...activity]
    updated[index].languages.splice(langIndex, 1)
    setActivity(updated)
  }

  

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Submitted activity:", activity)

    setIsSaving(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full mx-auto p-6 border">
      <h2 className="text-2xl font-bold mb-4">Group & Language Form</h2>

      {activity.map((item, index) => (
        <div  key={index} className="relative">
          
          <div  className="space-y-4 p-4 flex gap-6">
            <div className="w-full">
              <div>
                <label className="text-[#101010] text-[17px]">Group Size</label>
              </div>
              <input
                type="number"
                value={item.groupSize}
                onChange={(e) => handleGroupSizeChange(index, e.target.value)}
                placeholder="Enter group size"
                className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
              />
            </div>

            <div className="w-full ">
              <div>
                <label className="text-[#101010] text-[17px] ">Languages</label>
              </div>
              {item.languages.map((lang, langIndex) => (
                <div key={langIndex} className="flex gap-2 mb-2">
                  <input
                    value={lang}
                    onChange={(e) => handleLanguageChange(index, langIndex, e.target.value)}
                    placeholder="Enter language"
                    className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
                  />
                  <button
                    type="button"
                    
                    
                    onClick={() => removeLanguage(index, langIndex)}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}


              <button
                type="button"
                onClick={() => addLanguage(index)}
                className="mt-0 text-base"
              >
                + Add Language
              </button>
            </div>
          </div >
        </div >
      ))}







      <div className="flex flex-col sm:flex-row gap-3">
        <button type="submit" disabled={isSaving} className="flex items-center gap-2">
          {isSaving ? (
            <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          ) : (
            <Save className="h-4 w-4" />
          )}
          Save activity
        </button>
      </div>
    </form>
  )
}
