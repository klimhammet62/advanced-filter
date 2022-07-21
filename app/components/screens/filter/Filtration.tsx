import { nanoid } from 'nanoid';
import Link from 'next/link';
import { useState } from 'react';
import {
	changeCategory,
	filterAmount,
	selectFilter,
} from 'redux/reducers/filtration/filterSlice';

import { ProductCards } from '@/components/ProductCards';
import { Selectors } from '@/components/Selectors';
import Heading from '@/components/ui/Heading';
import { MultiSelect } from '@/components/ui/MultiSelect';
import { Redirect } from '@/components/ui/Redirect';
import { Button } from '@/components/ui/button';
import { SearchInput } from '@/components/ui/searchInput';

import { useAppSelector } from '@/hooks/redux';

export const Filtration = () => {
	const data = useAppSelector(selectFilter);

	return (
		<div
			className="w-full flex flex-col justify-center items-center dark:bg-slate-800  
        text-black text-opacity-80 font-semibold dark:text-white"
		>
			<Heading title="Filtration" />
			<div className="flex flex-row items-center">
				<div className="flex flex-row items-center m-12">
					<SearchInput />
					<Button />
				</div>
				<Selectors />
			</div>
			<label className="form-label inline-block mb-2 text-gray-700 dark:text-white">
				Filterred Data
			</label>
			<h1>
				{'Category: '}
				{data.category}
			</h1>
			<ProductCards />
			<Redirect text="Redirect to Home" link="" />
		</div>
	);
};
