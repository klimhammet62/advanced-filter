import Link from 'next/link';
import { selectFilter } from 'redux/reducers/filtration/filterSlice';

import Heading from '@/components/ui/Heading';
import { MultiSelect } from '@/components/ui/MultiSelect';
import { Button } from '@/components/ui/button';
import { SearchInput } from '@/components/ui/searchInput';

import { useAppSelector } from '@/hooks/redux';

import data from '../../../data/mock.json';

export const Filtration = () => {
	const filter = useAppSelector(selectFilter);

	return (
		<div
			className="w-full h-screen flex flex-col justify-center items-center dark:bg-slate-800  
        text-black text-opacity-80 font-semibold dark:text-white"
		>
			<Heading title="Filtration" />
			<div className="flex flex-row items-center">
				<div className="flex flex-row items-center m-12">
					<SearchInput />
					<Button />
				</div>
				<MultiSelect
					array={data.map((item) => item.category)}
					defaultValue={Object.values(filter[2])}
				/>
				<MultiSelect array={['asc', 'desc']} />
			</div>
			<label className="form-label inline-block mb-2 text-gray-700 dark:text-white">
				Filterred Data
			</label>
			<div className="grid grid-cols-4 gap-5">
				{data.splice(0, 20).map((item: any) => (
					<ul
						key={item.id}
						className="dark:bg-white dark:hover:bg-gray-400 rounded-[15px] bg-white
						text-black text-center hover:bg-gray-400 dark:hover:text-white cursor-pointer p-2"
					>
						<li>{item.transaction_name}</li>
						<li>{item.amount}</li>
						<li>{item.category}</li>
						<li>{item.transaction_vendor}</li>
					</ul>
				))}
			</div>

			<Link href="/">
				<h2
					className="cursor-pointer hover:text-gray-300 dark:text-white dark:hover:text-orange-300
					p-3 bg-slate-500 rounded-md m-2 hover:bg-sky-700
					"
				>
					Redirect to Home
				</h2>
			</Link>
		</div>
	);
};
