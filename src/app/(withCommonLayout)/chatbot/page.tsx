/* eslint-disable @next/next/no-img-element */
"use client"

import type React from "react"

import { useState } from "react"
import { Minus, MessageCircle, SendHorizontal } from "lucide-react"


interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: string
  avatar?: string
}

export default function TravelChatbot() {


  const [messages] = useState<Message[]>([
    {
      id: 1,
      text: "Minimum text check, Hide check icon",
      sender: "bot",
      timestamp: "7:20",
    },
    {
      id: 2,
      text: "Rapidly build stunning Web Apps with Frest 🚀\nDeveloper friendly, Highly customizable & Carefully crafted HTML Admin Dashboard Template.",
      sender: "user",
      timestamp: "7:20",
    },
    {
      id: 3,
      text: "More no. of lines text and showing complete list of features like time stamp + check icon READ",
      sender: "bot",
      timestamp: "7:20",
    },
  ])



  const [inputMessage, setInputMessage] = useState("")

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      // Handle sending message logic here
      setInputMessage("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }



  console.log(inputMessage)
  return (
    <div className="max-w-md  mx-auto  shadow-sm rounded-lg overflow-hidden md:mb-28 pb-5 ">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-500 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-white p-2 rounded-lg">
            <MessageCircle className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <h1 className="text-white font-semibold text-lg">Travel Chatbot</h1>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-blue-100 text-sm">Online</span>
            </div>
          </div>
        </div>
        <button  className="text-white hover:bg-blue-600">
          <Minus className="w-5 h-5" />
        </button>
      </div>






      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[calc(100vh-140px)] md:h-[400px] bg-gray-50 shadow-sm ">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>


            <div
              className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
            >
              {/* Avatar */}
              <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
                <img src="/placeholder.svg?height=32&width=32" alt="Avatar" className="w-full h-full object-cover" />
              </div>


              {/* Message Bubble */}
              <div className="flex flex-col">
                <div
                  className={`px-4 py-2 rounded-2xl ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white rounded-br-sm"
                      : "bg-gray-200 text-gray-800 rounded-bl-sm"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                </div>

                {/* Timestamp and Status */}
                <div
                  className={`flex items-center mt-1 space-x-1 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <span className="text-xs text-gray-500">{message.timestamp}</span>
                  {message.sender === "bot" && (
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 text-gray-400">
                        <svg viewBox="0 0 16 16" fill="currentColor">
                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                      </div>
                      <div className="w-3 h-3 text-blue-500">
                        <svg viewBox="0 0 16 16" fill="currentColor">
                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>


              </div>
            </div>
          </div>
        ))}
      </div>







      {/* Message Input */}
      <div className=" bg-white pl-2.5 mt-5">        
          <div className="flex-1 flex items-center space-x-2.5 relative ">
            <input
              type="text"
              placeholder="Type your message here..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 border-gray-200 bg-gray-100 rounded-md pl-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={handleSendMessage}
              className=" p-2 w-10 h-10 absolute right-[18px] cursor-pointer ">
              <SendHorizontal className="w-6 h-6 text-[#4361EE] "/>
            </button>
        </div>
      </div>
    </div>
  )
}
