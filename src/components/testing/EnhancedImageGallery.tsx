"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "../lib/utils"


interface ImageGalleryProps {
  images: {
    src: string
    alt: string
    caption: string
  }[]
  className?: string
}

export default function EnhancedImageGallery({ images, className }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  
  return (
    <div className={cn("relative w-full max-w-5xl mx-auto px-4 py-8", className)}>
      <div className="relative flex justify-center items-center h-[500px] md:h-[600px] overflow-visible">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{
              x: index === 0 ? "-30%" : index === 2 ? "30%" : 0,
              rotate: index === 0 ? -5 : index === 2 ? 5 : 0,
              scale: 1,
            }}
            whileHover={{
              scale: 1.05,
              zIndex: 30,
              transition: { duration: 0.3 },
            }}
            className={cn(
              "absolute rounded-3xl overflow-hidden cursor-pointer",
              "border-4 border-white dark:border-gray-800",
              "h-[80%] w-[80%] md:w-[60%] lg:w-[40%]",
              "shadow-xl hover:shadow-2xl transition-all duration-300",
              index === 0 && "z-10 -translate-x-[30%] md:-translate-x-[40%] rotate-[-5deg]",
              index === 1 && "z-20",
              index === 2 && "z-10 translate-x-[30%] md:translate-x-[40%] rotate-[5deg]",
              activeIndex === index && "z-30",
            )}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="relative h-full w-full">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 60vw, 40vw"
                className="object-cover transition-transform duration-700 ease-in-out"
                priority={index === 1}
              />

              {/* Caption overlay */}
              <div
                className={cn(
                  "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent",
                  "p-4 text-white transform transition-transform duration-300",
                  "translate-y-full opacity-0",
                  activeIndex === index && "translate-y-0 opacity-100",
                )}
              >
                <h3 className="text-xl font-bold mb-1">{`Destination ${index + 1}`}</h3>
                <p className="text-sm">{image.caption}</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div
              className={cn(
                "absolute -top-3 -right-3 w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center",
                "text-white font-bold text-lg transform rotate-12 border-2 border-white",
                "opacity-0 transition-opacity duration-300",
                activeIndex === index && "opacity-100",
              )}
            >
              {index + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
