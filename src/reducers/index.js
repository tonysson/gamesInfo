import { combineReducers } from 'redux';
import detailsReducer from './DetailsReducers';
import gamesReducer from './gamesReducers';




const rootReducer = combineReducers({
      games: gamesReducer,
      details : detailsReducer
});

export default rootReducer