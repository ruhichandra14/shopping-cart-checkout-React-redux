export default function(state=null,action){
	switch(action.type){
		case 'DECREMENT_QUANTITY':
			return action.payload + 1;
	}
	return state;
}