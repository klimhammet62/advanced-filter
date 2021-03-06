export interface IFilteredData {
	id: number;
	transaction_name: string;
	amount: string;
	category: string;
	transaction_vendor: string;
	location?: string;
}
export type TInitialState = {
	products: IFilteredData[];
	interimData: IFilteredData[];
	amount: string;
	category: string;
	value: string;
	status?: string;
	filteredData: IFilteredData[];
	location?: string;
};
export interface ISort {
	id: number;
	transaction_name: string;
	amount: string;
	category: string;
	transaction_vendor: string;
}
