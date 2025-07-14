

'use client';
import React, { useState, useEffect, useRef } from 'react';
import { SendHorizonal, Bot, Minus } from 'lucide-react';
import clsx from 'clsx';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: 'bot' | 'user'; text: string }[]>([
    { from: 'bot', text: 'Hi there! How can I help you today? 😊' },
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  const toggleWidget = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { from: 'user', text: input }]);

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: 'bot', text: "I'm just a demo bot 🤖" }]);
    }, 1000);

    setInput('');
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {/* Floating button - only visible when widget is closed */}
      {!isOpen && (
        <button
          onClick={toggleWidget}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300"
        >
          <Bot className="w-5 h-5" />
        </button>
      )}

      {/* Chat widget */}
      <div
        className={clsx(
          "fixed bottom-6 right-6 z-50 h-[600px] max-h-[600px] w-[90vw] max-w-[380px] bg-white shadow-2xl rounded-xl flex flex-col overflow-hidden transition-all duration-500 ease-in-out",
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-90 translate-y-10 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 font-semibold flex items-center justify-between">
          <span>Travel Chatbot</span>
          <button
            onClick={toggleWidget}
            className="p-1 hover:bg-blue-700 rounded"
          >
            <Minus className="w-4 h-4" />
          </button>
        </div>

        {/* Chat messages */}
        <div
          ref={scrollRef}
          className="flex-1 max-h-[60vh] overflow-y-auto bg-gray-50 p-3 space-y-3 text-sm scroll-smooth"
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={clsx(
                "flex items-end gap-2",
                msg.from === "user" ? "justify-end" : "justify-start"
              )}
            >
              {/* Bot avatar (left) */}
              {msg.from === "bot" && (
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                  🤖
                </div>
              )}

              {/* Message bubble */}
              <div
                className={clsx(
                  "px-3 py-2 rounded-lg max-w-[75%]",
                  msg.from === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                )}
              >
                {msg.text}
              </div>

              {/* User avatar (right) */}
              {msg.from === "user" && (
                <div className="w-8 h-8 rounded-full bg-gray-400 text-white flex items-center justify-center text-sm font-bold">
                  🧑
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input field */}
        <div className="border-t p-2 flex items-center bg-white">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 p-2 text-sm border rounded-md outline-none"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSend}
            className="ml-2 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
          >
            <SendHorizonal className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
