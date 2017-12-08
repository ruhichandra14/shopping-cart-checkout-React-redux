export default function(state=null,action){
	switch(action.type){
		case 'INCREMENT_QUANTITY':
			return action.payload - 1;
	}
	return state;
}