import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDeferredValue } from 'react';
import { selectFilter } from 'redux/reducers/filtration/filterSlice';

import { useAppSelector } from '@/hooks/redux';

import { Pagination } from './Pagination';
import { IFilteredData } from 'types/filterData.interface';

export const ProductCards = () => {
	const data = useAppSelector(selectFilter);
	const deferredProducts = useDeferredValue(data.filteredData);
	const [page, setPage] = useState<number>(1);

	return (
		<>
			<div className="grid grid-cols-4 gap-5">
				{deferredProducts ? (
					deferredProducts
						.filter((item, i) => i >= (page - 1) * 20 && i < page * 20)
						.map((item: IFilteredData) => (
							<ul
								key={nanoid()}
								className=" dark:hover:bg-gray-400 rounded-[15px] bg-white
						text-black text-center hover:bg-gray-400 dark:hover:text-white 
						cursor-pointer p-2 border-solid border-2 dark:border-none hover:border-amber-800 border-slate-500"
							>
								<li>{item.transaction_name}</li>
								<li>{item.amount}</li>
								<li>{item.category}</li>
								<li>{item.transaction_vendor}</li>
								<li>{item.location}</li>
							</ul>
						))
				) : (
					<div>No items</div>
				)}
			</div>
			<Pagination setPage={setPage} />
		</>
	);
};
