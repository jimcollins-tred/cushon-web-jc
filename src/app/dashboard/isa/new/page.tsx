import Tile from '@/components/Tile';
import SecondaryHeader from '@/components/SecondaryHeader';

export default function Page() {
	return (
		<div className="grid grid-cols-[0.7fr_0.3fr] gap-x-16">
			<div className="col-span-2">
				<SecondaryHeader>Open new ISA</SecondaryHeader>
			</div>

			<p>
				Choose how you want your Cushon ISA to be invested by selecting one of the funds below.
			</p>

			<Tile title="Total investments">
				<p className="text-6xl font-semibold">£10,590</p>
			</Tile>
		</div>
	);
}
