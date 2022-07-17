import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IFilteredData } from 'types/filterData.interface';

import type { AppState } from '../../store';

/* проконсультироваться со смифейсом (как лучше поступить, 
доставать из объекта вэлью и фильтровать или же поодиночку) */

export interface ProductState {
	transaction_name: string;
	amount: string;
	category: string;
	transaction_vendor: string;
}

const initialState: ProductState = {
	transaction_name: '',
	amount: '',
	category: '',
	transaction_vendor: '',
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		filterName: (state: string, action: PayloadAction<string>) => {
			state.transaction_name.filter((item: string) =>
				item
					.toLowerCase()
					.replace('-', '')
					.includes(action.payload.toLowerCase())
			);
		},
		filterAmount: (state: string, action: PayloadAction<string>) => {
			if (action.payload === 'asc') {
				return state.amount.sort(
					(a: string, b: string) => Number(a) - Number(b)
				);
			} else {
				return state.amount.sort(({ a, b }: any) => b - a);
			}
		},
		changeCategory: (state: string, action: PayloadAction<string>) => {
			state.category = action.payload;
		},
		filterVendor: (state: string, action: PayloadAction<string>) => {
			state.transaction_vendor.filter((item: string) =>
				item.toLowerCase().includes(action.payload.toLowerCase())
			);
		},
	},
});

export const { filterName, filterAmount, changeCategory, filterVendor } =
	filterSlice.actions;

export const selectCount = (state: AppState) => state.counter.value;

export default filterSlice.reducer;
