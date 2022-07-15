import Link from 'next/link';

import { Filtration } from '@/components/screens/filter/Filtration';
import Heading from '@/components/ui/Heading';

import { Meta } from '@/utils/meta/Meta';

export default function FilterPage() {
	return (
		<Meta
			title="Sort your products advanced"
			description="Sort your products advanced"
		>
			<Heading title="Filtration" />
			<Filtration />
		</Meta>
	);
}
