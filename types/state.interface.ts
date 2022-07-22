export interface IStore {

}
export interface IProduct {
	id: number;
	transaction_name: string;
	amount: string;
	category: string;
	transaction_vendor: string;
}
export interface preloadedState {
	products?: [];
	counter: number | undefined;
}

export interface IInitialState {
	products?: IProduct[];
	counter: number | undefined;
}
