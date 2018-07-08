var SM = (function(){

	var _currentState = undefined,
		_listeners = [],
		_reducer = null,
		__init_action = '@@INIT/Action';

	function getState(){
		return _currentState;
	}

	function subscribe(listenerFn){
		_listeners.push(listenerFn);
	}

	function triggerChange(){
		_listeners.forEach(listenerFn => listenerFn());
	}

	function dispatch(action){
		let newState = _reducer(_currentState, action);
		if (newState === _currentState) return;
		_currentState = newState;
		triggerChange();
	}

	function createStore(reducer){
		_reducer = reducer;
		_currentState = _reducer(_currentState, __init_action);
		return { getState, subscribe, dispatch };
	}

	function bindActionCreators(actionCreators, dispatch){
		let result = {};
		for(let key in actionCreators){
			result[key] = function(){
				let action = actionCreators[key].apply(undefined, arguments);
				dispatch(action);
			}
		}
		return result;
	}

	return { createStore, bindActionCreators };

})();