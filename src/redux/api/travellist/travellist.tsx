import { baseApi } from "../baseApi";
import { tagTypes } from "../tag-types";

export type TMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
};

export type TResponseSuccess = {
  message: string;
  success: boolean;
  meta: TMeta;
};
export type TGuest = {
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

export type TVehicle = {
  id: string;
  name: string;
  slug: string;
  vehicleType: string;
  pricePerHR: number;
  img: string;
  createdAt: string;
  updatedAt: string;
};

export type TTourPackageVehicle = {
  id: string;
  vehicleId: string;
  vehicleType: string;
  tourPackageId: string;
  createdAt: string;
  updatedAt: string;
  vehicle: TVehicle;
};

export type TVehicleBooking = {
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
  tourPackageVehicle: TTourPackageVehicle;
};

export type TTransaction = {
  id: string;
  amount: number;
  currency: string;
  billingAddress: string | null;
  paymentMethodType: string;
  paymentMethodId: string | null;
  clientSecret: string;
  splitPaymentType: string;
  splitWithId: string;
  status: string;
  tourBookingId: string;
  roomBookingId: string | null;
  vehicleBookingId: string | null;
  customerId: string;
  createdAt: string;
  updatedAt: string;
};

export type TSplitPayment = {
  id: string;
  initialPaymentTransactionId: string;
  finalPaymentTransactionId: string;
  roomBookingId: string | null;
  tourBookingId: string;
  paymentStatus: string;
};

export type TIncludeExclude = {
  title: string;
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
  packageDate: string;
  createdAt: string;
  updatedAt: string;
  includes: TIncludeExclude[];
  excludes: TIncludeExclude[];
};

export type TUser = {
  id: string;
  username: string;
  email: string;
  contactNo: string;
  password: string;
  role: string;
  avatar: string | null;
  createdAt: string;
  updatedAt: string;
  userStatus: string;
};

export type TCustomer = {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  location: string | null;
  createdAt: string;
  updatedAt: string;
  user: TUser;
};

export type TTourBooking = {
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
  guests: TGuest[];
  vehicleBooking: TVehicleBooking;
  transactions: TTransaction;
  splitPayment: TSplitPayment;
  tourPackage: TTourPackage;
  customer: TCustomer;
};

export type TTourBookingResponse = {
  message: string;
  success: boolean;
  meta: TMeta;
  data: TTourBooking[];
};


export const tourBookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTourBookings: builder.query<TTourBookingResponse, {
      page: number;
      limit: number;
      "tourPackage.category"?: string;
    }>({
      query: (params) => ({
        url: '/tour-bookings',
        method: 'GET',
        params: {
          page: params.page,
          limit: params.limit,
          ...(params["tourPackage.category"] && { 
            "tourPackage.category": params["tourPackage.category"] 
          })
        }
      }),
      providesTags: [tagTypes.TourBookings],
    }),

    // ... other endpoints
  }),
});

export const { useGetAllTourBookingsQuery } = tourBookingApi;