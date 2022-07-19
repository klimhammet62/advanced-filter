import { FC, PropsWithChildren, ReactNode } from 'react';

export const Layout: FC<PropsWithChildren> = ({
	children,
}: {
	children?: ReactNode;
}) => {
	return (
		<div className="min-h-screen h-full dark:bg-slate-800">
			<div className="w-800 max-w-screen-lg mx-auto">{children}</div>
		</div>
	);
};
