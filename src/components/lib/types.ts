 export type TPackageImage = {
  id: string;
  url: string;
  createdAt: string; // ISO timestamp
  updatedAt: string; // ISO timestamp
  hotelPackageId: string | null;
  tourPackageId: string | null;
};

export type THotelImage = {
  id: string;
  url: string;
  createdAt: string; // ISO timestamp
  updatedAt: string; // ISO timestamp
  hotelPackageId: string | null;
  tourPackageId: string | null;
};
 

 export type TTourPackage = {
  id: string;
  title: string;
  description: string;
  slug: string;
  location: string;
  tourType: string;
  category: string;
  duration: number;
  price: number;
  isVehicleService: boolean;
  packageDate: string; // ISO Date string
  createdAt: string; // ISO Date string
  updatedAt: string; // ISO Date string
  includes: { title: string }[];
  excludes: { title: string }[];
  tourLovingReasons: {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    tourPackageId: string;
  }[];
  activity: {
    id: string;
    groupSize: number;
    languages: string[];
    tourPackageId: string;
  };
  brings: {
    id: string;
    title: string;
    tourPackageId: string;
    createdAt: string;
    updatedAt: string;
  }[];
  descriptions: {
    id: string;
    title: string;
    description: string;
    tourPackageId: string;
    createdAt: string;
    updatedAt: string;
  }[];
  detailedItineraries: {
    id: string;
    title: string;
    description: string;
    tourPackageId: string;
    createdAt: string;
    updatedAt: string;
  }[];
  highlights: {
    id: string;
    title: string;
    tourPackageId: string;
    createdAt: string;
    updatedAt: string;
  }[];
  images: {
    id: string;
    url: string;
    createdAt: string;
    updatedAt: string;
    tourPackageId: string;
    hotelPackageId: string | null;
  }[];
  importantInfo: {
    id: string;
    meetingPointGoogleMap: string;
    mobileTicket: string;
    transportation: string;
    dressCode: string;
    ageRequirement: string;
    tourPackageId: string;
    createdAt: string;
    updatedAt: string;
  };
  knowBeforeYouGoes: {
    id: string;
    title: string;
    description: string;
    tourPackageId: string;
    createdAt: string;
    updatedAt: string;
  }[];
  tourPackageVehicles: {
    id: string;
    vehicleId: string;
    vehicleType: string;
    tourPackageId: string;
    createdAt: string;
    updatedAt: string;
  }[];
};




// Hotel packages type 
export type THotelPackage = {
  id: string;
  title: string;
  description: string;
  startDate: string; // ISO date string
  endDate: string;   // ISO date string
  slug: string;
  roomCategory: string;
  price: number;
  bedRoom: number;
  bathRoom: number;
  livingRoom: number;
  kitchen: number;
  mapLocation: string;
  duration: string;
  amenities: {
    title: string;
  }[];
  distances: {
    title: string;
  }[];
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  images: {
    id: string;
    url: string;
    createdAt: string;
    updatedAt: string;
    tourPackageId: string | null;
    hotelPackageId: string;
  }[];
  bestPlaces: {
    id: string;
    title: string;
    description: string;
    hotelPackageId: string;
  }[];
  aboutStays: {
    id: string;
    title: string;
    description: string;
    hotelPackageId: string;
  }[];
  activity: {
    id: string;
    hotelPackageId: string;
    groupSize: number;
    languages: string[];
  };
};
