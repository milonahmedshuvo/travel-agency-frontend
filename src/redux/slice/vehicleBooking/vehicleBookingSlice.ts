// redux/vehicleBookingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pickUpAddr: '',
  pickUpDate: '',
  pickUpTime: '',
  vehicleType: '',
  duration: 0,
  restaurant: '',
  address: '',
  expTimeSty: '',
  sameCarReturn: false,
  dropOffAddr: '',
  needsAdditionalStops: false,
  tourPackageVehicleId: '',
  customerId: '',

  // tour packages id 
  tourPackageId: ''

};

const vehicleBookingSlice = createSlice({
  name: 'vehicleBooking',
  initialState,
  reducers: {
    setPickUpAddr: (state, action) => {
      state.pickUpAddr = action.payload;
    },
    setPickUpDate: (state, action) => {
      state.pickUpDate = action.payload;
    },
    setPickUpTime: (state, action) => {
      state.pickUpTime = action.payload;
    },
    setVehicleType: (state, action) => {
      state.vehicleType = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setExpTimeSty: (state, action) => {
      state.expTimeSty = action.payload;
    },
    setSameCarReturn: (state, action) => {
      state.sameCarReturn = action.payload;
    },
    setDropOffAddr: (state, action) => {
      state.dropOffAddr = action.payload;
    },
    setNeedsAdditionalStops: (state, action) => {
      state.needsAdditionalStops = action.payload;
    },
    setTourPackageVehicleId: (state, action) => {
      state.tourPackageVehicleId = action.payload;
    },
    setCustomerId: (state, action) => {
      state.customerId = action.payload;
    },
    // tour packages id 
    setTourPackageId: (state, action) => {
      state.tourPackageId = action.payload;
    },


    resetVehicleBooking: () => initialState
  }
});



export const {
  setPickUpAddr,
  setPickUpDate,
  setPickUpTime,
  setVehicleType,
  setDuration,
  setRestaurant,
  setAddress,
  setExpTimeSty,
  setSameCarReturn,
  setDropOffAddr,
  setNeedsAdditionalStops,
  setTourPackageVehicleId,
  setCustomerId,
  resetVehicleBooking
} = vehicleBookingSlice.actions;



export default vehicleBookingSlice.reducer;
