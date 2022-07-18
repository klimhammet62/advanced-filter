export interface IFilteredData {
	transaction_name: string;
	amount: string;
	category: string;
	transaction_vendor: string;
}
export type TInitialState = [
	{ amount: string },
	{ category: string },
	{ value: string }
];
