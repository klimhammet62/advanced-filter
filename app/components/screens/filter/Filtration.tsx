import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { SearchInput } from '@/components/ui/searchInput';
import { MultiSelect } from '@/components/ui/select';

export const Filtration = () => {
	return (
		<div
			className="w-full h-screen flex flex-col justify-center items-center dark:bg-slate-800  
        text-black text-opacity-80 font-semibold dark:text-white"
		>
			<label className="form-label inline-block mb-2 text-gray-700 dark:text-white">
				Filter Data
			</label>
			<div className="flex flex-row items-center">
				<div className="flex flex-row items-center m-12">
					<SearchInput />
					<Button />
				</div>
				<MultiSelect />
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
