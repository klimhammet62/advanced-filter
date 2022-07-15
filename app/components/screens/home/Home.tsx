import type { NextPage } from 'next';

import Counter from '@/components/Counter';
import { DarkModeToggleButton } from '@/components/DarkModeToggleButton';
import { Button } from '@/components/ui/button';
import { SearchInput } from '@/components/ui/searchInput';
import { MultiSelect } from '@/components/ui/select';

import { Meta } from '@/utils/meta/Meta';

import { IHome } from './Home.interface';

export const Home: NextPage<IHome> = () => {
	return (
		<Meta
			title="Sort your products advanced"
			description="Sort your products advanced"
		>
			<div className="w-screen h-screen flex flex-col justify-center items-center dark:bg-slate-800 transition-color duration-700">
				<header className="flex flex-row justify-between items-center">
					<p className="text-4xl font-semibold text-blue-400 hover:text-gray-300 dark:text-white transition-color duration-700 dark:hover:text-orange-300">
						Hello World!
					</p>
					<DarkModeToggleButton />
				</header>

				<label className="form-label inline-block mb-2 text-gray-700 dark:text-white transition-color duration-700">
					Filter Data
				</label>
				<Counter />
				<div className="flex flex-row items-center">
					<div className="flex flex-row items-center m-12">
						<SearchInput />
						<Button />
					</div>
					<MultiSelect />
				</div>
			</div>
		</Meta>
	);
};
