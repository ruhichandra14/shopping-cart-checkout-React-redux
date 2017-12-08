export default function(state=null,action){
	switch(action.type){
		case 'CLICKED_ADDTOCART':
			return action.payload
	}
	return state;
}