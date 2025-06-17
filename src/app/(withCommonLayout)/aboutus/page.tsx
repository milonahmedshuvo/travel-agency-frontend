import AboutusBanner from "@/components/aboutus/AboutusBanner"
import ContactForm from "@/components/aboutus/ContactForm"
import MissionValues from "@/components/aboutus/MissionValues"
import OurStory from "@/components/aboutus/OurStory"
import TravelLove from "@/components/others/travelLove/TravelLove"

const page = () => {

  return (
    <div>
        <AboutusBanner/>
        <OurStory/>
        <MissionValues/>
        <TravelLove frist="Why Choose Us?" />
        <ContactForm/>
    </div>
  )
}

export default page