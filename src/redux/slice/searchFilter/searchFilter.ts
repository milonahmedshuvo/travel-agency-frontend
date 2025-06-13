import { THotelPackage, TTourPackage } from "@/components/lib/types";
import { createSlice } from "@reduxjs/toolkit";

interface TTourPackageStore {
    tourPackageStore : TTourPackage[] | null
    hotelPackageStore: THotelPackage[] | null
}

const initialState:TTourPackageStore = {
    tourPackageStore : null,
    hotelPackageStore : null
}



export const searchQuery = createSlice({
    name: 'searchQuery',
    initialState,
    reducers : {
        addTourPackages(state, action){
            state.tourPackageStore = action.payload
        },
        removeTourpackages(state){
            state.tourPackageStore = null
        },


        addHotelPackages(state, action){
            state.hotelPackageStore = action.payload
        },
        removeHotelPackages(state){
            state.hotelPackageStore = null
        }
    } 
})



export const { addTourPackages, removeTourpackages, addHotelPackages, removeHotelPackages } = searchQuery.actions;
export default searchQuery.reducer