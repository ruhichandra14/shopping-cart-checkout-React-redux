import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router';


export default class SummaryComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {	
		}
	}

	render(){
		return(
			<div className = "summary-container">
				<h1 className = "container-heading">Summary</h1>
				<p className = "msg">Thanks for Shopping !!</p>
			</div>
			)
		}
	}