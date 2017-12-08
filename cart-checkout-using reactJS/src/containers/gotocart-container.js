import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GoToCartComponent from '../components/gotocart-comp';


class GoToCartApp extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className ="gotocart-app">
				<GoToCartComponent {...this.props}/>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		addToCartData:state.addToCartData
	}	
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(GoToCartApp);
