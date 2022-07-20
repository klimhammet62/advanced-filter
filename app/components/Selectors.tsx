import React from 'react';
import { changeCategory, filterAmount } from 'redux/reducers/filtration/filterSlice';

import { MultiSelect } from './ui/MultiSelect';

export const Selectors = () => {
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
				defaultValue={'Select category'}
				selectFunction={changeCategory}
			/>
			<MultiSelect
				array={['asc', 'desc']}
				defaultValue={'Sort products'}
				selectFunction={filterAmount}
			/>
		</>
	);
};
