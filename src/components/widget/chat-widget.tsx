"use client";
import React, { useState, useEffect, useRef } from "react";
import { SendHorizontal, Bot, Minus } from "lucide-react";
import clsx from "clsx";
import Cookies from "js-cookie";
import { getWidgetUrl } from "@/config/base-url";

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { from: "bot" | "user"; text: string }[]
  >([{ from: "bot", text: "Hi there! How can I help you today? 😊" }]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Ensure we have a user ID stored in cookies
  const ensureUserId = async () => {
    const existing = Cookies.get("user_id");
    if (!existing) {
      try {
        const res = await fetch(`${getWidgetUrl()}/api/v1/generate-user-id`, {
          method: "POST",
        });

        if (!res.ok) throw new Error("Failed to generate user ID");

        const data = await res.json();

        console.log(`see user id`, data);

        Cookies.set("user_id", data.user_id, { expires: 30 });
      } catch (err) {
        console.error("User ID generation error:", err);
        alert("Failed to initialize chat. Please refresh the page.");
      }
    }
  };

  const toggleWidget = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      // Reset conversation when closed
      setMessages([
        { from: "bot", text: "Hi there! How can I help you today? 😊" },
      ]);
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: { from: "bot" | "user"; text: string } = {
      from: "user",
      text: input,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const userId = Cookies.get("user_id");
    if (!userId) return;

    try {
      const res = await fetch(
        `${getWidgetUrl()}/chat?stream=false&timeout=300`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user_id: userId, query: input }),
        }
      );

      const data = await res.json();

      console.log(`see message`, data);

      const botReply = data?.content || "Sorry, something went wrong.";

      setMessages((prev) => [...prev, { from: "bot", text: botReply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "⚠️ Error contacting server." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    ensureUserId();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {!isOpen && (
        <button
          onClick={toggleWidget}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300"
          aria-label="Open chat"
        >
          <Bot className="w-5 h-5" />
        </button>
      )}

      <div
        className={clsx(
          "fixed bottom-6 right-6 z-50 h-[600px] max-h-[600px] w-[90vw] max-w-[380px] bg-white shadow-2xl rounded-xl flex flex-col overflow-hidden transition-all duration-500 ease-in-out",
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-90 translate-y-10 pointer-events-none"
        )}
      >
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 font-semibold flex items-center justify-between">
          <span>Travel Chatbot</span>
          <button
            onClick={toggleWidget}
            className="p-1 hover:bg-blue-700 rounded"
            aria-label="Minimize chat"
          >
            <Minus className="w-4 h-4" />
          </button>
        </div>

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
              {msg.from === "bot" && (
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                  🤖
                </div>
              )}

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

              {msg.from === "user" && (
                <div className="w-8 h-8 rounded-full bg-gray-400 text-white flex items-center justify-center text-sm font-bold">
                  🧑
                </div>
              )}
            </div>
          ))}

          {/* Loading indicator */}
          {isLoading && (
            <div className="flex items-end gap-2 justify-start">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                🤖
              </div>
              <div className="px-3 py-2 rounded-lg bg-gray-200 animate-pulse">
                Typing...
              </div>
            </div>
          )}
        </div>

        <div className="border-t p-2 flex items-center bg-white">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSend();
              }
            }}
            className="flex-1 p-2 text-sm border rounded-md outline-none"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="ml-2 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md disabled:opacity-50"
            aria-label="Send message"
          >
            <SendHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
