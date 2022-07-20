import { Dispatch, SetStateAction } from 'react';
import { selectFilter } from 'redux/reducers/filtration/filterSlice';

import { useAppSelector } from '@/hooks/redux';

export const Pagination = (
	setPage: (index: any) => Dispatch<SetStateAction<number>>
) => {
	const data = useAppSelector(selectFilter);
	return (
		<div className="flex items-center justify-around">
			{Array.from('a'.repeat(data.products.length / 20)).map(
				(element: any, index: number) => (
					<button
						className="bg-slate-500 p-5 m-3 rounded-md"
						key={index}
						onClick={() => setPage(index + 1)}
					>
						{index + 1}
					</button>
				)
			)}
		</div>
	);
};
