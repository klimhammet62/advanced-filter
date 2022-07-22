import { ISort } from 'types/filterData.interface';

export default function quickSort(products: ISort[]): ISort[] {
	const amountArray = products.map(({ amount }: { amount: string }) => amount);
	if (amountArray.length <= 1) {
		return products;
	}

	let pivot = products[0];

	const leftProducts = [];
	const rightProducts = [];

	for (let i = 0; i < amountArray.length - 1; i++) {
		console.log(amountArray[i].slice(1));
		if (amountArray[i].replace('$', '') < pivot.amount.slice(1)) {
			leftProducts.push(products[i]);
		} else {
			rightProducts.push(products[i]);
		}
	}
	return [...quickSort(leftProducts), pivot, ...quickSort(rightProducts)];
}
