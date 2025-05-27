/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"

import type React from "react"
import { useRef, useState } from "react"
import { PlusCircle, X, Upload } from "lucide-react"
import dynamic from "next/dynamic";
import toast from "react-hot-toast";
import { useCreateHotelPackagesMutation, useGetAllHotelPackagesQuery, useGetSingleHotelPackagesQuery } from "@/redux/api/hotelPackages/hotelPackegesApi";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });;


interface aboutStays {
  title: string
  description: string
}

interface Tamenities {
  title : string
}

interface GroupLanguage {
  groupSize: number
  languages: string[]
}


export type TVehicleOfObject = {
  id: string;
  name: string;
  slug: string;
  vehicleType: ' BOAT' | 'CAR' | 'VAN' | 'AIRCRAFT'; 
  pricePerHR: number;
  img: string;
  createdAt: string; 
  updatedAt: string; 
};



export default function AddHotelTourPackageForm () {
   const [loading, setLoading] = useState(false)
   const [createHotelPackages, {data, error}] = useCreateHotelPackagesMutation()
  //  console.log("get valicle", data?.data?.data)
     console.log('Hotel packages success',data?.data?.data)
     console.log('Hotel packages error', error)

     const {data:hotelPackages} = useGetAllHotelPackagesQuery("")
     const {data: singleHotel } = useGetSingleHotelPackagesQuery("68359870981abc53052aa9cf")

     console.log("gel all Hotels", hotelPackages?.data )
     console.log("Get single hotel", singleHotel )



     
  // State for form data
  const [formData, setFormData] = useState({
    title: "",
    roomCategory: "",
    duration: "",
    startDate: "",
    endDate: "",
    mapLocation: "",
    price: "",
    bedRoom: 0,
    bathRoom: 0,
    livingRoom: 0,
    kitchen: 0,

    image: null,
    slug:"sunset-sea-adventure",
  })
  const [ file, setFile ] = useState<File[]>([])



  // State for dynamic fields aboutStays
  const [aboutStays, setaboutStays] = useState<aboutStays[]>([
      { title: "", description: "" }
    ])
  // Detailed Itinerary state
  const [bestPlaces, setbestPlaces] = useState<aboutStays[]>([
      { title: "", description: "" }
    ])
  // amenities  state
  const [amenities, setamenities] = useState<Tamenities[]>([
      { title: ""}
    ])
 
  
    // distances state 
     const [distances, setdistances] = useState<Tamenities[]>([
      { title: "" }
    ]) 
   

  // group and language 
  const [activity, setActivity] = useState<GroupLanguage>({
    groupSize: 0,
    languages: [""] 
  })



  // Handle input changes and for specific fileds 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    
   const selectedFiles = e.target.files
    if (!selectedFiles) return

    const fileArray = Array.from(selectedFiles)
    setFile(prev => [...prev, ...fileArray])
  }





  // why do you love to travel reason  functionality
  const handleChange = (index: number, field: keyof aboutStays, value: string) => {
    const updated = [...aboutStays]
    updated[index][field] = value
    setaboutStays(updated)
  }

  const addFeature = () => {
    setaboutStays([...aboutStays, { title: "", description: "" }])
  }

  const removeFeature = (index: number) => {
    const updated = [...aboutStays]
    updated.splice(index, 1)
    setaboutStays(updated)
  }
  


// Detailed Itinerary function  
const handleChangeItinerary = (index: number, field: keyof aboutStays, value: string) => {
    const updated = [...bestPlaces]
    updated[index][field] = value
    setbestPlaces(updated)
  }

  const addFeatureItinerary = () => {
    setbestPlaces([...bestPlaces, { title: "", description: "" }])
  }

  const removeFeatureItinerary = (index: number) => {
    const updated = [...bestPlaces]
    updated.splice(index, 1)
    setbestPlaces(updated)
  }


//  Group and Language 
const handleGroupSizeChange = (value: string) => {
    setActivity((prev) => ({ ...prev, groupSize: Number(value) }))
  }

  const handleLanguageChange = (index: number, value: string) => {
    const updatedLanguages = [...activity.languages]
    updatedLanguages[index] = value
    setActivity((prev) => ({ ...prev, languages: updatedLanguages }))
  }

  // amenities 
const handleChangeamenities = (index: number, field: keyof Tamenities, value: string) => {
    const updated = [...amenities]
    updated[index][field] = value
    setamenities(updated)
  }

  const addFeatureamenities = () => {
    setamenities([...amenities, { title: ""}])
  }

  const removeFeatureamenities = (index: number) => {
    const updated = [...amenities]
    updated.splice(index, 1)
    setamenities(updated)
  }


  

  







  // what is Brring 
  const handleChangedistances  = (index: number, field: keyof Tamenities, value: string) => {
    const updated = [...distances]
    updated[index][field] = value
    setdistances(updated)
  }

  const addFeaturedistances  = () => {
    setdistances([...distances, { title: ""}])
  }

  const removeFeaturedistances  = (index: number) => {
    const updated = [...distances]
    updated.splice(index, 1)
    setdistances(updated)
  }



// Jodit
  const [content, setContent] = useState("");
  const editor = useRef(null);
  const config = {
    height: 400,
    tabIndex: 2,
  };



const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setLoading(true)


  const fullData = {
  title: formData.title,
//   slug: formData.slug || formData.title?.toLowerCase().replace(/\s+/g, '-'),
  description: content,
  startDate: new Date(formData.startDate).toISOString(),
  endDate: new Date(formData.endDate).toISOString(),
  roomCategory: formData.roomCategory,
  price: Number(formData.price),
  bedRoom: Number(formData.bedRoom),
  bathRoom: Number(formData.bathRoom),
  livingRoom: Number(formData.livingRoom),
  kitchen: Number(formData.kitchen),
  mapLocation: formData.mapLocation,
  duration: formData.duration,
  bestPlaces,
  aboutStays,
  activity,
  amenities,
  distances
}


console.log({fullData})

const formDatas = new FormData();
formDatas.append("data", JSON.stringify(fullData));

file.forEach(f => formDatas.append("images", f));




  try {
    const result = await createHotelPackages(formDatas).unwrap()
    console.log("Hotel Packages created successfully:", result)
    toast.success(result.message || "Hotel Packages created successfully!")
    setLoading(false)
  } catch (err: any) {
    console.error("Failed to create Hotel Packages:", err)
    toast.error("Failed to create Hotel Packages.")
    setLoading(false)
  }
}

  
// image delete 
 const handleDelete = (index: number) => {
    const updatedFiles = [...file];
    updatedFiles.splice(index, 1);
    setFile(updatedFiles);
  };



  return (
    <form onSubmit={handleSubmit} className=" px-4 md:px-7 space-y-8 mt-10 mb-10">
      <div className="text-2xl ">Add New Hotel Package</div>


       <div className="space-y-2">
          <label htmlFor="title" className="block text-[18px] font-medium">
            Hotel Name <span className="text-red-500">*</span>
          </label>
          <input
            id="title"
            name="title"
             className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
            placeholder="Tip to keep your keywords to all the hotspots"
            value={formData.title}
            onChange={handleInputChange}
            // required
          />
        </div>


      
         {/* package roomCategory  */}
        <div className="space-y-2">
          <label htmlFor="roomCategory" className="block text-[18px] font-medium">
            Hotel Room room Category <span className="text-red-500">*</span>
          </label>
          <select value={formData.roomCategory} onChange={(e) => handleSelectChange("roomCategory", e.target.value)}  className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none ">
              <option value="SINGLE">SINGLE</option>
              <option value="DOUBLE">DOUBLE</option>
              <option value="TWIN">SUITE</option>
              <option value="TRIPLE">TRIPLE</option>
              <option value="SUITE">SUITE</option>
              <option value="DELUXE">DELUXE</option>
              <option value="FAMILY">FAMILY</option>
              <option value="EXECUTIVE">EXECUTIVE</option>
              <option value="PRESIDENTIAL">PRESIDENTIAL</option>
              <option value="STUDIO">STUDIO</option>
              <option value="PRESIDENTIAL">PRESIDENTIAL</option>
              <option value="APARTMENT">APARTMENT</option>
          </select>
        </div>

        
            
        


           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 

          {/* Package Duration */}
        <div className="space-y-2">
          <label htmlFor="duration" className="block text-[18px] font-medium">
            Package Duration <span className="text-red-500">*</span>
          </label>
          <input 
          type="text"
          id="duration"
          name="duration"
            placeholder="Packages Duration"
            value={formData.duration}
            onChange={handleInputChange}
             className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
          />
        </div>

          {/* start Date */}
        <div className="space-y-2">
          <label htmlFor="date" className="block text-[18px] font-medium">
            Start Date <span className="text-red-500">*</span>
          </label>
          {/* <select value={formData.date} onChange={(e) => handleSelectChange("date", e.target.value)}  className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none ">
              <option value="01-01-2024">01-01-2024</option>
              <option value="02-01-2024">02-01-2024</option>
              <option value="03-01-2024">03-01-2024</option>
          </select> */}

          <input 
          type="date"
          id="date"
          name="startDate"
          placeholder="Start Date"
          value={formData.startDate}
          onChange={handleInputChange}
          className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
          />
        </div>

        {/* endDate */}

        <div className="space-y-2">
          <label htmlFor="date" className="block text-[18px] font-medium">
            Start Date <span className="text-red-500">*</span>
          </label>
          {/* <select value={formData.date} onChange={(e) => handleSelectChange("date", e.target.value)}  className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none ">
              <option value="01-01-2024">01-01-2024</option>
              <option value="02-01-2024">02-01-2024</option>
              <option value="03-01-2024">03-01-2024</option>
          </select> */}

          <input 
          type="date"
          id="date"
          name="endDate"
          placeholder="End Date"
          value={formData.endDate}
          onChange={handleInputChange}
          className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
          />
        </div>
         </div>


         {/* Package price  */}
        <div className="space-y-2">
          <label htmlFor="price" className="block text-[18px] font-medium">
            Package Price <span className="text-red-500">*</span>
          </label>
          <input 
          type="number"
          id="price"
          name="price"
          placeholder="Hotel price"
          value={formData.price}
          onChange={handleInputChange}
          className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
          />
        </div>


    {/* bedRoom
    bathRoom
    livingRoom
    kitchen */}


    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">

        <div className="space-y-2">
          <label htmlFor="bedRoom" className="block text-[18px] font-medium">
            bedRoom <span className="text-red-500">*</span>
          </label>
          <input 
          type="number"
          id="bedRoom"
          name="bedRoom"
          placeholder="Hotel bedRoom"
          value={formData.bedRoom}
          onChange={handleInputChange}
          className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
          />
        </div>

        <div  className="space-y-2">
          <label htmlFor="bathRoom" className="block text-[18px] font-medium">
            bathRoom <span className="text-red-500">*</span>
          </label>
          <input 
          type="number"
          id="bathRoom"
          name="bathRoom"
          placeholder="Hotel bathRoom"
          value={formData.bathRoom}
          onChange={handleInputChange}
          className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
          />
        </div>

        <div  className="space-y-2">
          <label htmlFor="livingRoom" className="block text-[18px] font-medium">
            livingRoom <span className="text-red-500">*</span>
          </label>
          <input 
          type="number"
          id="livingRoom"
          name="livingRoom"
          placeholder="Hotel livingRoom"
          value={formData.livingRoom}
          onChange={handleInputChange}
          className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
          />
        </div>

        <div  className="space-y-2">
          <label htmlFor="kitchen" className="block text-[18px] font-medium">
            kitchen <span className="text-red-500">*</span>
          </label>
          <input 
          type="number"
          id="kitchen"
          name="kitchen"
          placeholder="Hotel kitchen"
          value={formData.kitchen}
          onChange={handleInputChange}
          className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
          />
        </div>

    </div>





















      {/* Image Upload */}
      <div className="space-y-2">
        <label className="block text-[18px] font-medium">
          Upload Image <span className="text-red-500">*</span>
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <input type="file" id="image-upload" className="hidden" onChange={handleImageUpload}  multiple
        accept="image/*" />

          <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center justify-center">
            <Upload className="h-10 w-10 text-gray-400 mb-2" />
            <p className="text-sm text-gray-500">Drag file to upload</p>
            <p className="text-xs text-gray-400 mt-1">or</p>
            <button type="button"  className="mt-2">
              Browse Files
            </button>
          </label>

          <div className="flex flex-wrap gap-4">
        {file.map((file, index) => (
          <div
            key={index}
            className="relative w-24 h-24 rounded overflow-hidden"
          >
            <img
              src={URL.createObjectURL(file)}
              alt={`Preview ${index}`}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => handleDelete(index)}
              className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded-bl hover:bg-red-600"
            >
              ✖
            </button>
          </div>
        ))}
      </div>
          
        </div>
      </div>

      

           {/* jodit components */}
            <div>
              <label
                htmlFor="sub-headline"
                className="text-[#2E4454] text-[18px] font-medium mb-4 block"
              >
                Description
              </label>
              <JoditEditor
                ref={editor}
                value={content}
                config={config}
                onBlur={(newContent) => setContent(newContent)}
              />
            </div>







      
      {/* accommodations overview  */}

      <h1 className="text-[32px] text-[#101010] ">Accommodation Overview</h1>

     <div  className="space-y-2">
          <label htmlFor="mapLocation" className="block text-[18px] font-medium">
            Hotel Location <span className="text-red-500">*</span>
          </label>
          <input 
          type="text"
          id="mapLocation"
          name="mapLocation"
          placeholder="Hotel mapLocation"
          value={formData.mapLocation}
          onChange={handleInputChange}
          className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
          />
        </div>
















      {/* WAbout This Stay */}
      <div className="space-y-5">
        <h1 className="text-[32px] text-[#101010] ">About This Stay</h1>
        {aboutStays.map((feature, index) => (
        <div  key={index} className="relative">

         {
            index > 0 && <button
            type="button"
            className="absolute top-2 right-2"
            onClick={() => removeFeature(index)}
          >
            <X className="h-4 w-4" />
          </button>
         }



          <div  className="space-y-3 ">
            <div className="space-y-2">
               <div>
                <label className="text-[#101010] text-[18px] block ">Title</label>
               </div>
              <input
                value={feature.title}
                onChange={(e) => handleChange(index, "title", e.target.value)}
                placeholder="Enter feature title"
                className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
              
              />
            </div>
            <div className="space-y-2">
              <div>
                <label className="text-[#101010] text-[18px]" >Description</label>
              </div>

              <textarea
                value={feature.description}
                onChange={(e) => handleChange(index, "description", e.target.value)}
                placeholder="Enter feature description"
                className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
              />
            </div>
          </div>
        </div >
      ))}

     
        <button type="button"  onClick={addFeature} className="flex items-center gap-2">
          <PlusCircle className="h-4 w-4" />
          Add Feature
        </button>
      </div>



     {/* Detailed intinarys section  */}
      <div className="space-y-5">
        <h1 className="text-[32px] text-[#101010] ">Best places to visit in Croatia</h1>
        {bestPlaces.map((feature, index) => (
        <div  key={index} className="relative">

         {
            index > 0 && <button
            type="button"
            className="absolute top-2 right-2"
            onClick={() => removeFeatureItinerary(index)}
          >
            <X className="h-4 w-4" />
          </button>
         }



          <div  className="space-y-3 ">
            <div className="space-y-2">
               <div>
                <label className="text-[#101010] text-[18px] ">Title</label>
               </div>
              <input
                value={feature.title}
                onChange={(e) => handleChangeItinerary(index, "title", e.target.value)}
                placeholder="Enter feature title"
                className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
              
              />
            </div>
            <div className="space-y-2">
              <div>
                <label className="text-[#101010] text-[18px]" >Description</label>
              </div>

              <textarea
                value={feature.description}
                onChange={(e) => handleChangeItinerary(index, "description", e.target.value)}
                placeholder="Meet your guide at the designated meeting point. Relax in a luxury van as you drive through breathtaking Tuscan landscapes."
                className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
              />
            </div>
          </div>
        </div >
      ))}

     
        <button type="button"  onClick={addFeatureItinerary} className="flex items-center gap-2">
          <PlusCircle className="h-4 w-4" />
          Add Feature
        </button>
      </div>


      {/* About this activity */}
       <h1 className="text-[32px] text-[#101010]">About this activity</h1>
         
        <div className="space-y-4 p-4 flex gap-6">
        <div className="w-full">
          <label className="text-[#101010] text-[17px]">Group Size</label>
          <input
            type="number"
            value={activity.groupSize}
            onChange={(e) => handleGroupSizeChange(e.target.value)}
            placeholder="Enter group size"
            className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none"
          />
        </div>

        <div className="w-full">
          <label className="text-[#101010] text-[17px]">Languages</label>
          {activity.languages.map((lang, index) => (
            <input
              key={index}
              value={lang}
              onChange={(e) => handleLanguageChange(index, e.target.value)}
              placeholder={`Language ${index + 1}`}
              className="py-2.5 px-2 border border-[#98A2B3] w-full mb-2 rounded focus:outline-none"
            />
          ))}
        </div>
      </div>
       









      {/* amenities section  */}
      <div className="space-y-5">
        <h1 className="text-[32px] text-[#101010] ">Amenities & Services</h1>
        {amenities.map((feature, index) => (
        <div  key={index} className="relative">

         {
            index > 0 && <button
            type="button"
            className="absolute top-2 right-2"
            onClick={() => removeFeatureamenities(index)}
          >
            <X className="h-4 w-4" />
          </button>
         }



          <div  className="space-y-3 ">
            <div className="space-y-2">
               <div>
                <label className="text-[#101010] text-[18px] ">Title</label>
               </div>
              <input
                value={feature.title}
                onChange={(e) => handleChangeamenities(index, "title", e.target.value)}
                placeholder="Enter feature title"
                className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
              
              />
            </div>
          </div>
        </div >
      ))}

     
        <button type="button"  onClick={addFeatureamenities} className="flex items-center gap-2">
          <PlusCircle className="h-4 w-4" />
          Add Amenities
        </button>
      </div>




      
      

      
  
    
      
      


      {/* What to distances: section  */}
      <div className="space-y-5">
        <h1 className="text-[32px] text-[#101010] "> What to distances : </h1>
        {distances.map((feature, index) => (
        <div  key={index} className="relative">
         {
            index > 0 && <button
            type="button"
            className="absolute top-2 right-2"
            onClick={() => removeFeaturedistances(index)}
          >
            <X className="h-4 w-4" />
          </button>
         }



          <div  className="space-y-3 ">
            <div className="space-y-2">
               <div>
                <label className="text-[#101010] text-[18px] ">Title</label>
               </div>
              <input
                value={feature.title}
                onChange={(e) => handleChangedistances(index, "title", e.target.value)}
                placeholder="Enter feature title"
                className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
              
              />
            </div>
          </div>
        </div >
      ))}

     
        <button type="button"  onClick={addFeaturedistances} className="flex items-center gap-2">
          <PlusCircle className="h-4 w-4" />
          Add distances
        </button>
      </div>

     




    


   





      {/* Submit Buttons */}
      <div className="flex justify-end space-x-4">
        {/* <button type="button" >
          Cancel
        </button> */}
        <button type="submit" className="bg-[#1F90FF] px-3 py-2.5 rounded text-white ">
          {
            loading ? "Creating processing" : "Submit Package"
          }
        </button>
      </div>
    </form>
  )
}
