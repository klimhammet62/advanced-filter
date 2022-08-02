import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../hooks/redux';
import {
	filterByName,
	filterByValue,
	filterTitle,
	selectExample,
	selectProducts,
} from '../redux/reducers/goods/goodsSlice';

import { ExampleCard } from './ExampleCard';
import Heading from './ui/Heading';
import { MultiSelect } from './ui/MultiSelect';
import { Redirect } from './ui/Redirect';
import { SearchExample } from './ui/SearchExample';

function Goods() {
	const dispatch = useAppDispatch();
	/* const count = useAppSelector(selectCount);
	const [incrementAmount, setIncrementAmount] = useState('2'); */
	const productsArray = useAppSelector(selectProducts);
	const filterSettings = useAppSelector(selectExample);
	const [data, setData] = useState<number>(1);
	/* const incrementValue = Number(incrementAmount) || 0; */

	/* useEffect(() => {
		filterTitle
	}, [filterSettings]); */

	const handleFiltration = (selector: string, actionData: any) => {
		let data = actionData;
		if (filterSettings[parseInt(selector)]) {
		}
	};

	//2 функции 1 меняет filterSettings 2 проходит по
	//filterSettings если не пусто - вызываем функцию
	//вторая функция копирует стейт и меняет по значению
	//применить objects entries (check photo ds + check functions sandbox) Object.entries(...actionData, title: )
	useEffect(() => {}, [productsArray]);

	useEffect(() => {
		handleFiltration;
	}, [filterSettings]);

	return (
		<div
			className="w-full h-full flex flex-col justify-center items-center transition-color 
		duration-700 dark:text-white font-semibold"
		>
			<Heading title="Goods" />

			{/* <button onClick={() => dispatch(swap())}>zxc</button> */}
			{/* <div className="form-label flex flex-row justify-center mb-2 text-gray-700 transition-color duration-700">
				<button
					className="dark:text-white dark:bg-slate-500 flex flex-row justify-center items-center p-3"
					aria-label="Decrement value"
					onClick={() => dispatch(decrement())}
				>
					-
				</button>

				{count.value}
				<span className="dark:text-white flex flex-row justify-center items-center p-3">
					{count[0].value}

				</span>

				<div>
					{count.map((item, index: number) => (
						<div key={index}>{item.value}</div>
					))}
				</div>

				<button
					aria-label="Increment value"
					onClick={() => dispatch(increment())}
					className="dark:text-white dark:bg-slate-500 flex flex-row justify-center items-center p-3"
				>
					+
				</button>
			</div>
			<div>
				<input
					aria-label="Set increment amount"
					value={incrementAmount}
					onChange={(e) => setIncrementAmount(e.target.value)}
					className="dark:text-gray-600 p-1.5 
					border border-solid border-gray-300 rounded-md focus:border-blue-600 focus:outline-none"
				/>
				<button
					className="m-2 dark: bg-slate-500 p-2 rounded-md"
					onClick={() => dispatch(incrementByAmount(incrementValue))}
				>
					Add Amount
				</button>
				<button
					className="m-2 dark: bg-slate-500 p-2 rounded-md"
					onClick={() => dispatch(incrementAsync(incrementValue))}
				>
					Add Async
				</button>
				<button
					className="m-2 dark: bg-slate-500 p-2 rounded-md"
					onClick={() => dispatch(incrementIfOdd(incrementValue))}
				>
					Add If Odd
				</button>
			</div> */}

			<div className="flex flex-row justify-between">
				<SearchExample />
				<MultiSelect
					array={['Andrew', 'Amin', 'Naric', 'Vector', 'Jombo', 'Persca']}
					defaultValue="Select name"
					selectFunction={filterByName}
					selectedValue=""
				/>
				<MultiSelect
					array={['0-19', '20-49', '50-100+']}
					defaultValue="Select value"
					selectFunction={filterByValue}
					selectedValue=""
				/>
			</div>
			<ExampleCard data={data} />
			{data < 10 /* && Math.floor(productsArray.length / 15) */ ? (
				<button
					className="m-2 dark: bg-slate-500 p-2 rounded-md text-white"
					onClick={() => setData(data + 1)}
				>
					Load More
				</button>
			) : (
				<>No data</>
			)}
			<Redirect text="Redirect to Home" link="" />
		</div>
	);
}

export default Goods;
