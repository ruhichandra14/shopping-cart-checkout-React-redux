import * as types from '../constants/actionType';
let arr = [];

export function clickedAddToCart(product,event){
	arr.push(product);
	return{
		type:'CLICKED_ADDTOCART',
		payload:arr
	}
}

