import ImageGallery from "./ImageGallery"
import img1 from "../../assets/landTour/img1.jpg"
import img2 from "../../assets/landTour/img2.jpg"
import img3 from "../../assets/landTour/img3.jpg"


export default function HomeImageGallery() {
    
  const images = [
    {
      src: img1,
      alt: "Person in a boat looking at ocean cliffs",
    },
    {
      src: img2,
      alt: "Split view of boat and underwater scene with fish",
    },
    {
      src: img3,
      alt: "Aerial view of boat with yellow sail in turquoise waters",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-sky-100">
      <div className="container mx-auto px-4 py-12">
        <ImageGallery images={images} />
      </div>
    </main>
  )
}
