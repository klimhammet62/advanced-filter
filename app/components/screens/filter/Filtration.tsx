import { nanoid } from 'nanoid';
import Link from 'next/link';
import { useState } from 'react';
import { selectFilter } from 'redux/reducers/filtration/filterSlice';



import Heading from '@/components/ui/Heading';
import { MultiSelect } from '@/components/ui/MultiSelect';
import { Button } from '@/components/ui/button';
import { SearchInput } from '@/components/ui/searchInput';



import { useAppSelector } from '@/hooks/redux';



import quickSort from '../../../utils/quicksort/quickSort';


export const Filtration = () => {
	const filter = useAppSelector(selectFilter);
	const [page, setPage] = useState(1);
	const data = filter;
	console.log(data.products);

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
				<MultiSelect

					defaultValue={'data.amount'}
				/>
				<MultiSelect array={['asc', 'desc']} defaultValue={'ads'} />
			</div>
			<label className="form-label inline-block mb-2 text-gray-700 dark:text-white">
				Filterred Data
			</label>
			<h1>
				{'category'}
				{filter.category}
			</h1>
			<div className="grid grid-cols-4 gap-5">
				{data.products
					.filter((item, i) => i >= (page - 1) * 20 && i <= page * 20)
					.map((item: any) => (
						<ul
							key={nanoid()}
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
			<div className="flex items-center justify-around">
				{Array.from('a'.repeat(data.products.length / 20)).map(
					(element: any, index: number) => (
						<button key={index} onClick={() => setPage(index + 1)}>
							{index + 1}
						</button>
					)
				)}
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