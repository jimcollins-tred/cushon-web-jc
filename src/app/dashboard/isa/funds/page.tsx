import { getFunds } from '@/api/isa/getFunds';
import SecondaryHeader from '@/components/SecondaryHeader';
import FundTile from './_components/FundTile';

export default async function Page() {
	const funds = await getFunds();

	return (
		<div className="grid grid-cols-[0.7fr_0.3fr] gap-x-16">
			<div className="col-span-2 mb-10">
				<SecondaryHeader>Compare ISA funds</SecondaryHeader>
				<p>
					Choose how you want your Cushon ISA to be invested by selecting one of the funds below.
				</p>
			</div>

			<div className="col-start-1">
				{funds.map((fund) => (
					<FundTile key={fund.id} fund={fund} />
				))}
			</div>
		</div>
	);
}
