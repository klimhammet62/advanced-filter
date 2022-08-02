import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { IFilteredData, TInitialState } from 'types/filterData.interface';



import data from '../../../mocks/mock.json';
import type { AppState } from '../../store';


// import quickSort from '@/utils/quicksort/quickSort' in future

const initialState: TInitialState = {
	products: data,
	interimData: data,
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
			state.interimData = copyStateProducts;
			state.filteredData = state.interimData.filter(
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
						return transaction_name && transaction_vendor;
					}
				}
			);
		},
		sortAmount: (state: TInitialState, action: PayloadAction<string>) => {
			state.amount = action.payload;

			if (action.payload === 'asc') {
				let copyStateFiltredData = current(state.filteredData);
				let copyStateProducts = copyStateFiltredData.map(
					(i: IFilteredData) => (i = { ...i })
				);

				state.filteredData = state.interimData.sort(
					(a: { amount: string }, b: { amount: string }) => {
						return parseInt(a.amount.slice(1)) - parseInt(b.amount.slice(1));
					}
				);
			} else if (action.payload === 'desc') {
				let copyStateFiltredData = current(state.filteredData);
				let copyStateProducts = copyStateFiltredData.map(
					(i: IFilteredData) => (i = { ...i })
				);

				state.filteredData = state.interimData.sort(
					(a: { amount: string }, b: { amount: string }) => {
						return parseInt(b.amount.slice(1)) - parseInt(a.amount.slice(1));
					}
				);
			}
		},
		changeCategory: (state: TInitialState, action: PayloadAction<string>) => {
			state.category = action.payload;

			let copyState = current(state);
			let copyStateProducts = copyState.filteredData.map(
				(i: IFilteredData) => (i = { ...i })
			);

			state.filteredData = state.interimData.filter(
				({ category }: { category: string }) => category === action.payload
			);
		},
		filterLocation: (state: TInitialState, action: PayloadAction<string>) => {
			state.location = action.payload;
			let copyStateFilteredData = current(state.products);
			let copyStateProducts = copyStateFilteredData.map(
				(i: IFilteredData) => (i = { ...i })
			);
			state.filteredData = state.interimData.filter(
				({ location }: { location?: string }) => location === action.payload
			);
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