import { createSlice } from '@reduxjs/toolkit';

const MarkersSlice = createSlice({
  name: 'markers',
  initialState: [],
  reducers: {
    addMarker(state, action) {
      console.log("addMarker()", state, action);
      state.push(action.payload);
      console.log("reducer", state);
    },
    removeMarker(state, action) {
      return state.filter(o => o.marker.id)
    },
    hideMaker(state, action) {

    },
    updateMarker(state, action) {

    }
  }

})


export const { addMarker, removeMarker, hideMaker, updateMarker } = MarkersSlice.actions;

export default MarkersSlice.reducer;