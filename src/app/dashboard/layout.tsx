import { ReactNode } from 'react';
import SideNav from '@/app/dashboard/_components/SideNav';

export default function Layout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<div className="grid grid-cols-[17rem_1fr] h-full">
			<SideNav />
			<div className="mx-16 my-10">{children}</div>
		</div>
	);
}
