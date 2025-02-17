import Tile from '@/components/Tile';
import InvestmentTile from './_components/InvestmentTile';
import SecondaryHeader from '@/components/SecondaryHeader';

import { getUser } from '@/api/isa/getUser';
import { getUserIsas } from '@/api/isa/getUserIsas';

export default async function Page() {
	const user = await getUser();

	return (
		<div className="grid grid-cols-[0.7fr_0.3fr] gap-x-16">
			<div className="col-span-2">
				<SecondaryHeader>Welcome, {user.name.split(' ')[0]}</SecondaryHeader>
			</div>

			<InvestmentTile userId={user.id} />

			<div>
				<Tile title="Total investments">
					<p className="text-6xl font-semibold">£10,590</p>
				</Tile>
			</div>
		</div>
	);
}
