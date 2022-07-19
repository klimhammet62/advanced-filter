export default function quickSort(products: any): any {
	let amountArray = products.map((item: any) => item.amount);
	console.log(amountArray.length);

	if (amountArray.length <= 1) {
		return products;
	}

	const pivot = amountArray[amountArray.length - 1];
	const leftProducts = [];
	const rightProducts = [];

	for (let i = 0; i < amountArray.length - 1; i++) {
		if (amountArray[i] < pivot) {
			leftProducts.push(products[i]);
		} else {
			rightProducts.push(products[i]);
		}
	}

	products = [...quickSort(leftProducts), pivot, ...quickSort(rightProducts)];

	return products;
}
