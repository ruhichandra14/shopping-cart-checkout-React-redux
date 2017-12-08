import { combineReducers } from 'redux';
import fetchListingDataReducer from './reducer_fetch_listing';
import addToCartReducer from './reducer_addtocart';

const rootReducer = combineReducers ({
	fetchListingData : fetchListingDataReducer,
	addToCartData : addToCartReducer 
});

export default rootReducer;

