import { debounce } from 'lodash';
import { ChangeEvent } from 'react';
import { filterName } from 'redux/reducers/filtration/filterSlice';

import { useAppDispatch } from '@/hooks/redux';

export const SearchInput = () => {
	const dispatch = useAppDispatch();

	const updateValue = (e: ChangeEvent<HTMLInputElement>) =>
		dispatch(filterName(e?.target?.value));

	const debouncedOnChange = debounce(updateValue, 200);
    
	return (
		<div className="flex flex-col justify-center items-center transition-color duration-700">
			<div className="xl:w-96">
				<input
					type="text"
					className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
    "
					placeholder="Write something"
					onChange={debouncedOnChange}
				/>
			</div>
		</div>
	);
};
