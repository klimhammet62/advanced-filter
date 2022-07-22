import { Selectors } from '@/components/Selectors';
import { SearchInput } from '@/components/ui/searchInput';

export const FiltrationForm = () => {
	return (
		<div className="flex flex-row items-center">
			<div className="flex flex-row items-center m-12">
				<SearchInput />
			</div>
			<Selectors />
		</div>
	);
};
