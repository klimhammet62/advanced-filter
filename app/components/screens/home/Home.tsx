import type { NextPage } from 'next';

import { DarkModeToggleButton } from '@/components/DarkModeToggleButton';
import { Button } from '@/components/ui/button';
import { SearchInput } from '@/components/ui/searchInput';
import { MultiSelect } from '@/components/ui/select';

import { IHome } from './Home.interface';

export const Home: NextPage<IHome> = () => {
	return (
		<>
			<div className="w-screen h-screen flex flex-col justify-center items-center dark:bg-slate-800 transition-color duration-700">
				<header className="flex flex-row justify-between items-center">
					<p className="text-4xl font-semibold text-blue-400 hover:text-gray-300 cursor-pointer dark:text-white transition-color duration-700">
						Hello World!
					</p>
					<DarkModeToggleButton />
				</header>

				<label className="form-label inline-block mb-2 text-gray-700 dark:text-white transition-color duration-700">
					Filter Data
				</label>
				<div className="flex flex-row items-center">
					<div className="flex flex-row items-center m-12">
						<SearchInput />
						<Button />
					</div>
					<MultiSelect />
				</div>
			</div>
		</>
	);
};
