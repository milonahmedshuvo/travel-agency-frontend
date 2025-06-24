import Header from "@/components/dashboard/Header/Header"
import AddTourPackagesForm from "@/components/dashboard/TourPackages/AddPakages/AddTourPackages"
// import GroupLanguageForm from "@/components/dashboard/TourPackages/AddPakages/TextActions"







const page = () => {
  return (
    <div>
        <Header/>
         <AddTourPackagesForm/>
        {/* <GroupLanguageForm/> */}
    </div>
  )
}

export default page