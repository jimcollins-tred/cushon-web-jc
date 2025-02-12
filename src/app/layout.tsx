import { ReactNode } from 'react';
import type { Metadata } from 'next';

import '@/styles/globals.css';

import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'NatWest Cushon Personal Dashboard',
	description: 'All your financial investments in one place',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${openSans.className} antialiased min-h-screen flex flex-col`}>
				<div className="flex flex-1">
					<main className="mx-auto w-full">{children}</main>
				</div>
			</body>
		</html>
	);
}
