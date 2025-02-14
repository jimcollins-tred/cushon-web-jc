import Link from 'next/link';
import { PropsWithChildren } from 'react';

export enum LinkButtonType {
	PRIMARY = 'PRIMARY',
	WHITE = 'WHITE',
}

interface LinkButtonProps {
	href: string;
	type: LinkButtonType;
}

function LinkButton({ href, type, children }: PropsWithChildren<LinkButtonProps>) {
	const buttonStyles =
		type === LinkButtonType.PRIMARY
			? 'bg-primary text-white font-semibold hover:bg-secondary'
			: 'text-white hover:border-2 hover:bg-white hover:bg-opacity-10';

	return (
		<Link
			href={href}
			className={`${buttonStyles} border-2 rounded-3xl px-6 py-3 text-lg transition-all inline-block duration-500`}
		>
			{children}
		</Link>
	);
}

export default LinkButton;
