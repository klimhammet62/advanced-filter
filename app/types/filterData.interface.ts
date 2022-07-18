export interface IFilteredData {
	id: number;
	transaction_name: string;
	amount: string;
	category: string;
	transaction_vendor: string;
}
export type TInitialState = [
	{ products: IFilteredData[] },
	{ amount: string },
	{ category: string },
	{ value: string }
];
