import type { NextPage } from 'next';
import Link from 'next/link';

import { DarkModeToggleButton } from '@/components/DarkModeToggleButton';
import { Redirect } from '@/components/ui/Redirect';

import { Meta } from '@/utils/meta/Meta';

import { IHome } from './Home.interface';

export const Home: NextPage<IHome> = () => {
	return (
		<Meta
			title="Sort your products advanced"
			description="Sort your products advanced"
		>
			<div className="h-screen flex flex-col justify-center items-center dark:bg-slate-800 transition-color duration-700">
				<header className="flex flex-row justify-between items-center">
					<p className="text-4xl font-semibold text-blue-400 hover:text-gray-300 dark:text-white transition-color duration-700 dark:hover:text-orange-300">
						Hello World!
					</p>
					<DarkModeToggleButton />
				</header>
				<Redirect text="Filtration Page" link="filter" />
				<Redirect text="Counter" link="counter" />
			</div>
		</Meta>
	);
};
