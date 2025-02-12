import Link from 'next/link';

export interface SideNavItemProps {
	name: string;
	href: string;
	Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

function SideNavItem({ name, href, Icon }: SideNavItemProps) {
	return (
		<div className="flex items-center gap-4">
			<Icon className="w-5 h-5" />
			<Link href={href}>{name}</Link>
		</div>
	);
}

export default SideNavItem;
