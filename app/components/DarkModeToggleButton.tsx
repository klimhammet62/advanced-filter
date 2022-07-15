import { MoonIcon, SunIcon } from '@heroicons/react/outline';

import { useDarkMode } from '@/hooks/useDarkMode';

export const DarkModeToggleButton = () => {
	const { darkMode, toggleDarkMode } = useDarkMode();
	return (
		<button
			className="text-slate-700 dark:text-slate-300 text-sm items-center mt-1"
			onClick={toggleDarkMode}
		>
			<span>
				{!darkMode ? (
					<MoonIcon className="h-6 hover:text-gray-300" />
				) : (
					<SunIcon className="h-6 dark:hover:text-orange-300" />
				)}
			</span>
		</button>
	);
};
