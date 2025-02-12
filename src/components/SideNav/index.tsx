import Image from 'next/image';
import { HomeIcon, UserIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid';

import cushonLogoColour from '@/../public/nw_cushon_white.png';
import SideNavItem, { SideNavItemProps } from './components/SideNavItem';

const navItems: SideNavItemProps[] = [
	{
		name: 'Home',
		href: '/',
		Icon: HomeIcon,
	},
	{
		name: 'Investments',
		href: '/isa',
		Icon: UserIcon,
	},
];

export default function Page() {
	return (
		<nav className="bg-primary px-6 py-7 flex flex-col">
			<Image
				src={cushonLogoColour}
				height="60"
				width="250"
				alt="NatWest Cushon logo"
				quality={100}
				className="mb-4"
			/>
			<ul className="flex flex-1 flex-col gap-2 text-lg text-white">
				{navItems.map(({ name, href, Icon }) => (
					<li key={name}>
						<SideNavItem name={name} href={href} Icon={Icon} />
					</li>
				))}

				<li className="mt-auto">
					<SideNavItem name={'Log out'} href="/" Icon={ArrowRightStartOnRectangleIcon} />
				</li>
			</ul>
		</nav>
	);
}
