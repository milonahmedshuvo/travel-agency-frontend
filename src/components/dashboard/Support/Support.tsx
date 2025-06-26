"use client"

import { useState } from "react"
import { Search, MoreHorizontal, Paperclip, Check, SendHorizontal } from "lucide-react"
import Image from "next/image"
import img1 from "../../../assets/logo/img1.jpg"




interface Contact {
  id: string
  name: string
  avatar: string
  lastMessage: string
  timestamp: string
  unreadCount: number
  initials: string
}

interface Message {
  id: string
  content: string
  timestamp: string
  isOwn: boolean
  isRead?: boolean
}

const contacts: Contact[] = [
  {
    id: "1",
    name: "Lucas Murphy",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "I have some dietary restrictions and would like to know if the Parisian Rom...",
    timestamp: "3:45 PM",
    unreadCount: 1,
    initials: "LM",
  },
  {
    id: "2",
    name: "Alexandra Green",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Our company is interested in organizing a corporate retreat with Tr...",
    timestamp: "09:15 AM",
    unreadCount: 2,
    initials: "AG",
  },
  {
    id: "3",
    name: "David Hernandez",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "I would like to upgrade my current booking for the Alpine Escape package...",
    timestamp: "10:00 AM",
    unreadCount: 5,
    initials: "DH",
  },
  {
    id: "4",
    name: "Melinda Jenkins",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Can you provide more details on the Safari Adventure package? I'm interes...",
    timestamp: "Yesterday",
    unreadCount: 0,
    initials: "MJ",
  },
  {
    id: "5",
    name: "Osman Farooq",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Got it, thank you! I'll review the details and get back to you soon.",
    timestamp: "Yesterday",
    unreadCount: 0,
    initials: "OF",
  },
  {
    id: "6",
    name: "Kalendra Umbara",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Hi, I need assistance with changing my travel dates for the Tokyo Cultural Adv...",
    timestamp: "Yesterday",
    unreadCount: 0,
    initials: "KU",
  },
  {
    id: "7",
    name: "Global Travel Services",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "We have updated our commission rates for the upcoming quarter. Pleas...",
    timestamp: "2 days ago",
    unreadCount: 3,
    initials: "GT",
  },
  {
    id: "8",
    name: "Luxury Hotels Europe",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "We are pleased to announce our new partnership with Travella. Our luxury hotel s...",
    timestamp: "08/09/25",
    unreadCount: 0,
    initials: "LH",
  },
  {
    id: "9",
    name: "Brandon Lubin",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "",
    timestamp: "30/06/25",
    unreadCount: 0,
    initials: "BL",
  },


  {
    id: "10",
    name: "Kalendra Umbara",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Hi, I need assistance with changing my travel dates for the Tokyo Cultural Adv...",
    timestamp: "Yesterday",
    unreadCount: 0,
    initials: "KU",
  },
  {
    id: "11",
    name: "Global Travel Services",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "We have updated our commission rates for the upcoming quarter. Pleas...",
    timestamp: "2 days ago",
    unreadCount: 3,
    initials: "GT",
  },
  {
    id: "12",
    name: "Luxury Hotels Europe",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "We are pleased to announce our new partnership with Travella. Our luxury hotel s...",
    timestamp: "08/09/25",
    unreadCount: 0,
    initials: "LH",
  },
  {
    id: "13",
    name: "Brandon Lubin",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "",
    timestamp: "30/06/25",
    unreadCount: 0,
    initials: "BL",
  },
]

const messages: Message[] = [
  {
    id: "1",
    content:
      "Hello, I had an amazing time on the Venice Dreams package! Could you please help me with booking a similar trip to Rome for next spring? Thanks!",
    timestamp: "10:15 AM",
    isOwn: false,
  },
  {
    id: "2",
    content:
      "Hi Osman! We're thrilled to hear that you enjoyed the Venice Dreams package. We would be happy to assist you in booking a similar trip to Rome for next spring. Do you have specific dates in mind?",
    timestamp: "10:20 AM",
    isOwn: true,
    isRead: true,
  },
  {
    id: "3",
    content: "Thank you! I'm looking at the first two weeks of April. Is there a package available during that time?",
    timestamp: "10:25 AM",
    isOwn: false,
  },
  {
    id: "4",
    content:
      "Yes, we have a Rome Highlights package available from April 1 to April 14. It includes visits to historic sites, a guided tour of the Colosseum, and a day trip to Vatican City. Would you like more details?",
    timestamp: "10:30 AM",
    isOwn: true,
    isRead: true,
  },
  {
    id: "5",
    content: "That sounds perfect. Could you please send me the itinerary and pricing details?",
    timestamp: "10:35 AM",
    isOwn: false,
  },
  {
    id: "6",
    content:
      "I'll email you the full itinerary and pricing details for the Rome Highlights package. Please check your inbox shortly. If you have any other questions, feel free to ask.",
    timestamp: "",
    isOwn: true,
    isRead: false,
  },
  {
    id: "7",
    content: "Got it, thank you! I'll review the details and get back to you soon.",
    timestamp: "10:45 AM",
    isOwn: false,
  },
]





export default function SupportComponent() {
  const [selectedContact, setSelectedContact] = useState<Contact>(contacts[4]) // Osman Farooq
//   const [messageInput, setMessageInput] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const [inputMessage, setInputMessage] = useState("")
  
    const handleSendMessage = () => {
      if (inputMessage.trim()) {
        // Handle sending message logic here
        console.log(inputMessage)
        setInputMessage("")
      }
    }
  
    const handleKeyPress = (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSendMessage()
      }
    }





  return (
     <div className="px-4 md:8 mt-6">
          
    <div className="flex bg-gray-50">

      {/* Sidebar - Contact List */}
      <div
        className={`${isMobileMenuOpen ? "block" : "hidden"} lg:block w-full lg:w-80 bg-white border-r border-gray-200 flex flex-col  relative `}
      >
        {/* Search Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input placeholder="Search name, chat, etc" className="pl-10 bg-gray-50 border-gray-200" />
          </div>
        </div>


        {/* Contact List */}
        <div className="flex-1 overflow-y-scroll h-[680px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 overflow-hidden">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              onClick={() => {
                setSelectedContact(contact)
                setIsMobileMenuOpen(false)
              }}
              className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 ${
                selectedContact.id === contact.id ? "bg-blue-50 border-l-4 border-l-blue-500" : ""
              }`}
            >

                {/* it will be image contack */}
                <div className="w-10 h-10 mr-3  rounded-full ">
                 <Image src={img1} width={500} height={500} alt='img' className="w-full h-full rounded-full" ></Image>
              </div>




              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium text-gray-900 truncate">{contact.name}</h3>
                  <span className="text-xs text-gray-500">{contact.timestamp}</span>
                </div>
                <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
              </div>

              {contact.unreadCount > 0 && (
                <div className="ml-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {contact.unreadCount}
                </div>
              )}
            </div>
          ))}
        </div>



        {/* New Message Button */}
        <div className="p-4 absolute bottom-0 w-full ">
          <button className="w-full bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] hover:from-[#4f88df] hover:to-[#0096FF] text-white py-1.5 px-3 rounded-lg cursor-pointer">New Message</button>
        </div>
      </div>




      {/* Main Chat Area */}
      <div className={` ${isMobileMenuOpen ? "hidden" : "flex"} lg:flex flex-1 flex-col  h-[800px] `}>

        {/* Chat Header */}
        <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center">
            <button className="lg:hidden mr-2" onClick={() => setIsMobileMenuOpen(true)}>
              ☰
            </button>
            
              {/* it will be image  */}
              <div className="w-10 h-10 mr-3  rounded-full ">
                 <Image src={img1} width={500} height={500} alt='img' className="w-full h-full rounded-full" ></Image>
              </div>

            <div>
              <h2 className="font-medium text-gray-900">{selectedContact.name}</h2>
              <p className="text-sm text-gray-500">last seen recently</p>
            </div>
          </div>
          <button>
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="text-center">
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Yesterday</span>
          </div>




          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
              {!message.isOwn && (
                // <Avatar className="w-8 h-8 mr-2 mt-1">
                //   <AvatarImage src={selectedContact.avatar || "/placeholder.svg"} alt={selectedContact.name} />
                //   <AvatarFallback className="bg-blue-500 text-white text-xs">{selectedContact.initials}</AvatarFallback>
                // </Avatar>

                 <div className="w-10 h-10 mr-3  rounded-full ">
                 <Image src={img1} width={500} height={500} alt='img' className="w-full h-full rounded-full" ></Image>
              </div>
              )}
              <div className={`max-w-xs lg:max-w-md xl:max-w-lg ${message.isOwn ? "ml-auto" : ""}`}>
                <div
                  className={`p-3 rounded-lg ${
                    message.isOwn ? "bg-blue-500 text-white rounded-br-sm" : "bg-gray-100 text-gray-900 rounded-bl-sm"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>

                {message.timestamp && (
                  <div
                    className={`flex items-center mt-1 text-xs text-gray-500 ${message.isOwn ? "justify-end" : "justify-start"}`}
                  >
                    <span>{message.timestamp}</span>
                    {message.isOwn && message.isRead && <Check className="w-3 h-3 ml-1 text-blue-500" />}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>





        {/* Message Input */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="flex items-center space-x-2">
            <div className="flex-1 relative">
              <input
                placeholder="Type a message..."
               value={inputMessage}
               onChange={(e) => setInputMessage(e.target.value)}
               onKeyPress={handleKeyPress}
                className="pr-10 w-full p-3 focus:outline-none"
              />
              <button  className="absolute right-1 top-1/2 transform -translate-y-1/2">
                <Paperclip className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            <button onClick={handleSendMessage} className="cursor-pointer">
               <SendHorizontal className="w-6 h-6 text-[#4361EE] "/>
            </button>
          </div>
        </div>
      </div>





    </div>
     </div>
  )
}
