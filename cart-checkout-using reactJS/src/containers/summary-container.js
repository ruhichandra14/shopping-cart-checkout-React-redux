import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SummaryComponent from '../components/summary-comp';


class SummaryApp extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className ="gotocart-app">
				<SummaryComponent/>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		
	}	
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(SummaryApp);
