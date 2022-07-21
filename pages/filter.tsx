import Link from 'next/link';



import { FiltrationPage } from '@/components/screens/filter/FiltrationPage';



import { Meta } from '@/utils/meta/Meta';


export default function FilterPage() {
	return (
		<Meta
			title="Sort your products advanced"
			description="Sort your products advanced"
		>
			<FiltrationPage />
		</Meta>
	);
}