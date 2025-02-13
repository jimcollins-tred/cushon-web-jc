import Image from 'next/image';

import cushonLogoWhite from '@/../public/nw_cushon_white.png';
import homeImage from '@/../public/1721060098-new-home-ensamble.svg';
import LinkButton from '@/components/Button';

export default function Page() {
	return (
		<div className="bg-primary min-h-screen mx-auto flex justify-center">
			<div className="flex flex-col items-center max-w-7xl py-5">
				<Image src={cushonLogoWhite} height="60" width="250" alt="Cushon logo" quality={100} />
				<h1 className="text-[5.5rem] text-white font-semibold my-5 text-center mx-11 leading-tight">
					Making pensions and savings easy
				</h1>

				<LinkButton href="/dashboard" text="Personal ISAs" />

				<Image
					src={homeImage}
					width="750"
					alt="A young woman checks her Cushon ISA on her phone"
					quality={100}
					className="mt-10"
				/>
				<h2 className="text-3xl text-white font-semibold mt-24">
					Now offering personal ISAs - apply today
				</h2>
			</div>
		</div>
	);
}
