function bugsReducer(currentState = [], action){
	if (action.type === 'LOAD'){
		return action.payload;
	}
	if (action.type === 'ADD_NEW'){
		let newBug = action.payload;
		let newState = [...currentState, newBug];
		return newState;
	}
	if (action.type === 'UPDATE'){
		let {oldBug, newBug} = action.payload;
		let newState = currentState.map(bug => bug.id === oldBug.id ? newBug : bug);
		return newState;
	}
	if (action.type === 'REMOVE'){
		let bugsToRemove = action.payload;
		let newState = currentState.filter(bug => bugsToRemove.indexOf(bug) === -1);
		return newState;
	}
	return currentState;
}
export default bugsReducer;