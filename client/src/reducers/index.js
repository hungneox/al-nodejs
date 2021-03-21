import { combineReducers } from 'redux';
import DocsReducer from './DocsReducer';

const rootReducer = combineReducers({
  docs: DocsReducer,
});

export default rootReducer;
