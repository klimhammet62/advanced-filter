import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { TInitialState } from 'types/filterData.interface';

import quickSort from '@/utils/quicksort/quickSort';

import data from '../../../data/mock.json';
import type { AppState } from '../../store';
import store from '../../store';

const initialState: TInitialState = {
	products: data,
	amount: 'asc',
	category: '',
	value: '',
	status: 'idle',
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		filterName: (state: any, action: PayloadAction<string>) => {
			return state[0].transaction_name.filter((item: string) =>
				item
					.toLowerCase()
					.replace('-', '')
					.includes(action.payload.toLowerCase())
			);
		},
		filterAmount: (state: any, action: PayloadAction<string>) => {
			if (action.payload === 'asc') {
				state.amount === action.payload;

				let copyState = current(state);
				let copyStateProducts = copyState.products.map(
					(i: any) => (i = { ...i })
				);

				copyStateProducts.sort((a: any, b: any) => {
					return parseInt(a.amount.slice(1)) - parseInt(b.amount.slice(1));
				});

				copyState = { ...copyState, products: copyStateProducts };

				state.products = copyState.products;
			} else if (action.payload === 'desc') {
				state.amount === action.payload;

				let copyState = current(state);
				let copyStateProducts = copyState.products.map(
					(i: any) => (i = { ...i })
				);

				copyStateProducts.sort((a: any, b: any) => {
					return parseInt(b.amount.slice(1)) - parseInt(a.amount.slice(1));
				});

				copyState = { ...copyState, products: copyStateProducts };

				state.products = copyState.products;
			}
		},
		changeCategory: (state: any, action: PayloadAction<string>) => {
			state.category = action.payload;
			let copyState = current(state);
			let copyStateProducts = copyState.products.map(
				(i: any) => (i = { ...i })
			);
			const filteredCategories = copyStateProducts.filter(
				({ category }: { category: string }) => category === action.payload
			);

			copyState = { ...copyState, products: filteredCategories };

			state.products = copyState.products;
		},
		filterVendor: (state: any, action: PayloadAction<string>) => {
			return state.transaction_vendor.filter((item: string) =>
				item.toLowerCase().includes(action.payload.toLowerCase())
			);
		},
	},
	/* IF I WANT TO DEPLOY ON BACKEND extraReducers: (builder) => {
		builder
			.addCase(filterAmount.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(filterAmount.fulfilled, (state, action) => {
				state.status = 'idle';
				// state.obj.value += action.payload;
				state.products += action.payload;
			});
	}, */
});

export const { filterName, filterAmount, changeCategory, filterVendor } =
	filterSlice.actions;

export const selectFilter = (state: AppState) => state.filter;

export default filterSlice.reducer;
