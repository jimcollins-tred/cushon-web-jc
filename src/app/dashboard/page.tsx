import Tile from '@/components/Tile';
import InvestmentTile from './_components/InvestmentTile';
import SecondaryHeader from '@/components/SecondaryHeader';

export default function Page() {
	return (
		<div className="grid grid-cols-[0.7fr_0.3fr] gap-x-16">
			<div className="col-span-2">
				<SecondaryHeader>Welcome, James</SecondaryHeader>
			</div>

			<InvestmentTile />

			<div>
				<Tile title="Total investments">
					<p className="text-6xl font-semibold">£10,590</p>
				</Tile>
			</div>
		</div>
	);
}
