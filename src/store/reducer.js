import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../components/header/store';
import { reducer as HomeReducer } from '../views/home/store';
const reducer = combineReducers({
	header: headerReducer,
	home: HomeReducer
});

export default reducer;