import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import counterReducer from './reducers/counter/counterSlice';
import filterReducer from './reducers/filtration/filterSlice';

export function makeStore() {
	return configureStore({
		reducer: {
			counter: counterReducer,
			filter: filterReducer,
		},
	});
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action<string>
>;

export default store;
