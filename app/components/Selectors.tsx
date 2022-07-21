import {
	changeCategory,
	selectFilter,
	sortAmount,
} from 'redux/reducers/filtration/filterSlice';

import { useAppSelector } from '@/hooks/redux';

import { MultiSelect } from './ui/MultiSelect';

export const Selectors = () => {
	const data = useAppSelector(selectFilter);

	return (
		<>
			<MultiSelect
				array={[
					'Baby',
					'Grocery',
					'Industrial',
					'Shoes',
					'Movies',
					'Toys',
					'Kids',
					'Games',
					'Health',
					'Books',
					'Garden',
					'Clothing',
					'Home',
					'Tools',
					'Sports',
					'Automotive',
					'Music',
					'Electronics',
				]}
				defaultValue="Select category"
				selectFunction={changeCategory}
				selectedValue={data.category}
			/>
			<MultiSelect
				array={['asc', 'desc']}
				defaultValue="Sort products"
				selectFunction={sortAmount}
				selectedValue={data.amount}
			/>
		</>
	);
};
