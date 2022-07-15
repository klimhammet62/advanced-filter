import Counter from '@/components/Counter';
import Heading from '@/components/ui/Heading';

import { Meta } from '@/utils/meta/Meta';

export default function CounterPage() {
	return (
		<Meta title="Counter">
			<Heading title="Counter" />
			<Counter />
		</Meta>
	);
}
