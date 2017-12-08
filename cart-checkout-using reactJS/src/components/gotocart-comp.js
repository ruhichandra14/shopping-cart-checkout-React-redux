import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router';


export default class GoToCartComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {	
		}
	}

	render(){
		let selectedProductsDOM;
		let count = 0;
		let prodId = 0;
		let obj = {};
		let itemDetails ;
		let total = 0;
		let selectedProducts = this.props.addToCartData;

		if(selectedProducts){
			{selectedProducts.map(function(product) {
				product["quantity"] = 1;

				if(obj[product["name"]]){
					count++;
				}
				else{
					count =1;
				}
				obj[product["name"]] = [count,product["price"]];
			})}

			selectedProductsDOM = 
			<div className = "product-summary-section">
				<ul className = "selected-list">
					{Object.keys(obj).sort().map((item) => {
						prodId++;
						total += obj[item][0]*obj[item][1];
						return(
							<li key = {prodId} className = "selected-item">
								<span className="item-details">{item}</span>
								<span className="item-details">{obj[item][0]}</span>
								<span className="item-details">{obj[item][1]}</span>
							</li>
						)
					})}
					
				</ul>
				<Link to = "/success"><input type = "button" className="buy-now-btn btn" value = "BUY NOW" /></Link>
				<div className ="result-container">Total  {total}</div>
				</div>
		}
		else{
			selectedProductsDOM = <h3 className = "no-summary">No Products Found :(</h3>
		}

		return(
			<div className = "gotocart-container">
				<h1 className = "container-heading">Cart Page</h1>
				<hr/>
				<div>{selectedProductsDOM}</div>
			</div>
			)
		}
	}