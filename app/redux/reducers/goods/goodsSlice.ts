import {
	PayloadAction,
	createAsyncThunk,
	createSlice,
	current,
} from '@reduxjs/toolkit';
import { useEffect } from 'react';

import example from '../../../../public/exampleData.json';
import type { AppState } from '../../store';

import { fetchGoods } from './counterAPI';

type TObj = {
	id: number;
	value: number;
	title: string;
};
type TExample = {
	title: string;
	name: string;
	characteristic: string;
	numbers: string;
};
type TItems = {
	title: string;
	name: string;
	characteristic: string;
	numbers: string;
};
type TFilterSettings = {
	byTitle: string;
	byName: string;
	byValue: string;
};
export interface GoodsState {
	obj: TObj[];
	example: TExample[];
	interimData: TExample[];
	productsArray: TExample[];
	breadScrumbs: string;
	items: TItems;
	filterSettings: TFilterSettings;
	// value: number;
	status: 'idle' | 'loading' | 'failed';
}

const initialState: GoodsState = {
	obj: [
		{
			id: 1,
			value: 1,
			title: 'zxc',
		},
	],
	breadScrumbs: '',
	filterSettings: {
		byTitle: '',
		byName: '',
		byValue: '',
	},
	items: {
		title: '',
		name: '',
		characteristic: '',
		numbers: '',
	},
	example: example,
	interimData: [],
	productsArray: [],
	status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
	'goods/fetchGoods',
	async (amount: number) => {
		const response = await fetchGoods(amount);
		// The value we return becomes the `fulfilled` action payload
		return response.data;
	}
);

export const goodsSlice = createSlice({
	name: 'goods',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		increment: (state: any) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			// state.value += 1;
			// state.obj.value += 1;
			state.obj[0].value += 1;
		},
		decrement: (state: any) => {
			// state.value -= 1;
			// state.obj.value -= 1;
			state.obj[0].value -= 1;
		},
		// Use the PayloadAction type to declare the contents of `action.payload`
		incrementByAmount: (state: any, action: PayloadAction<number>) => {
			// state.obj.value += action.payload;
			state.obj[0].value += action.payload;
		},
		swap: (state: any) => {
			// let copyState = JSON.parse(JSON.stringify(state));
			/* // copyState = copyState.map(i => {...i}); */
			// const newItems = sort() // proxy[];
			// state= copyState
		},
		filterTitle: (state: any, action: PayloadAction<string>) => {
			state.filterSettings.byTitle = action.payload;
			let copyState = current(state.example);
			let copyStateProducts = copyState.map((i: any) => (i = { ...i }));

			state.interimData = copyStateProducts;
			console.log(state.goods);

			state.productsArray = state.interimData.filter(
				(item: { title: string }) => {
					if (
						item.title.toLowerCase().includes(action.payload.toLowerCase()) ===
						true
					) {
						return item;
					}
				}
			);
			/* let copyState = current(state);
			let copyStateProducts = copyState.example.map((i: any) => (i = { ...i }));

			state.filteredData = copyStateProducts.filter(
				({ title }: { title: string }) => {
					if (
						title.toLowerCase().includes(action.payload.toLowerCase()) === true
					) {
						return title;
					}
				}
			);

			copyState = { ...copyState, filteredData: state.filteredData };
			state.filteredData = copyState.filteredData; */
		},
		filterArray: (state: any, action: PayloadAction<string>) => {
			if (state.filterSettings.byTitle === '') {
			} else if (state.filterSettings.byName === '') {
			} else if (state.filterSettings.byValue === '') {
			}
		},
		filterByValue: (state: any, action: PayloadAction<string>) => {
			let copyState = current(state.example);
			let copyStateProducts = copyState.map((i: any) => (i = { ...i }));
			state.interimData = copyStateProducts;

			let splitValue = action.payload.split('-');

			if (parseInt(splitValue[0]) > -1 && parseInt(splitValue[1]) < 20) {
				state.productsArray = state.interimData.filter(
					({ numbers }: { numbers: string }) => parseInt(numbers) < 20
				);
			} else if (
				parseInt(splitValue[0]) >= 20 &&
				parseInt(splitValue[1]) < 50
			) {
				state.productsArray = state.interimData.filter(
					({ numbers }: { numbers: string }) =>
						parseInt(numbers) < 50 && parseInt(numbers) >= 20
				);
			} else if (parseInt(splitValue[0]) >= 50) {
				state.productsArray = state.interimData.filter(
					({ numbers }: { numbers: string }) => parseInt(numbers) >= 50
				);
			}
			state.filterSettings.byValue = action.payload;
			/* copyStateProducts.filter((item: any) => {
				state.filterSettings.byValue < item.numbers;
			}); */
		},
		filterByName: (state: any, action: PayloadAction<string>) => {
			let copyState = current(state);
			let copyStateProducts = copyState.example.map((i: any) => (i = { ...i }));

			state.filterSettings.byName = action.payload;

			copyStateProducts.filter((item: any) => {
				state.filterSettings.byName == item.name;
			});
		},
		productPage: (state: any, action: PayloadAction<TExample>) => {
			state.items = action.payload;
		},
		// The `extraReducers` field lets the slice handle actions defined elsewhere,
		// including actions generated by createAsyncThunk or in other slices.
	},
});

export const {
	increment,
	decrement,
	incrementByAmount,
	swap,
	filterTitle,
	productPage,
	filterByValue,
	filterByName,
} = goodsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectGoods = (state: AppState) => state.goods.obj;
export const selectExample = (state: AppState) => state.goods.example;
export const selectSettings = (state: AppState) => state.goods.filterSettings;
export const selectItems = (state: AppState) => state.goods.items;
export const selectProducts = (state: AppState) => state.goods.productsArray;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
/* export const incrementIfOdd =
	(amount: number): AppThunk =>
	(dispatch, getState) => {
		const currentValue = selectCount(getState());
		if (currentValue % 2 === 1) {
			dispatch(incrementByAmount(amount));
		}
	}; */

export default goodsSlice.reducer;
