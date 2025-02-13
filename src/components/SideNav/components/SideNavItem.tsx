import Link from 'next/link';

export interface SideNavItemProps {
	name: string;
	href: string;
	Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

function SideNavItem({ name, href, Icon }: SideNavItemProps) {
	return (
		<Link
			href={href}
			className="flex items-center gap-4 hover:bg-white hover:bg-opacity-10 px-2 py-2 border-rd rounded-md"
		>
			<Icon className="w-5 h-5" />
			<p>{name}</p>
		</Link>
	);
}

export default SideNavItem;
