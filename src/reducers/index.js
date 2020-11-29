import { combineReducers } from 'redux'
import MarkersReducer from './Markers'
import AppReducer from './App';

export default combineReducers({
   markers: MarkersReducer,
   app: AppReducer,
});