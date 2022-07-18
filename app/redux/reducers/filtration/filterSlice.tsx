import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IFilteredData, TInitialState } from 'types/filterData.interface';

import data from '../../../data/mock.json';
import type { AppState } from '../../store';

const initialState: TInitialState = [
	{ products: data },
	{ amount: 'asc' },
	{ category: '' },
	{ value: '' },
];

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

				return state.amount.sort(
					(a: string, b: string) => Number(a) - Number(b)
				);
			} else if (action.payload === 'desc') {
				state.amount === action.payload;

				return state.amount.sort(
					(a: string, b: string) => Number(b) - Number(a)
				);
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
});

export const { filterName, filterAmount, changeCategory, filterVendor } =
	filterSlice.actions;

export const selectFilter = (state: AppState) => state.filter;

export default filterSlice.reducer;
