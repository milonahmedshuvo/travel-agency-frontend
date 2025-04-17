import Image, { StaticImageData } from "next/image"
import { cn } from "../lib/utils"


interface ImageGalleryProps {
  images: {
    src: string | StaticImageData
    alt: string
  }[]
  className?: string
}

export default function ImageGallery({ images, className }: ImageGalleryProps) {
  return (
    <div className={cn("relative w-full max-w-5xl mx-auto px-4 py-8", className)}>
      <div className="relative flex justify-center items-center h-[500px] md:h-[600px] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute rounded-3xl overflow-hidden shadow-xl transition-all duration-500 ease-in-out",
              "h-[80%] w-[80%] md:w-[60%] lg:w-[40%]",
              index === 0 && "z-10 !-translate-x-[50%] md:-translate-x-[40%] rotate-[6deg]",
              index === 1 && "z-20 !w-[100px]",
              index === 2 && "z-10 translate-x-[30%] md:translate-x-[40%] rotate-[-6deg]",
            )}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 60vw, 40vw"
              className="object-cover"
              priority={index === 1}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
