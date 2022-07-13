import type { NextPage } from 'next';

import { DarkModeToggleButton } from '@/components/DarkModeToggleButton';

import { IHome } from './Home.interface';

export const Home: NextPage<IHome> = () => {
	return (
		<>
			<div className="w-screen h-screen flex flex-row justify-center items-center dark:bg-slate-800 transition-color duration-700">
				<p className="text-4xl font-semibold text-blue-400 hover:text-gray-300 cursor-pointer dark:text-white">
					Hello World!
				</p>
				<DarkModeToggleButton />
			</div>
		</>
	);
};
