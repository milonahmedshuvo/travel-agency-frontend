import ContactForm from "@/components/blog/ContactForm"
import MissionValues from "@/components/blog/MissionValues"
import OurStory from "@/components/blog/OurStory"
import TravelLove from "@/components/others/travelLove/TravelLove"

const page = () => {

  return (
    <div>
        <OurStory/>
        <MissionValues/>
        <TravelLove/>
        <ContactForm/>
    </div>
  )
}

export default page