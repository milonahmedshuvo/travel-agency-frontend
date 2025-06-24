import RevenueOverview from '../dashboard/analytics/revenue-overview';
/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
//  vehicle data type

export interface GenericResponse<T> {
  message: string;
  success: boolean;
  meta: any | null;
  data: T;
}
export interface TVehicle {
  id: string;
  name: string;
  slug: string;
  img: string;
  pricePerHR: number;
  vehicleType: "BOAT" | "CAR" | "VAN" | "AIRCRAFT";
  createdAt: string;
  updatedAt: string;
}

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
  endDate: string; // ISO date string
  slug: string;
  roomCategory: string;
  location: string; // new add location proverty
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

// GET Tour Booking type
type Guest = {
  id: string;
  fullName: string;
  email: string;
  isAdult: boolean;
  age: number;
  contactNo: string;
  requestMessage: string;
  tourBookingId: string;
  roomBookingId: string | null;
  createdAt: string;
  updatedAt: string;
};

type VehicleBooking = {
  id: string;
  pickUpAddr: string;
  pickUpDate: string;
  pickUpTime: string;
  duration: number;
  price: number;
  restaurant: string;
  address: string;
  expTimeSty: string;
  sameCarReturn: boolean;
  dropOffAddr: string;
  needsAdditionalStops: boolean;
  tourBookingId: string;
  customerId: string;
  isCancelled: boolean;
  isPaid: boolean;
  cancelReason: string | null;
  createdAt: string;
  updatedAt: string;
  tourPackageVehicleId: string;

  tourPackageVehicle: { vehicleType: string };
};

export type TourBooking = {
  id: string;
  tourPackageId: string;
  availableDate: string;
  duration: number;
  groupSize: number;
  customerId: string;
  isCancelled: boolean;
  cancelReason: string;
  isPaid: boolean;
  isVehicleBooking: boolean;
  createdAt: string;
  updatedAt: string;
  guests: Guest[];
  vehicleBooking: VehicleBooking | null;
  transactions: any; // Change `any` to a specific type if transaction structure is known
  splitPayment: any; // Change `any` to a specific type if splitPayment structure is known
  tourPackage: TTourPackage;
};

// Room Bookings
export interface TRoomBooking {
  id: string;
  checkInDate: string; // ISO date string
  checkOutDate: string; // ISO date string
  numberOfGuests: number;
  roomType: string;
  createdAt: string;
  updatedAt: string;
  isCancelled: boolean;
  cancelReason: string;
  customerId: string;
  isPaid: boolean;
  hotelPackageId: string;
  guests: RoomGuest[];
  hotelPackage: HotelPackage;
  transactions: Transaction | null;
}

interface RoomGuest {
  id: string;
  fullName: string;
  email: string;
  isAdult: boolean;
  age: number;
  contactNo: string;
  requestMessage: string;
  tourBookingId: string | null;
  roomBookingId: string;
  createdAt: string;
  updatedAt: string;
}

interface HotelPackage {
  id: string;
  title: string;
  description: string;
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  slug: string;
  roomCategory: string;
  price: number;
  bedRoom: number;
  bathRoom: number;
  livingRoom: number;
  kitchen: number;
  mapLocation: string;
  duration: string;
  amenities: Amenity[];
  distances: Distance[];
  createdAt: string;
  updatedAt: string;
}

interface Amenity {
  title: string;
}

interface Distance {
  title: string;
}

interface Transaction {
  // Define if needed; currently null
  status: string,
}


export interface TourStats {
  name: string;
  totalParticipants: number;
  totalPercentage: number;
}


export interface RevenueOverview {
  date: string;
  earning: number;
}