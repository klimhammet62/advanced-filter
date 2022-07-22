import Link from 'next/link';

export const Redirect = ({
	text,
	link,
}: {
	text: string;
	link: string;
}): JSX.Element => {
	return (
		<Link href={`/${link}`}>
			<h2
				className="cursor-pointer hover:text-gray-300 text-white dark:hover:text-orange-300
					p-3 bg-slate-500 rounded-md m-2 hover:bg-sky-700 max-w-xs text-center
					"
			>
				{text}
			</h2>
		</Link>
	);
};
