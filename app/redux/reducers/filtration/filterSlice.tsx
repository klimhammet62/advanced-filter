import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { slice } from 'lodash';
import { TInitialState } from 'types/filterData.interface';

import quickSort from '@/utils/quicksort/quickSort';

import data from '../../../data/mock.json';
import type { AppState } from '../../store';

const initialState: TInitialState = {
	products: data,
	amount: 'asc',
	category: '',
	value: '',
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
				state.category = 'asda';
				state.amount === action.payload;

				let copyState = JSON.parse(JSON.stringify(state));
				let copyStateProducts = copyState.products.map(
					(i: any) => (i = { ...i })
				);

				console.log(copyStateProducts.map((el: any) => el.amount));

				copyStateProducts.sort((a: any, b: any) => {
					return parseInt(a.amount.slice(1)) - parseInt(b.amount.slice(1));
				});
				console.log(copyStateProducts.map((el: any) => el.amount));

				// console.log(copyStateProducts.sort((a: any, b: any) => {
				// 	return parseInt(a.amount.slice(1)) - parseInt(b.amount.slice(1));
				// }).map((el: any) => el.amount));

				copyState = { ...copyState, products: copyStateProducts };
				console.log(copyState);

				state = copyState;
				console.log(state);
				// state.products = newItems;
				/* state = state.products.sort((a: any, b: any) => {
					parseInt(a.amount.slice(1)) - parseInt(b.amount.slice(1));
				}); */
			} else if (action.payload === 'desc') {
				state.amount === action.payload;

				/* return state.products.sort(
					(a: string, b: string) => Number(b) - Number(a)
				); */
			}
		},
		changeCategory: (state: any, action: PayloadAction<string>) => {
			state.category = action.payload;

			return state.category.filter((item: string) =>
				item
					.toLowerCase()
					.replace('-', '')
					.includes(action.payload.toLowerCase())
			);
		},
		filterVendor: (state: any, action: PayloadAction<string>) => {
			return state.transaction_vendor.filter((item: string) =>
				item.toLowerCase().includes(action.payload.toLowerCase())
			);
		},
	},
	extraReducers: (builder) => {
		// Дополнительные редьюсеры
		// При удалении поста нужно удалить все его комментарии
		builder.addCase(filterAmount, (state, action) => {
			state.setAll(state, restEntities);
		});
	},
});

export const { filterName, filterAmount, changeCategory, filterVendor } =
	filterSlice.actions;

export const selectFilter = (state: AppState) => state.filter;

export default filterSlice.reducer;
