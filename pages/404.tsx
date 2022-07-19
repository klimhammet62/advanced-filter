import Link from 'next/link';
import React from 'react';

import Heading from '@/components/ui/Heading';

import { Meta } from '@/utils/meta/Meta';

export default function Error404() {
	return (
		<Meta title="Page not found">
			<Heading title="404 - Page Not Found" />
			<Link href="/">Redirect to Home</Link>
		</Meta>
	);
};
