import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ListingComponent from '../components/listing-comp';
import { fetchListing } from '../actions/fetch_listings_action';
import { clickedAddToCart } from '../actions/addtocart_action';

class ListingApp extends Component{
	constructor(props){
		super(props);
	}

	render(){
        console.log('this.props are-from container---  ',this.props);
		return(
			<div className ="list-app">
				<ListingComponent {...this.props}/>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		fetchListingData: state.fetchListingData,
		addToCartData: state.addToCartData
	}	
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchListing: fetchListing,clickedAddToCart: clickedAddToCart},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ListingApp);
