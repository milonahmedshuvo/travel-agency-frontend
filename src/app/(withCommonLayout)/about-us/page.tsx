import AboutusBanner from "@/components/aboutus/AboutusBanner"
import ContactForm from "@/components/aboutus/ContactForm"
import MissionValues from "@/components/aboutus/MissionValues"
import OurStory from "@/components/aboutus/OurStory"
import TravelLove from "@/components/others/travelLove/TravelLove"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "Hvarlocalguide - About Us",
  description: "Hvar Local Travel Agency",
};

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