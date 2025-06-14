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
  fullName: string  
  isAdult : boolean
  email: string
  age: number
  contactNo: string
  requestMessage?: string
}




//Room booking payment data store
interface TRoomBookingPayment {
    clientSecret : string;
    amount : number;
}

interface TTourBookingPayment {
    clientSecret : string;
    amount : number;
}

interface TTourBookingEightyPayment {
    clientSecret : string;
    amount : number;
}




interface BookingState {
  bookingSelectTourDate: TBookingSelectTourDate | null;
  gustDatailsOne: TGustDatailsOne | null
  gustDatailsTwo: TGustDatailsTwo | null
  gustDatailsThree: TGustDatailsThree | null
  roomBookingPayment : TRoomBookingPayment | null
  tourBookingPayment : TTourBookingPayment | null
  tourBookingEightyPayment : TTourBookingEightyPayment | null

  // Room Booking id without payment 
  roomBookingId : string | null
  tourBookingId : string | null
}

const initialState:BookingState = {
    bookingSelectTourDate: null,
    gustDatailsOne: null,
    gustDatailsTwo: null,
    gustDatailsThree : null,
    roomBookingPayment: null,
    tourBookingPayment : null,
    tourBookingEightyPayment: null,

    // Room Booking id without payment 
    roomBookingId : null,
    tourBookingId : null
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


    // Room booking payment 
    setRoomBookingPayment(state, action:PayloadAction<TRoomBookingPayment>) {
      state.roomBookingPayment = action.payload
    },
    clearRoomBoookingPayment(state) {
      state.roomBookingPayment = null
    },


     // Tour booking payment 
    setTourBookingPayment(state, action:PayloadAction<TRoomBookingPayment>) {
      state.tourBookingPayment = action.payload
    },
    clearTourBoookingPayment(state) {
      state.tourBookingPayment = null
    },





    // Tour booking payment final 80%  
    setTourBookingEightyPayment(state, action:PayloadAction<TRoomBookingPayment>) {
      state.tourBookingEightyPayment = action.payload
    },
    clearTourBoookingEightyPayment(state) {
      state.tourBookingEightyPayment = null
    },





   // Room Booking id without payment 
   setRoomBookingId(state, action){
    state.roomBookingId = action.payload
   },
   clearRoomBookingId(state){
    state.roomBookingId = null
   },


   setTourBookingId (state, action){
    state.tourBookingId = action.payload
   },
   clearhotelPackagesId(state) {
    state.tourBookingId = null
   }






  },
});

export const { setBookingSelectTourDateDatails, clearBookingSelectTourDateDatails, setGustDatailsOne, setGustDatailsTwo, setGustDatailsThree, setRoomBookingId, setRoomBookingPayment, setTourBookingId, setTourBookingPayment, setTourBookingEightyPayment } = booking.actions;
export default booking.reducer;





