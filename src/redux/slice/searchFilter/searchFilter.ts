import { TTourPackage } from "@/components/lib/types";
import { createSlice } from "@reduxjs/toolkit";

interface TTourPackageStore {
    tourPackageStore : TTourPackage[] | null
}


const initialState:TTourPackageStore = {
    tourPackageStore : null
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
        }
    } 
})



export const { addTourPackages, removeTourpackages } = searchQuery.actions;
export default searchQuery.reducer