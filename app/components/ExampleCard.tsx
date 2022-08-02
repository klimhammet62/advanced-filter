import { nanoid } from 'nanoid';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { productPage, selectExample, selectProducts } from 'redux/reducers/goods/goodsSlice';



import { useAppDispatch, useAppSelector } from '@/hooks/redux';



import { replaceTitle } from '@/utils/replace';


export const ExampleCard = ({ data }: { data: number }) => {
	const productsArray = useAppSelector(selectProducts);

	const dispatch = useAppDispatch();

	return (
		<div className="grid grid-cols-4 gap-5">
			{productsArray
				.filter((item, i) => i < data * 15)
				.map((item, index) => (
					<Link href={`/goods/` + `${replaceTitle(item.title)}`} key={nanoid()}>
						<ul
							onClick={() => dispatch(productPage(item))}
							className="dark:hover:bg-gray-400 m-2 rounded-[15px] bg-white
						text-black text-center hover:bg-gray-400 dark:hover:text-white 
						cursor-pointer p-5 border-solid border-2 dark:border-none hover:border-amber-800 border-slate-500"
						>
							<li>{item.name}</li>
							<li>{item.title}</li>
							<li>{item.characteristic}</li>
							<li>{item.numbers}</li>
						</ul>
					</Link>
				))}
		</div>
	);
};