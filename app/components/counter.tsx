import Link from 'next/link';
import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../hooks/redux';
import {
	decrement,
	increment,
	incrementAsync,
	incrementByAmount,
	incrementIfOdd,
	selectCount,
	swap,
} from '../redux/reducers/counter/counterSlice';

import Heading from './ui/Heading';
import { Redirect } from './ui/Redirect';

function Counter() {
	const dispatch = useAppDispatch();
	const count = useAppSelector(selectCount);
	const [incrementAmount, setIncrementAmount] = useState('2');

	const incrementValue = Number(incrementAmount) || 0;

	return (
		<div
			className="w-full h-screen flex flex-col justify-center items-center transition-color 
		duration-700 dark:bg-slate-800 dark:text-white font-semibold"
		>
			<button onClick={() => dispatch(swap())}>zxc</button>
			<Heading title="Counter" />
			<div className="form-label flex flex-row justify-center mb-2 text-gray-700 transition-color duration-700">
				<button
					className="dark:text-white dark:bg-slate-500 flex flex-row justify-center items-center p-3"
					aria-label="Decrement value"
					onClick={() => dispatch(decrement())}
				>
					-
				</button>

				{/* {count.value} */}
				{/* <span className="dark:text-white flex flex-row justify-center items-center p-3">
					{count[0].value}

				</span> */}

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
			</div>
			<Redirect text="Redirect to Home" link=""/>
		</div>
	);
}

export default Counter;
