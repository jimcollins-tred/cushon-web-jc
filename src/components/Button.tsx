import Link from 'next/link';

interface LinkButtonProps {
	href: string;
	text: string;
}

function LinkButton({ href, text }: LinkButtonProps) {
	return (
		<Link
			href={href}
			className="border-2 border-white rounded-full px-6 py-4 text-primary-800 text-lg text-white font-semibold hover:border-2 hover:bg-white hover:bg-opacity-10 transition-all my-4"
		>
			{text}
		</Link>
	);
}

export default LinkButton;
