import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IFilteredData, TInitialState } from 'types/filterData.interface';

import type { AppState } from '../../store';

/* проконсультироваться со смифейсом (как лучше поступить, 
доставать из объекта вэлью и фильтровать или же поодиночку) */

class Filter {
	constructor(public title: string, public value: string) {
		this.title = title;
		this.value = value;
	}
}

const initialState: TInitialState = [
	{ amount: 'asc' },
	{ category: '' },
	{ value: '' },
];

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		filterName: (state: any, action: PayloadAction<string>) => {
			state.transaction_name.filter((item: string) =>
				item
					.toLowerCase()
					.replace('-', '')
					.includes(action.payload.toLowerCase())
			);
		},
		filterAmount: (state: any, action: PayloadAction<string>) => {
			if (action.payload === 'asc') {
				return state.amount.sort(
					(a: string, b: string) => Number(a) - Number(b)
				);
			} else if (action.payload === 'desc') {
				return state.amount.sort(
					(a: string, b: string) => Number(b) - Number(a)
				);
			}
		},
		changeCategory: (state: any, action: PayloadAction<string>) => {
			state.category = action.payload;
		},
		filterVendor: (state: any, action: PayloadAction<string>) => {
			state.filtered.transaction_vendor.filter((item: string) =>
				item.toLowerCase().includes(action.payload.toLowerCase())
			);
		},
	},
});

export const { filterName, filterAmount, changeCategory, filterVendor } =
	filterSlice.actions;

export const selectFilter = (state: AppState) => state.filter;

export default filterSlice.reducer;
