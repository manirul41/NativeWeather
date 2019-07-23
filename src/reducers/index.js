import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


export function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}
export function updateArray(oldObject, newValues) {
  return Object.assign([], oldObject, newValues);
}

const rootReducer = combineReducers({
  form: formReducer
});

export default rootReducer;
