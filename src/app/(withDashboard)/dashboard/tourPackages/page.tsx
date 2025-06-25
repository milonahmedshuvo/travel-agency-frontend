import Header from "@/components/dashboard/Header/Header";
// import TourPackages from "@/components/dashboard/TourPackages/TourPackages"
import TourPackagesCardsPage from "@/components/dashboard/TourPackages/TourPackagesCards"


const page = () => {


  return (
    <div> 
     {/* <TourPackages/> */}
      <Header/>
     <TourPackagesCardsPage/>    
     </div>
  )
}

export default page;