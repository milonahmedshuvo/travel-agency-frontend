import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TBookingSelectTourDate {
    tourName: string,
    date: string,
    duration: number,
    groupSize: number,
    dataConsent: boolean,
    termsConsent: boolean,
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
age: string ;
consent: boolean;
email: string;
fullName: string;
guestType : string;
phoneNumber: string | number 
specialRequests: string 
}




interface BookingState {
  bookingSelectTourDate: TBookingSelectTourDate | null;
  gustDatailsOne: TGustDatailsOne | null
  gustDatailsTwo: TGustDatailsTwo | null
  gustDatailsThree: TGustDatailsThree | null
}

const initialState:BookingState = {
    bookingSelectTourDate: null,
    gustDatailsOne: null,
    gustDatailsTwo: null,
    gustDatailsThree : null
}

const booking = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setBookingSelectTourDateDatails(state, action: PayloadAction<TBookingSelectTourDate>) {
      state.bookingSelectTourDate = action.payload;
    },
    clearBookingSelectTourDateDatails(state) {
      state.bookingSelectTourDate = null;
    },

    // gust datails one action 
    setGustDatailsOne(state, action:PayloadAction<TGustDatailsOne>){
      state.gustDatailsOne = action.payload
    },
    clearGustDatailsOne(state){
      state.gustDatailsOne= null
    },

    // gust datails two action 
    setGustDatailsTwo(state, action:PayloadAction<TGustDatailsTwo>){
      state.gustDatailsTwo = action.payload
    },
    clearGustDatailsTwo(state){
      state.gustDatailsTwo= null
    },
    // gust Datails Three action 
     setGustDatailsThree(state, action:PayloadAction<TGustDatailsThree>){
      state.gustDatailsThree = action.payload
    },
    clearGustDatailsThree(state){
      state.gustDatailsThree= null
    },
  },
});

export const { setBookingSelectTourDateDatails, clearBookingSelectTourDateDatails, setGustDatailsOne, setGustDatailsTwo, setGustDatailsThree } = booking.actions;
export default booking.reducer;





