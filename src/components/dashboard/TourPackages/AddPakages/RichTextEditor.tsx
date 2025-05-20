"use client"

import type React from "react"

import { useState } from "react"

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const [isBold, setIsBold] = useState(false)
  const [isItalic, setIsItalic] = useState(false)
  const [isUnderline, setIsUnderline] = useState(false)

  const handleBold = () => {
    setIsBold(!isBold)
    document.execCommand("bold", false)
  }

  const handleItalic = () => {
    setIsItalic(!isItalic)
    document.execCommand("italic", false)
  }

  const handleUnderline = () => {
    setIsUnderline(!isUnderline)
    document.execCommand("underline", false)
  }

  const handleContentChange = (e: React.FormEvent<HTMLDivElement>) => {
    const content = e.currentTarget.innerHTML
    onChange(content)
  }

  return (
    <div className="border border-gray-300 rounded overflow-hidden">
      <div className="flex items-center gap-1 p-2 border-b bg-gray-50">
        <button
          type="button"
          onClick={handleBold}
          className={`p-1 rounded ${isBold ? "bg-gray-200" : "hover:bg-gray-200"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
            <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
          </svg>
        </button>

        <button
          type="button"
          onClick={handleItalic}
          className={`p-1 rounded ${isItalic ? "bg-gray-200" : "hover:bg-gray-200"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="4" x2="10" y2="4"></line>
            <line x1="14" y1="20" x2="5" y2="20"></line>
            <line x1="15" y1="4" x2="9" y2="20"></line>
          </svg>
        </button>

        <button
          type="button"
          onClick={handleUnderline}
          className={`p-1 rounded ${isUnderline ? "bg-gray-200" : "hover:bg-gray-200"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path>
            <line x1="4" y1="21" x2="20" y2="21"></line>
          </svg>
        </button>

        <span className="mx-1 text-gray-300">|</span>

        <button type="button" className="p-1 rounded hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="8" y1="6" x2="21" y2="6"></line>
            <line x1="8" y1="12" x2="21" y2="12"></line>
            <line x1="8" y1="18" x2="21" y2="18"></line>
            <line x1="3" y1="6" x2="3.01" y2="6"></line>
            <line x1="3" y1="12" x2="3.01" y2="12"></line>
            <line x1="3" y1="18" x2="3.01" y2="18"></line>
          </svg>
        </button>

        <button type="button" className="p-1 rounded hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="21" y1="6" x2="3" y2="6"></line>
            <line x1="17" y1="12" x2="3" y2="12"></line>
            <line x1="13" y1="18" x2="3" y2="18"></line>
          </svg>
        </button>

        <button type="button" className="p-1 rounded hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="17" y2="12"></line>
            <line x1="3" y1="18" x2="13" y2="18"></line>
          </svg>
        </button>

        <span className="mx-1 text-gray-300">|</span>

        <button type="button" className="p-1 rounded hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
        </button>

        <button type="button" className="p-1 rounded hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="8" y1="12" x2="16" y2="12"></line>
            <line x1="12" y1="8" x2="12" y2="16"></line>
          </svg>
        </button>
      </div>

      <div
        contentEditable
        className="p-4 min-h-[200px] focus:outline-none"
        dangerouslySetInnerHTML={{ __html: value }}
        onInput={handleContentChange}
      ></div>
    </div>
  )
}
