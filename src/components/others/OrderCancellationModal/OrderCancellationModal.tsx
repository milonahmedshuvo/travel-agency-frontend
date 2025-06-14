"use client"

import { useState } from "react"
import { X } from "lucide-react"


interface OrderCancellationModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (reason: string, customReason?: string) => void
  title: string,
  category: string
}

const cancellationReasons = [
  {
    id: "mistake",
    label: "Ordered by Mistake",
    description: "The customer accidentally placed the order.",
  },
  {
    id: "better-deal",
    label: "Found a Better Deal",
    description: "The customer found the product at a lower price elsewhere.",
  },
  {
    id: "delivery-time",
    label: "Delivery Time Too Long",
    description: "The estimated delivery time was longer than expected.",
  },
  {
    id: "policy-violation",
    label: "Policy Violation",
    description: "The order violates marketplace policies (e.g., prohibited items).",
  },
  {
    id: "suspicious-activity",
    label: "Suspicious Activity Detected",
    description: "The marketplace detects potential fraud.",
  },
  {
    id: "others",
    label: "Others",
    description: "",
  },
]

export default function OrderCancellationModal({ isOpen, onClose, onSubmit, title, category }: OrderCancellationModalProps) {
  const [selectedReason, setSelectedReason] = useState<string>("")
  const [customReason, setCustomReason] = useState<string>("")

  const handleSubmit = () => {
    if (!selectedReason) return

    const reason = cancellationReasons.find((r) => r.id === selectedReason)?.label || ""
    onSubmit(reason, selectedReason === "others" ? customReason : undefined)

    // Reset form
    setSelectedReason("")
    setCustomReason("")
  }

  const handleReasonSelect = (reasonId: string) => {
    setSelectedReason(reasonId)
    if (reasonId !== "others") {
      setCustomReason("")
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/55 bg-opacity-50 flex items-center justify-center z-50 p-5">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-5xl mx-auto max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-300 ">
          <h2 className="text-lg font-semibold text-gray-900">Why you are Cancel the Order</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Trip Details */}
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-900 mb-2">Trip Details</h3>
            <p className="text-lg text-gray-600 mb-1"> {category} Package</p>
            <p className="text-lg font-medium text-gray-900">{title}</p>
          </div>





          {/* Cancellation Reason */}
          <div className="mb-6">
            <h3 className="text-md font-medium text-gray-900 mb-4">Cancellation Reason</h3>
            <div className="space-y-3">
              {cancellationReasons.map((reason) => (

                <div key={reason.id}>
                  <button
                    onClick={() => handleReasonSelect(reason.id)}
                    className={`w-full text-left p-3 rounded-lg border-2 transition-colors ${
                      selectedReason === reason.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-start">


                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{reason.label}</p>
                        {reason.description && <p className="text-md text-gray-600 mt-1"> - {reason.description}</p>}
                      </div>



                      <div
                        className={`w-4 h-4 rounded-full border-2 mt-1 ml-3 ${
                          selectedReason === reason.id ? "border-blue-500 bg-blue-500" : "border-gray-300"
                        }`}
                      >
                        {selectedReason === reason.id && (
                          <div className="w-full h-full rounded-full bg-white scale-50"></div>
                        )}
                      </div>
                    </div>
                  </button>

                  {/* Custom reason textarea for "Others" */}
                  {selectedReason === "others" && reason.id === "others" && (
                    <div className="mt-3 ml-3">
                      <textarea
                        placeholder="Please specify your reason..."
                        value={customReason}
                        onChange={(e) => setCustomReason(e.target.value)}
                        className="w-full min-h-[80px] resize-none border border-gray-300 p-3 rounded"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row gap-3 p-6 border-t border-gray-300 bg-gray-50">
          <button  onClick={onClose} className="flex-1 order-2 sm:order-1 cursor-pointer">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!selectedReason || (selectedReason === "others" && !customReason.trim())}
            className="flex-1 order-1 sm:order-2 bg-red-500 hover:bg-red-600 text-white py-3 rounded  cursor-pointer "
          >
            Submit Reason
          </button>
        </div>
      </div>
    </div>
  )
}
