import { MoonIcon, SunIcon } from '@heroicons/react/outline';

import { useDarkMode } from '@/hooks/useDarkMode';

export const DarkModeToggleButton = () => {
	const { darkMode, toggleDarkMode } = useDarkMode();
	return (
		<button
			className="text-slate-700 dark:text-slate-300 text-sm"
			onClick={toggleDarkMode}
		>
			<span>
				{!darkMode ? <MoonIcon className="h-6" /> : <SunIcon className="h-6" />}
			</span>
		</button>
	);
};
