import { FC } from 'react';

const Heading: FC<{
	title: string;
	className?: string;
}> = ({ title, className = '' }) => {
	return (
		<h1
			className={`w-full flex flex-col justify-center items-center text-black text-opacity-80 font-semibold dark:text-white ${
				className.includes('xl') ? '' : 'text-3xl'
			} ${className}`}
		>
			{title}
		</h1>
	);
};

export default Heading;
