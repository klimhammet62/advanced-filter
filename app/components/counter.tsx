import Link from 'next/link';
import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../hooks/redux';
import {
	decrement,
	increment,
	incrementAsync,
	incrementByAmount,
	incrementIfOdd,
	selectCount,
} from '../redux/reducers/counterSlice';

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
			<div className="form-label flex flex-row justify-center mb-2 text-gray-700 transition-color duration-700">
				<button
					className="dark:text-white"
					aria-label="Decrement value"
					onClick={() => dispatch(decrement())}
				>
					-
				</button>
				<span className="dark:text-white">{count}</span>
				<button
					aria-label="Increment value"
					onClick={() => dispatch(increment())}
					className="dark:text-white"
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
			<Link href="/">
				<h2
					className="cursor-pointer hover:text-gray-300 dark:text-white dark:hover:text-orange-300
					p-3 bg-slate-500 rounded-md m-2 hover:bg-sky-700
					"
				>
					Redirect to Home
				</h2>
			</Link>
		</div>
	);
}

export default Counter;
