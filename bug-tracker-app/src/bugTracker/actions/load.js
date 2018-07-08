import bugServer from '../services/bugServer';

function load(){
	return function(dispatch){
		console.log(arguments);
		bugServer
			.getAll()		
			.then(bugs => {
				let action = { type : 'LOAD', payload : bugs};
				dispatch(action);	
			});
	}
}

export default load;