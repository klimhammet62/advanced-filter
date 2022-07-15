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
		<div className="flex flex-col justify-center items-center transition-color duration-700">
			<div className="form-label flex-row justify-center mb-2 text-gray-700 dark:text-white transition-color duration-700">
				<button
					className="	"
					aria-label="Decrement value"
					onClick={() => dispatch(decrement())}
				>
					-
				</button>
				<span>{count}</span>
				<button
					aria-label="Increment value"
					onClick={() => dispatch(increment())}
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
					className="dark:text-white transition-color duration-700"
					onClick={() => dispatch(incrementByAmount(incrementValue))}
				>
					Add Amount
				</button>
				<button
					className="dark:text-white transition-color duration-700"
					onClick={() => dispatch(incrementAsync(incrementValue))}
				>
					Add Async
				</button>
				<button
					className="dark:text-white transition-color duration-700"
					onClick={() => dispatch(incrementIfOdd(incrementValue))}
				>
					Add If Odd
				</button>
			</div>
		</div>
	);
}

export default Counter;
