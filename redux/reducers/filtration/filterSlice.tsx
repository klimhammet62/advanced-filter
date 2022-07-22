import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { IFilteredData, TInitialState } from 'types/filterData.interface';

import data from '../../../data/mock.json';
import type { AppState } from '../../store';

// import quickSort from '@/utils/quicksort/quickSort' in future

const initialState: TInitialState = {
	products: data,
	filteredData: data,
	amount: '',
	category: '',
	value: '',
	status: 'idle',
	location: '',
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		filterName: (state: TInitialState, action: PayloadAction<string>) => {
			let copyState = current(state);
			let copyStateProducts = copyState.products.map(
				(i: IFilteredData) => (i = { ...i })
			);

			state.filteredData = copyStateProducts.filter(
				({
					transaction_name,
					transaction_vendor,
				}: {
					transaction_name: string;
					transaction_vendor: string;
				}) => {
					if (
						transaction_name
							.toLowerCase()
							.includes(action.payload.toLowerCase()) === true ||
						transaction_vendor
							.toLowerCase()
							.includes(action.payload.toLowerCase()) === true
					) {
						return transaction_name;
					}
				}
			);

			copyState = { ...copyState, filteredData: state.filteredData };
			state.filteredData = copyState.filteredData;
		},
		sortAmount: (state: TInitialState, action: PayloadAction<string>) => {
			state.amount = action.payload;

			if (action.payload === 'asc') {
				let copyState = current(state);
				let copyStateProducts = copyState.filteredData.map(
					(i: IFilteredData) => (i = { ...i })
				);

				state.filteredData = copyStateProducts.sort(
					({ amount }: { amount: string }) => {
						return parseInt(amount.slice(1)) - parseInt(amount.slice(1));
					}
				);

				copyState = { ...copyState, filteredData: state.filteredData };
				state.filteredData = copyState.filteredData;
			} else if (action.payload === 'desc') {
				let copyState = current(state);
				let copyStateProducts = copyState.filteredData.map(
					(i: IFilteredData) => (i = { ...i })
				);

				state.filteredData = copyStateProducts.sort(
					({ amount }: { amount: string }) => {
						return parseInt(amount.slice(1)) - parseInt(amount.slice(1));
					}
				);

				copyState = { ...copyState, filteredData: state.filteredData };
				state.filteredData = copyState.filteredData;
			}
		},
		changeCategory: (state: TInitialState, action: PayloadAction<string>) => {
			state.category = action.payload;

			let copyState = current(state);
			let copyStateProducts = copyState.filteredData.map(
				(i: IFilteredData) => (i = { ...i })
			);

			state.filteredData = copyStateProducts.filter(
				({ category }: { category: string }) => category === action.payload
			);

			copyState = { ...copyState, filteredData: state.filteredData };
			state.filteredData = copyState.filteredData;
		},
		filterLocation: (state: TInitialState, action: PayloadAction<string>) => {
			state.location = action.payload;

			let copyState = current(state);
			let copyStateProducts = copyState.filteredData.map(
				(i: IFilteredData) => (i = { ...i })
			);

			state.filteredData = copyStateProducts.filter(
				({ location }: { location?: string }) => location === action.payload
			);

			copyState = { ...copyState, filteredData: state.filteredData };
			state.filteredData = copyState.filteredData;
		},
	},
	/* IF I WANT TO DEPLOY ON BACKEND extraReducers: (builder) => {
		builder
			.addCase(sortAmount.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(sortAmount.fulfilled, (state, action) => {
				state.status = 'idle';
				// state.obj.value += action.payload;
				state.products += action.payload;
			});
	}, */
});

export const { filterName, sortAmount, changeCategory, filterLocation } =
	filterSlice.actions;

export const selectFilter = (state: AppState) => state.filter;

export default filterSlice.reducer;
