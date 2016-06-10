import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer} from 'redux-form';
import cards from './cards';
import score from './score';
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({cards, score, visibilityFilter, form: formReducer, routing: routerReducer});

export default rootReducer;