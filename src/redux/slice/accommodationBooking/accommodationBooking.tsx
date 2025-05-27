import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TAcommodationStayBooking {
    checkInDate: string,
    checkOutDate: string,
    numberOfGuests: number,
    roomType: string,
}

interface TGustDatailsOne {
fullName: string  
isAdult : boolean
email: string
age: number
contactNo: string
requestMessage?: string
}


interface TGustDatailsTwo {
fullName: string  
isAdult : boolean
email: string
age: number
contactNo: string
requestMessage?: string 
}


interface TGustDatailsThree {
  fullName: string  
  isAdult : boolean
  email: string
  age: number
  contactNo: string
  requestMessage?: string
}

// packages id 
interface THotelpackagesId {
  hotelPackageId: string,   
}








interface BookingState {
  acommodationStayBooking: TAcommodationStayBooking | null;
  accommodationGustDatailsOne: TGustDatailsOne | null
  accommodationGustDatailsTwo: TGustDatailsTwo | null
  accommodationGustDatailsThree: TGustDatailsThree | null
  hotelPackageId : THotelpackagesId | null
}

const initialState:BookingState = {
    acommodationStayBooking: null,
    accommodationGustDatailsOne: null,
    accommodationGustDatailsTwo: null,
    accommodationGustDatailsThree : null,
    hotelPackageId: null
}

const booking = createSlice({
  name:'accommodationBooking',
  initialState,
  reducers: {
    setAcommodationStayBooking(state, action: PayloadAction<TAcommodationStayBooking>) {
      state.acommodationStayBooking = action.payload;
    },
    clearAcommodationStayBookingDatails(state) {
      state.acommodationStayBooking = null;
    },

    setHotelPackageseId(state, action) {
        state.hotelPackageId = action.payload
    },



    // gust datails one action 
    setaccommodationGustDatailsOne(state, action:PayloadAction<TGustDatailsOne>){
      state.accommodationGustDatailsOne = action.payload
    },
    clearGustDatailsOne(state){
      state.accommodationGustDatailsOne= null
    },

    // gust datails two action 
    setaccommodationGustDatailsTwo(state, action:PayloadAction<TGustDatailsTwo>){
      state.accommodationGustDatailsTwo = action.payload
    },
    clearGustDatailsTwo(state){
      state.accommodationGustDatailsTwo= null
    },
    // gust Datails Three action 
     setaccommodationGustDatailsThree(state, action:PayloadAction<TGustDatailsThree>){
      state.accommodationGustDatailsThree = action.payload
    },
    clearGustDatailsThree(state){
      state.accommodationGustDatailsThree= null
    },
  },
});




export const { setAcommodationStayBooking, setHotelPackageseId, setaccommodationGustDatailsOne, setaccommodationGustDatailsTwo, setaccommodationGustDatailsThree } = booking.actions;
export default booking.reducer;





