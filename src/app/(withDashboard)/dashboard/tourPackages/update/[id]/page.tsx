/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { PlusCircle, X, Upload } from "lucide-react";
import { Switch } from "antd";
import dynamic from "next/dynamic";
import { useGetAllVehicleQuery } from "@/redux/api/vehicle/vehicleApi";
import {
  useGetSingleTourQuery,
  useUpdateTourPackageMutation,
} from "@/redux/api/tourPackages/tourPackagesApi";
import toast from "react-hot-toast";
import { useParams } from "next/navigation";
import Header from "@/components/dashboard/Header/Header";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

interface TourLovingReasons {
  title: string;
  description: string;
}

interface THighlights {
  title: string;
}

interface TourVehicle {
  vehicleType: string;
  vehicleId: string;
}

interface GroupLanguage {
  groupSize: number;
  languages: string[];
}

export type TVehicleOfObject = {
  id: string;
  name: string;
  slug: string;
  vehicleType: " BOAT" | "CAR" | "VAN" | "AIRCRAFT";
  pricePerHR: number;
  img: string;
  createdAt: string;
  updatedAt: string;
};

export default function TourPackageForm() {
  const { data } = useGetAllVehicleQuery("");
  const params = useParams();
  const id = params.id;
  const { data: tourPackage } = useGetSingleTourQuery(id);
  const [updateTourPackage] = useUpdateTourPackageMutation();

  // State for form data
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    location: "",
    duration: "",
    date: "",
    price: "",
    image: null,
    slug: "sunset-sea-adventure",
    // improtent
    meetingPointGoogleMap: "",
    transportation: "",
    dressCode: "",
    ageRequirement: "",
    mobileTicket: "",
    // vehicle
    isVehicleService: false,
  });

  useEffect(() => {
    console.log("call");
    setFormData({
      title: tourPackage?.data?.title,
      category: tourPackage?.data?.category,
      location: tourPackage?.data?.location,
      duration: tourPackage?.data?.duration,
      date: tourPackage?.data?.packageDate,
      price: tourPackage?.data?.price,
      image: null,
      slug: "sunset-sea-adventure",
      // improtent
      meetingPointGoogleMap:
        tourPackage?.data?.importantInfo?.meetingPointGoogleMap,
      transportation: tourPackage?.data?.importantInfo?.transportation,
      dressCode: tourPackage?.data?.importantInfo?.dressCode,
      ageRequirement: tourPackage?.data?.importantInfo?.ageRequirement,
      mobileTicket: tourPackage?.data?.importantInfo?.mobileTicket,
      // vehicle
      isVehicleService: tourPackage?.data?.isVehicleService,
    });
  }, [tourPackage]);

  const [file, setFile] = useState<File[]>([]);

  // State for dynamic fields tourLovingReasons
  const [tourLovingReasons, setTourLovingReasons] = useState<
    TourLovingReasons[]
  >([{ title: "", description: "" }]);

  // Detailed Itinerary state
  const [detailedItinerarys, setDetailedItinerarys] = useState<
    TourLovingReasons[]
  >([{ title: "", description: "" }]);
  // Highlights  state
  const [highlights, setHighlights] = useState<THighlights[]>([{ title: "" }]);
  // Description  state
  const [descriptions, setDescriptions] = useState<TourLovingReasons[]>([
    { title: "", description: "" },
  ]);
  // Included
  const [includeds, setIncludeds] = useState<THighlights[]>([{ title: "" }]);
  // Excluded
  const [excludeds, setExcludeds] = useState<THighlights[]>([{ title: "" }]);
  // Bring state
  const [bring, setBring] = useState<THighlights[]>([{ title: "" }]);
  // knowBeforeYouGoes
  const [knowBeforeYouGoes, setknowBeforeYouGoes] = useState<
    TourLovingReasons[]
  >([{ title: "", description: "" }]);
  // vehicle service
  const [tourPackageVehicles, setTourPackageVehicles] = useState<TourVehicle[]>(
    [{ vehicleType: "", vehicleId: "" }]
  );

  // group and language
  const [activity, setActivity] = useState<GroupLanguage>({
    groupSize: 0,
    languages: [""],
  });

  // reset and store in the state
  useEffect(() => {
    if (tourPackage?.data?.tourLovingReasons) {
      setTourLovingReasons(tourPackage.data.tourLovingReasons);
       console.log('Fetched Data:', tourPackage.data.tourLovingReasons);
    }
  }, [tourPackage]);



  useEffect(() => {
    if (tourPackage?.data?.detailedItineraries) {
      setDetailedItinerarys(tourPackage?.data?.detailedItineraries);
    }
  }, [tourPackage]);

  useEffect(() => {
    if (tourPackage?.data?.activity) {
      setActivity(tourPackage?.data?.activity);
    }
  }, [tourPackage]);

  useEffect(() => {
    if (tourPackage?.data?.highlights) {
      setHighlights(tourPackage?.data?.highlights);
    }
  }, [tourPackage]);

  useEffect(() => {
    if (tourPackage?.data?.descriptions) {
      setDescriptions(tourPackage?.data?.descriptions);
    }
  }, [tourPackage]);

  useEffect(() => {
    if (tourPackage?.data?.includes) {
      setIncludeds(tourPackage?.data?.includes);
    }
  }, [tourPackage]);

  useEffect(() => {
    if (tourPackage?.data?.excludes) {
      setExcludeds(tourPackage?.data?.excludes);
    }
  }, [tourPackage]);

  useEffect(() => {
    if (tourPackage?.data?.brings) {
      setBring(tourPackage?.data?.brings);
    }
  }, [tourPackage]);

  useEffect(() => {
    if (tourPackage?.data?.knowBeforeYouGoes) {
      setknowBeforeYouGoes(tourPackage?.data?.knowBeforeYouGoes);
    }
  }, [tourPackage]);

  useEffect(() => {
    if (tourPackage?.data?.tourPackageVehicles) {
      setTourPackageVehicles(tourPackage?.data?.tourPackageVehicles);
    }
  }, [tourPackage]);

  // Handle input changes and for specific fileds
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles) return;

    const fileArray = Array.from(selectedFiles);
    setFile((prev) => [...prev, ...fileArray]);
  };

  // why do you love to travel reason  functionality
  const handleChange = (
    index: number,
    field: keyof TourLovingReasons,
    value: string
  ) => {
    // const updated = [...tourLovingReasons];
    // updated[index][field] = value;
    // setTourLovingReasons(updated);
    setTourLovingReasons((prev) =>
    prev.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    )
  );
  };

 console.log("tourrrrrrrrrrrr", tourLovingReasons)

  const addFeature = () => {
    setTourLovingReasons([
      ...tourLovingReasons,
      { title: "", description: "" },
    ]);
  };

  const removeFeature = (index: number) => {
    const updated = [...tourLovingReasons];
    updated.splice(index, 1);
    setTourLovingReasons(updated);
  };





  // Detailed Itinerary function
  const handleChangeItinerary = (
    index: number,
    field: keyof TourLovingReasons,
    value: string
  ) => {
    // const updated = [...detailedItinerarys];
    // updated[index][field] = value;
    // setDetailedItinerarys(updated);
    setDetailedItinerarys((prev) => prev.map((item, i) => i === index ? {...item, [field] : value } : item  ))
  };



  const addFeatureItinerary = () => {
    setDetailedItinerarys([
      ...detailedItinerarys,
      { title: "", description: "" },
    ]);
  };

  const removeFeatureItinerary = (index: number) => {
    const updated = [...detailedItinerarys];
    updated.splice(index, 1);
    setDetailedItinerarys(updated);
  };


  //  Group and Language
  const handleGroupSizeChange = (value: string) => {
    setActivity((prev) => ({ ...prev, groupSize: Number(value) }));
  };

  const handleLanguageChange = (index: number, value: string) => {
    const updatedLanguages = [...activity.languages];
    updatedLanguages[index] = value;
    setActivity((prev) => ({ ...prev, languages: updatedLanguages }));
  };



  // Highlights
  const handleChangeHighlights = (
    index: number,
    field: keyof THighlights,
    value: string
  ) => {
    // const updated = [...highlights];
    // updated[index][field] = value;
    // setHighlights(updated);

    setHighlights((prev) => prev?.map((item, i) =>  i === index ? { ...item, [field] : value } : item ))
  };


  const addFeatureHighlights = () => {
    setHighlights([...highlights, { title: "" }]);
  };

  const removeFeatureHighlights = (index: number) => {
    const updated = [...highlights];
    updated.splice(index, 1);
    setHighlights(updated);
  };

  // Description  fucntion
  const handleChangeDescription = (
    index: number,
    field: keyof TourLovingReasons,
    value: string
  ) => {
    // const updated = [...descriptions];
    // updated[index][field] = value;
    // setDescriptions(updated);

    setDescriptions((prev) => prev.map((item, i) => i === index ? {...item, [field]: value}: item ))
  };



  const addFeatureDescription = () => {
    setDescriptions([...descriptions, { title: "", description: "" }]);
  };

  const removeFeatureDescription = (index: number) => {
    const updated = [...descriptions];
    updated.splice(index, 1);
    setDescriptions(updated);
  };

  // Included function
  const handleChangeIncluded = (
    index: number,
    field: keyof THighlights,
    value: string
  ) => {
    // const updated = [...includeds];
    // updated[index][field] = value;
    // setIncludeds(updated);
    
    setIncludeds((prev) => prev.map((item, i) => i === index ? {...item, [field]: value}: item ))
  };



  const addFeatureIncluded = () => {
    setIncludeds([...includeds, { title: "" }]);
  };

  const removeFeatureIncluded = (index: number) => {
    const updated = [...includeds];
    updated.splice(index, 1);
    setIncludeds(updated);
  };

  // Excluded function
  const handleChangeExcluded = (
    index: number,
    field: keyof THighlights,
    value: string
  ) => {
    const updated = [...excludeds];
    updated[index][field] = value;
    setExcludeds(updated);
  };

  const addFeatureExcluded = () => {
    setExcludeds([...excludeds, { title: "" }]);
  };

  const removeFeatureExcluded = (index: number) => {
    const updated = [...excludeds];
    updated.splice(index, 1);
    setExcludeds(updated);
  };

  // what is Brring
  const handleChangeBring = (
    index: number,
    field: keyof THighlights,
    value: string
  ) => {
    // const updated = [...bring];
    // updated[index][field] = value;
    // setBring(updated);
    setBring((prev) => prev.map((item, i) => i === index ? {...item, [field]: value}: item ))
  };

  const addFeatureBring = () => {
    setBring([...bring, { title: "" }]);
  };

  const removeFeatureBring = (index: number) => {
    const updated = [...bring];
    updated.splice(index, 1);
    setBring(updated);
  };

  // KnowBeforeYouGoes function

  const handleChangeKnowBeforeYouGoes = (
    index: number,
    field: keyof TourLovingReasons,
    value: string
  ) => {
    // const updated = [...knowBeforeYouGoes];
    // updated[index][field] = value;
    // setknowBeforeYouGoes(updated);
     setknowBeforeYouGoes((prev) => prev.map((item, i) => i === index ? {...item, [field]: value}: item ))
  };

  const addFeatureKnowBeforeYouGoes = () => {
    setknowBeforeYouGoes([
      ...knowBeforeYouGoes,
      { title: "", description: "" },
    ]);
  };

  const removeFeatureKnowBeforeYouGoes = (index: number) => {
    const updated = [...knowBeforeYouGoes];
    updated.splice(index, 1);
    setknowBeforeYouGoes(updated);
  };

  //  Do you provide vehicle service?

  const handleChangeVehicles = (
    index: number,
    field: keyof TourVehicle,
    value: string
  ) => {
    // const updated = [...tourPackageVehicles];
    // updated[index][field] = value;
    // setTourPackageVehicles(updated);
    setTourPackageVehicles((prev) => prev.map((item, i) => i === index ? {...item, [field]: value}: item ))
  };

  

  const addVehicle = () => {
    setTourPackageVehicles([
      ...tourPackageVehicles,
      { vehicleType: "", vehicleId: "" },
    ]);
  };

  const removeVehicle = (index: number) => {
    const updated = [...tourPackageVehicles];
    updated.splice(index, 1);
    setTourPackageVehicles(updated);
  };

  //  toggle vehicle
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
    setFormData((prev) => ({
      ...prev,
      isVehicleService: checked,
    }));
  };

  // Jodit
  const [content, setContent] = useState("");
  const editor = useRef(null);
  const config = {
    height: 400,
    tabIndex: 2,
  };
  const [loadding, setLoadding] = useState(false);

  useEffect(() => {
    setContent(tourPackage?.data?.description);
  }, [tourPackage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadding(true);

    const fullData = {
      title: formData.title,
      slug: formData.slug || formData.title?.toLowerCase().replace(/\s+/g, "-"),
      description: content,
      location: formData.location,
      tourType: "type",
      // packageDate: formData.date,
      packageDate: new Date(formData.date).toISOString(),
      // category: formData.category,
      category: formData.category,
      duration: Number(formData.duration),
      price: Number(formData.price),
      isVehicleService: formData.isVehicleService,

      importantInfo: {
        meetingPointGoogleMap: formData.meetingPointGoogleMap,
        transportation: formData.transportation,
        dressCode: formData.dressCode,
        ageRequirement: formData.ageRequirement,
        mobileTicket: formData.mobileTicket,
      },

      tourLovingReasons,
      detailedItineraries: detailedItinerarys,
      activity,
      highlights,
      descriptions,
      includes: includeds,
      excludes: excludeds,
      brings: bring,
      knowBeforeYouGoes,
      tourPackageVehicles,
    };

    // const formDatas = new FormData();
    // formDatas.append("data", JSON.stringify(fullData));
    // if(file?.length > 0){
    //    file.forEach(f => formDatas.append("images", f));
    // }

    try {
      const result = await updateTourPackage({
        id,
        tourPackageData: fullData,
      }).unwrap();
      if (result?.success) {
        toast.success(result.message || "Tour Packages update successfully!");
      }

      setLoadding(false);
    } catch (err: any) {
      console.error("Failed to update Tour Packages:", err);
      toast.error("Failed to update Tour Packages.");
      setLoadding(false);
    }
  };

  // image delete
  const handleDelete = (index: number) => {
    const updatedFiles = [...file];
    updatedFiles.splice(index, 1);
    setFile(updatedFiles);
  };



  return (
    <div>
      <Header />

      <form
        onSubmit={handleSubmit}
        className=" px-4 md:px-7 space-y-8 mt-10 mb-10"
      >
        <div className="text-2xl font-bold">Update tour Package</div>

        <div className="space-y-2">
          <label htmlFor="title" className="block text-[18px] font-medium">
            Package Title <span className="text-red-500">*</span>
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

        {/* Basic Package Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* package category  */}
          <div className="space-y-2">
            <label htmlFor="category" className="block text-[18px] font-medium">
              Package Category <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.category}
              onChange={(e) => handleSelectChange("category", e.target.value)}
              className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
            >
              <option value="SEA_TOUR">SEA_TOUR</option>
              <option value="LAND_TOUR">LAND_TOUR</option>
              <option value="CULTURAL_TOUR">CULTURAL_TOUR</option>
              <option value="GASTRO_WINE_TOUR">GASTRO_WINE_TOUR</option>
            </select>
          </div>

          {/* location */}
          <div className="space-y-2">
            <label htmlFor="location" className="block text-[18px] font-medium">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              id="location"
              name="location"
              placeholder="City Name"
              value={formData.location}
              onChange={handleInputChange}
              className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
              // required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Package Duration */}
          <div className="space-y-2">
            <label htmlFor="duration" className="block text-[18px] font-medium">
              Package Duration <span className="text-red-500">*</span>
            </label>
            {/* <select value={formData.duration}  onChange={(e) => handleSelectChange("duration", e.target.value)}  className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none ">
              <option value="2">2 Hours</option>
              <option value="4">4 Hours</option>
              <option value="8">8 Hours</option>
              <option value="12">12 Hours</option>
              <option value="24">Full Day</option>
          </select> */}
            <input
              type="number"
              id="duration"
              name="duration"
              placeholder="Tour date"
              value={formData.duration}
              onChange={handleInputChange}
              className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
            />
          </div>

          {/* Package Date */}
          <div className="space-y-2">
            <label htmlFor="date" className="block text-[18px] font-medium">
              Package Date <span className="text-red-500">*</span>
            </label>
            {/* <select value={formData.date} onChange={(e) => handleSelectChange("date", e.target.value)}  className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none ">
              <option value="01-01-2024">01-01-2024</option>
              <option value="02-01-2024">02-01-2024</option>
              <option value="03-01-2024">03-01-2024</option>
          </select> */}

            <input
              type="date"
              id="date"
              name="date"
              placeholder="Tour date"
              value={formData.date}
              onChange={handleInputChange}
              className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
            />
          </div>

          {/* Package price  */}
          <div className="space-y-2">
            <label htmlFor="price" className="block text-[18px] font-medium">
              Package Price <span className="text-red-500">*</span>
            </label>
            {/* <select value={formData.price} onChange={(e) => handleSelectChange("price", e.target.value )}  className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none ">
              <option value="100">$100.00</option>
              <option value="200">$200.00</option>
              <option value="300">$300.00</option>
              <option value="400">$400.00</option>
              <option value="500">$500.00</option>
          </select> */}
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Tour price"
              value={formData.price}
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
            <input
              type="file"
              id="image-upload"
              className="hidden"
              onChange={handleImageUpload}
              multiple
              accept="image/*"
            />

            <label
              htmlFor="image-upload"
              className="cursor-pointer flex flex-col items-center justify-center"
            >
              <Upload className="h-10 w-10 text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">Drag file to upload</p>
              <p className="text-xs text-gray-400 mt-1">or</p>
              <button type="button" className="mt-2">
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





        {/* Why You'll Love This Tour */}
        <div className="space-y-5">
          <h1 className="text-[32px] text-[#101010] ">
            Why Youll Love This Tour
          </h1>
          {tourLovingReasons.map((feature, index) => (
            <div key={index} className="relative">
              {index > 0 && (
                <button
                  type="button"
                  className="absolute top-2 right-2"
                  onClick={() => removeFeature(index)}
                >
                  <X className="h-4 w-4" />
                </button>
              )}

              <div className="space-y-3 ">
                <div className="space-y-2">
                  <div>
                    <label className="text-[#101010] text-[18px] block ">
                      Title
                    </label>
                  </div>
                  <input
                    value={feature.title}
                    onChange={(e) =>
                      handleChange(index, "title", e.target.value)
                    }
                    placeholder="Enter feature title"
                    className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
                  />
                </div>
                <div className="space-y-2">
                  <div>
                    <label className="text-[#101010] text-[18px]">
                      Description
                    </label>
                  </div>

                  <textarea
                    value={feature.description}
                    onChange={(e) =>
                      handleChange(index, "description", e.target.value)
                    }
                    placeholder="Enter feature description"
                    className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addFeature}
            className="flex items-center gap-2"
          >
            <PlusCircle className="h-4 w-4" />
            Add Feature
          </button>
        </div>





        {/* Detailed intinarys section  */}
        <div className="space-y-5">
          <h1 className="text-[32px] text-[#101010] ">
            Detailed Itinerary – What to Expect
          </h1>
          {detailedItinerarys.map((feature, index) => (
            <div key={index} className="relative">
              {index > 0 && (
                <button
                  type="button"
                  className="absolute top-2 right-2"
                  onClick={() => removeFeatureItinerary(index)}
                >
                  <X className="h-4 w-4" />
                </button>
              )}

              <div className="space-y-3 ">
                <div className="space-y-2">
                  <div>
                    <label className="text-[#101010] text-[18px] ">Title</label>
                  </div>
                  <input
                    value={feature.title}
                    onChange={(e) =>
                      handleChangeItinerary(index, "title", e.target.value)
                    }
                    placeholder="Enter feature title"
                    className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
                  />
                </div>
                <div className="space-y-2">
                  <div>
                    <label className="text-[#101010] text-[18px]">
                      Description
                    </label>
                  </div>

                  <textarea
                    value={feature.description}
                    onChange={(e) =>
                      handleChangeItinerary(
                        index,
                        "description",
                        e.target.value
                      )
                    }
                    placeholder="Meet your guide at the designated meeting point. Relax in a luxury van as you drive through breathtaking Tuscan landscapes."
                    className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addFeatureItinerary}
            className="flex items-center gap-2"
          >
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

        {/* Highlights section  */}
        <div className="space-y-5">
          <h1 className="text-[32px] text-[#101010] ">Highlights</h1>
          {highlights.map((feature, index) => (
            <div key={index} className="relative">
              {index > 0 && (
                <button
                  type="button"
                  className="absolute top-2 right-2"
                  onClick={() => removeFeatureHighlights(index)}
                >
                  <X className="h-4 w-4" />
                </button>
              )}

              <div className="space-y-3 ">
                <div className="space-y-2">
                  <div>
                    <label className="text-[#101010] text-[18px] ">Title</label>
                  </div>
                  <input
                    value={feature.title}
                    onChange={(e) =>
                      handleChangeHighlights(index, "title", e.target.value)
                    }
                    placeholder="Enter feature title"
                    className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addFeatureHighlights}
            className="flex items-center gap-2"
          >
            <PlusCircle className="h-4 w-4" />
            Add Highlight
          </button>
        </div>

        {/* Description section  */}
        <div className="space-y-5">
          <h1 className="text-[32px] text-[#101010] ">Description</h1>
          {descriptions.map((feature: TourLovingReasons, index) => (
            <div key={index} className="relative">
              {index > 0 && (
                <button
                  type="button"
                  className="absolute top-2 right-2"
                  onClick={() => removeFeatureDescription(index)}
                >
                  <X className="h-4 w-4" />
                </button>
              )}

              <div className="space-y-3 ">
                <div className="space-y-2">
                  <div>
                    <label className="text-[#101010] text-[18px] ">Title</label>
                  </div>
                  <input
                    value={feature.title}
                    onChange={(e) =>
                      handleChangeDescription(index, "title", e.target.value)
                    }
                    placeholder="Enter feature title"
                    className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
                  />
                </div>
                <div className="space-y-2">
                  <div>
                    <label className="text-[#101010] text-[18px]">
                      Description
                    </label>
                  </div>

                  <textarea
                    value={feature.description}
                    onChange={(e) =>
                      handleChangeDescription(
                        index,
                        "description",
                        e.target.value
                      )
                    }
                    placeholder="Meet your guide at the designated meeting point. Relax in a luxury van as you drive through breathtaking Tuscan landscapes."
                    className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addFeatureDescription}
            className="flex items-center gap-2"
          >
            <PlusCircle className="h-4 w-4" />
            Add Description
          </button>
        </div>

        {/* What’s Included & Excluded? */}
        <div className="space-y-5">
          <h1 className="text-[32px] text-[#101010] ">
            What’s Included & Excluded?
          </h1>
          <p className="text-[#101010]"> What’s Included:</p>
          {includeds.map((feature, index) => (
            <div key={index} className="relative">
              {index > 0 && (
                <button
                  type="button"
                  className="absolute top-2 right-2"
                  onClick={() => removeFeatureIncluded(index)}
                >
                  <X className="h-4 w-4" />
                </button>
              )}

              <div className="space-y-3 ">
                <div className="space-y-2">
                  <div>
                    <label className="text-[#101010] text-[18px] ">Title</label>
                  </div>
                  <input
                    value={feature.title}
                    onChange={(e) =>
                      handleChangeIncluded(index, "title", e.target.value)
                    }
                    placeholder="Enter feature title"
                    className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addFeatureIncluded}
            className="flex items-center gap-2"
          >
            <PlusCircle className="h-4 w-4" />
            Add Included
          </button>
        </div>
        {/* Excluded */}
        <div className="space-y-5">
          <p className="text-[#101010]"> What’s Excluded:</p>
          {excludeds.map((feature, index) => (
            <div key={index} className="relative">
              {index > 0 && (
                <button
                  type="button"
                  className="absolute top-2 right-2"
                  onClick={() => removeFeatureExcluded(index)}
                >
                  <X className="h-4 w-4" />
                </button>
              )}

              <div className="space-y-3 ">
                <div className="space-y-2">
                  <div>
                    <label className="text-[#101010] text-[18px] ">Title</label>
                  </div>
                  <input
                    value={feature.title}
                    onChange={(e) =>
                      handleChangeExcluded(index, "title", e.target.value)
                    }
                    placeholder="Enter feature title"
                    className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addFeatureExcluded}
            className="flex items-center gap-2"
          >
            <PlusCircle className="h-4 w-4" />
            Add Excluded
          </button>
        </div>

        {/* Important Information */}
        <div className="space-y-4">
          <h3 className="text-[32px] text-[#101010] font-medium">
            Important Information:
          </h3>

          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Meeting point (Google maps)
            </label>
            <input
              placeholder="https://maps.app.goo.gl/PGRdHBdUBiA"
              id="meetingPointGoogleMap"
              name="meetingPointGoogleMap"
              value={formData.meetingPointGoogleMap}
              onChange={handleInputChange}
              className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Transportation
              </label>
              <input
                placeholder="$10/hour (Full-day tour)"
                id="transportation"
                name="transportation"
                value={formData.transportation}
                onChange={handleInputChange}
                className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Dress Code</label>
              <input
                placeholder="$10 per person"
                id="dressCode"
                name="dressCode"
                value={formData.dressCode}
                onChange={handleInputChange}
                className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Mobile Ticket</label>
              <input
                placeholder="$10/hour (Full-day tour)"
                id="mobileTicket"
                name="mobileTicket"
                value={formData.mobileTicket}
                onChange={handleInputChange}
                className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Age Requirement
              </label>
              <input
                id="ageRequirement"
                name="ageRequirement"
                value={formData.ageRequirement}
                onChange={handleInputChange}
                className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
                placeholder="$10 per person"
              />
            </div>
          </div>
        </div>

        {/* What to bring: section  */}
        <div className="space-y-5">
          <h1 className="text-[32px] text-[#101010] "> What to bring : </h1>
          {bring.map((feature, index) => (
            <div key={index} className="relative">
              {index > 0 && (
                <button
                  type="button"
                  className="absolute top-2 right-2"
                  onClick={() => removeFeatureBring(index)}
                >
                  <X className="h-4 w-4" />
                </button>
              )}

              <div className="space-y-3 ">
                <div className="space-y-2">
                  <div>
                    <label className="text-[#101010] text-[18px] ">Title</label>
                  </div>
                  <input
                    value={feature.title}
                    onChange={(e) =>
                      handleChangeBring(index, "title", e.target.value)
                    }
                    placeholder="Enter feature title"
                    className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addFeatureBring}
            className="flex items-center gap-2"
          >
            <PlusCircle className="h-4 w-4" />
            Add Bring
          </button>
        </div>

        {/* knowBeforeYouGoes section  */}
        <div className="space-y-5">
          <h1 className="text-[32px] text-[#101010] ">Know befor you go:</h1>
          {knowBeforeYouGoes.map((feature, index) => (
            <div key={index} className="relative">
              {index > 0 && (
                <button
                  type="button"
                  className="absolute top-2 right-2"
                  onClick={() => removeFeatureKnowBeforeYouGoes(index)}
                >
                  <X className="h-4 w-4" />
                </button>
              )}

              <div className="space-y-3 ">
                <div className="space-y-2">
                  <div>
                    <label className="text-[#101010] text-[18px] ">Title</label>
                  </div>
                  <input
                    value={feature.title}
                    onChange={(e) =>
                      handleChangeKnowBeforeYouGoes(
                        index,
                        "title",
                        e.target.value
                      )
                    }
                    placeholder="Enter feature title"
                    className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
                  />
                </div>
                <div className="space-y-2">
                  <div>
                    <label className="text-[#101010] text-[18px]">
                      Description
                    </label>
                  </div>

                  <textarea
                    value={feature.description}
                    onChange={(e) =>
                      handleChangeKnowBeforeYouGoes(
                        index,
                        "description",
                        e.target.value
                      )
                    }
                    placeholder="Meet your guide at the designated meeting point. Relax in a luxury van as you drive through breathtaking Tuscan landscapes."
                    className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none "
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addFeatureKnowBeforeYouGoes}
            className="flex items-center gap-2"
          >
            <PlusCircle className="h-4 w-4" />
            Add Feature
          </button>
        </div>

        <div>
          <h1 className="text-[#101010] text-[18px] ">
            Do you provide vehicle service?
          </h1>

          <div className="flex gap-2.5 items-center mt-3.5">
            <span className="text-red-500 ">No</span>
            <Switch onChange={onChange} />
            <span className="text-[#009E4F]">Yes</span>
          </div>
        </div>

        {formData.isVehicleService && (
          <div>
            {tourPackageVehicles.map((item, index) => (
              <div key={index} className="relative">
                {index > 0 && (
                  <button
                    type="button"
                    className="absolute top-2 right-2"
                    onClick={() => removeVehicle(index)}
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}

                <div className="space-y-3 grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-[#101010] text-[18px] !mb-4.5">
                      Vehicle Type
                    </label>
                    <select
                      value={item.vehicleType}
                      onChange={(e) =>
                        handleChangeVehicles(
                          index,
                          "vehicleType",
                          e.target.value
                        )
                      }
                      className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none"
                    >
                      {data?.data?.data.map((vehicle: TVehicleOfObject) => (
                        <option key={vehicle.id} value={vehicle.vehicleType}>
                          {vehicle.vehicleType}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[#101010] text-[18px]">
                      Vehicle Name
                    </label>
                    <select
                      value={item.vehicleId}
                      onChange={(e) =>
                        handleChangeVehicles(index, "vehicleId", e.target.value)
                      }
                      className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none"
                    >
                      {data?.data?.data.map((vehicle: TVehicleOfObject) => (
                        <option key={vehicle.id} value={vehicle.id}>
                          {vehicle.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addVehicle}
              className="flex items-center gap-2 mt-1.5"
            >
              <PlusCircle className="h-4 w-4" />
              Add Vehicle
            </button>
          </div>
        )}

        {/* Submit Buttons */}
        <div className="flex justify-end space-x-4">
          {/* <button type="button" >
          Cancel
        </button> */}
          <button
            type="submit"
            className="bg-[#1F90FF] px-3 py-2.5 rounded text-white "
          >
            {loadding ? "Creating Packages..." : "Submit Package"}
          </button>
        </div>
      </form>
    </div>
  );
}
