import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Notifications, {notify} from 'react-notify-toast';
import { Route, Link } from 'react-router';

import GoToCartApp from '../containers/gotocart-container';

export default class ListingComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {	
			cartValue: "Go To Cart"
		}
		this.clickedGoToCart = this.clickedGoToCart.bind(this);
	}


	componentWillMount() {
    	this.props.fetchListing(this.props.fetchListingData);
    	this.setState({cartValue:this.props.addToCartData? ("Go To Cart " + this.props.addToCartData.length):("Go To Cart")});
	}

	clickedAddToCartbutton(product,event){
		this.props.clickedAddToCart(product,event);

		let toastMsg = { background: '#bc8f8f', text: "#000" };
		notify.show(event.target.dataset.name + " product is added", "custom", 1000, toastMsg);

		this.setState({cartValue:this.props.addToCartData? ("Go To Cart " + this.props.addToCartData.length):("Go To Cart 1")})
	}


	clickedGoToCart(){
		//this.props.history.push(path);

	}



	render(){
		console.log("----------cccc----------",this.props.addToCartData);
		let count = 0;
		return(

			<div className = "Listing-Container">
			<Notifications />
			<h1 className="container-heading">All Items</h1>
			<hr/>
		
			<Link to = "/cart"><input type = "button" className="gotocart-btn" onClick={() => this.clickedGoToCart.bind(this)} value = {this.state.cartValue} /></Link>

			{(this.props.fetchListingData) && (
			<ul className = "product-list">
				{(this.props.fetchListingData)[0].map((product,count) => {
					count++;
					return(
						<li key={count} className="product-item"><img className="product-image" src={product.img_url}/><div className="product-discount">{product.discount}% off</div><div className="product-name">{product.name}</div><div className="product-price">{product.price}</div><input className={count === this.state.activeId? "clicked-addtocart-btn" : "product-addtocart-btn"} className="product-addtocart-btn" onClick={(event) => this.clickedAddToCartbutton(product,event)} type="button" value="Add To Cart" id={count} data-name={product.name} ref="clickBtn"/></li>
					)
				})}
				</ul>
				)}
			</div>
		)
	}
}