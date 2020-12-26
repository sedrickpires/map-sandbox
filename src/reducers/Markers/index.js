import { createSlice } from '@reduxjs/toolkit';

const MarkersSlice = createSlice({
  name: 'markers',
  initialState: [],
  reducers: {
    addMarker(state, action) {
      state.push(action.payload);
    },
    removeMarker(state, action) {
      const { payload: { id } } = action;
      return state.filter(o => o.id !== id )
    },
    toggleMakerVisible(state, action) {
      const { payload: { id } } = action;
      const markerIndex = state.findIndex(o => o.id === id);
      if (markerIndex >= 0) {
         state[markerIndex].visible = !(state[markerIndex].visible);
      }
    },
    updateMarker(state, action) {

    }
  }

})


export const { addMarker, removeMarker, toggleMakerVisible, updateMarker } = MarkersSlice.actions;

export default MarkersSlice.reducer;