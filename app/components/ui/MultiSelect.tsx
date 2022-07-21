import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { Fragment } from 'react';

import { useAppDispatch } from '@/hooks/redux';

export const MultiSelect = ({
	array,
	defaultValue,
	selectFunction,
	selectedValue,
}: {
	array: string[];
	defaultValue: string;
	selectFunction: ActionCreatorWithPayload<string, string>;
	selectedValue?: string | null;
}) => {
	const dispatch = useAppDispatch();

	return (
		<>
			<Listbox
				value={selectedValue === '' ? defaultValue : selectedValue}
				onChange={(event: any): void => {
					dispatch(selectFunction(event));
				}}
			>
				<div className="relative">
					<Listbox.Button
						className="cursor-pointer relative rounded-lg bg-white pr-2 py-2 m-2 text-center shadow-md focus:outline-none 
					focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 
					focus-visible:ring-offset-orange-300 sm:text-sm  w-[120px]"
					>
						<span className="block truncate dark:text-black">
							{selectedValue === '' ? defaultValue : selectedValue}
						</span>
						<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
							<SelectorIcon
								className="h-5 w-5 text-gray-400"
								aria-hidden="true"
							/>
						</span>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Listbox.Options
							className="w-[120px] text-center absolute mt-1 max-h-60 overflow-auto rounded-md bg-white 
						py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm text-black"
						>
							{array.map((str: string) => (
								<Listbox.Option
									key={nanoid()}
									className={({ active }) =>
										`relative select-none py-2 pl-3 pr-1 cursor-pointer ${
											active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
										}`
									}
									value={str}
								>
									{({ selected }) => (
										<>
											<span
												className={`block truncate ${
													selected ? 'font-medium' : 'font-normal'
												}`}
											>
												{str}
											</span>
											{selected ? (
												<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
													<CheckIcon className="h-5 w-5" aria-hidden="true" />
												</span>
											) : null}
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</>
	);
};
