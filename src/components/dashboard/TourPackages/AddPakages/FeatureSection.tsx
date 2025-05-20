// FeatureSection.tsx
"use client"
import { Plus, Trash2, Upload, X } from "lucide-react"


interface Feature {
  title: string
  description: string
  icon: File | null
  iconPreview: string | null
}


interface FeatureSectionProps {
  title: string
  features: Feature[]
  setFeatures: React.Dispatch<React.SetStateAction<Feature[]>>
}

export default function FeatureSection({ title, features, setFeatures }: FeatureSectionProps) {
  const handleAddFeature = () => {
    setFeatures([
      ...features,
      {
        title: "",
        description: "",
        icon: null,
        iconPreview: null,
      },
    ])
  }

  const handleRemoveFeature = (index: number) => {
    if (features.length > 1) {
      setFeatures(features.filter((_, i) => i !== index))
    }
  }

  const handleInputChange = (index: number, field: "title" | "description", value: string) => {
    setFeatures(features.map((feature, i) => (i === index ? { ...feature, [field]: value } : feature)))
  }

  const handleFileChange = (index: number, file: File | null) => {
    setFeatures(
      features.map((feature, i) => {
        if (i === index) {
          return {
            ...feature,
            icon: file,
            iconPreview: file ? URL.createObjectURL(file) : null,
          }
        }
        return feature
      })
    )
  }

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {features.map((feature, index) => (
        <div key={index} className="mb-4 border rounded-md p-4">
          <div className="flex justify-between mb-2">
            <p className="text-lg font-medium">Feature #{index + 1}</p>
            {features.length > 1 && (
              <button
                type="button"
                className="text-red-600 text-sm flex items-center"
                onClick={() => handleRemoveFeature(index)}
              >
                <Trash2 className="w-4 h-4 mr-1" /> Remove
              </button>
            )}
          </div>

          <input
            type="text"
            className="w-full mb-2 px-3 py-2 border rounded"
            placeholder="Title"
            value={feature.title}
            onChange={(e) => handleInputChange(index, "title", e.target.value)}
            required
          />

          <textarea
            className="w-full mb-2 px-3 py-2 border rounded"
            placeholder="Description"
            value={feature.description}
            onChange={(e) => handleInputChange(index, "description", e.target.value)}
            rows={3}
            required
          />

          <div className="border p-4 rounded flex flex-col items-center">
            {feature.iconPreview ? (
              <div className="relative">
                <img src={feature.iconPreview} alt="Preview" className="w-20 h-16 object-contain mb-2" />
                <button
                  type="button"
                  className="absolute top-0 right-0 text-red-500"
                  onClick={() => handleFileChange(index, null)}
                >
                  <X />
                </button>
              </div>
            ) : (
              <Upload className="w-10 h-10 text-gray-400 mb-2" />
            )}

            <label className="text-sm text-gray-600 mb-2">
              {feature.icon ? feature.icon.name : "Drop file or browse"}
            </label>

            <button
              type="button"
              className="px-3 py-1 bg-blue-500 text-white rounded"
              onClick={() => document.getElementById(`icon-${title}-${index}`)?.click()}
            >
              Browse Files
            </button>
            <input
              id={`icon-${title}-${index}`}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0] || null
                handleFileChange(index, file)
              }}
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        className="mt-2 flex items-center text-blue-600"
        onClick={handleAddFeature}
      >
        <Plus className="w-4 h-4 mr-1" /> Add Feature
      </button>
    </div>
  )
}
