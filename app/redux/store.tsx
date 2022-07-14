import { useMemo } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { IInitialState, preloadedState } from '../types/state.interface';

import combineReducers from './reducers/reducers';

let store: any = {};

function initStore(initialState: IInitialState) {
	return createStore(
		combineReducers,
		initialState,
		composeWithDevTools(applyMiddleware(thunkMiddleware))
	);
}

export const initializeStore = (preloadedState: preloadedState) => {
	let initialStore = store ?? initStore(preloadedState);

	// After navigating to a page with an initial Redux state, merge that state
	// with the current state in the store, and create a new store
	if (preloadedState && store) {
		initialStore = initStore({
			...store.getState(),
			...preloadedState,
		});
		// Reset the current store
		store = undefined;
	}

	// For SSG and SSR always create a new store
	if (typeof window === 'undefined') {
		return initialStore;
	}
	// Create the store once in the client
	if (!store) store = initialStore;

	return initialStore;
};

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export function useStore(initialState: preloadedState) {
	return useMemo(() => initializeStore(initialState), [initialState]);
}
