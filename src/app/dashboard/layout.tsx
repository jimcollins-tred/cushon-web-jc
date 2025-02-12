import { ReactNode } from 'react';
import SideNav from '@/components/SideNav';

export default function Layout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<div className="grid grid-cols-[16rem_1fr] h-full gap-14">
			<SideNav />
			<div className="px-6 py-7">{children}</div>
		</div>
	);
}
