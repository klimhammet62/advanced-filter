/* eslint-disable default-param-last */
import { combineReducers } from 'redux';

import * as types from '../actions/actionTypes';

// COUNTER REDUCER
const counterReducer = (state = 0, { type }: any) => {
	switch (type) {
		case types.INCREMENT:
			return state + 1;
		case types.DECREMENT:
			return state - 1;
		default:
			return state;
	}
};

// COMBINED REDUCERS
const reducers = {
	counter: counterReducer,
};

export default combineReducers(reducers);
