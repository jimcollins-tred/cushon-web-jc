import Image from 'next/image';
import Link from 'next/link';

import cushonLogo from '@/../public/cushon-logo-sm.png';

export default function Page() {
	return (
		<div>
			<Image src={cushonLogo} height="60" width="250" alt="The Wild Oasis logo" quality={100} />
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/isa">Investments</Link>
				</li>
			</ul>
		</div>
	);
}
