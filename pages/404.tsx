import Heading from '@/components/ui/Heading';
import { Meta } from '@/utils/meta/Meta';
import Link from 'next/link';
import React from 'react';

export const Error404 = () => {
	return (
		<Meta title='Page not found'>
			<Heading title="Page not found" />
			<Link href="/">Redirect to Home</Link>
		</Meta>
	);
};
