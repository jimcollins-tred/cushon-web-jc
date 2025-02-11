import { ReactNode } from 'react';
import SideNav from '@/components/SideNav';

export default function Layout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<div className="grid grid-cols-[16rem_1fr]">
			<SideNav />
			<div className="py-1">{children}</div>
		</div>
	);
}
