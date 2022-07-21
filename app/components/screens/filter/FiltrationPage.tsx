import { selectFilter } from 'redux/reducers/filtration/filterSlice';

import { ProductCards } from '@/components/ProductCards';
import Heading from '@/components/ui/Heading';
import { Redirect } from '@/components/ui/Redirect';

import { useAppSelector } from '@/hooks/redux';

import { FiltrationForm } from './FiltrationForm';

export const FiltrationPage = () => {
	const data = useAppSelector(selectFilter);

	return (
		<div
			className="w-full flex flex-col justify-center items-center   
        text-black text-opacity-80 font-semibold dark:text-white"
		>
			<Heading title="Filtration" />
			<FiltrationForm />
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
