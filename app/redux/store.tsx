import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import filterReducer from './reducers/filtration/filterSlice';
import goodsReducer from './reducers/goods/goodsSlice';

export function makeStore() {
	return configureStore({
		reducer: {
			goods: goodsReducer,
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
