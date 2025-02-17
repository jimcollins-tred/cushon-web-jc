import Tile from '@/components/Tile';
import { Fund } from '@/types/fund';
import FundTileProjection from './components/FundTileProjection';

interface FundTileProps {
	fund: Fund;
}

function FundTile({ fund }: FundTileProps) {
	const {
		name,
		provider,
		charges,
		description,
		projected_value: projectedValue,
		projected_returns: projectedReturns,
	} = fund;

	console.log('projectedRe');

	return (
		<div className="mb-8" key={name}>
			<Tile title={name}>
				<p className="">Provider: {provider}</p>
				<p>Charges: {charges}%</p>
				<p className="mb-3">{description}</p>
				<div className="flex flex-grow gap-8">
					<div className="flex-1">
						<FundTileProjection title="Projected Returns">
							<p>Bad: {projectedReturns.bad}%</p>
							<p>Good: {projectedReturns.good}%</p>
							<p>Likely: {projectedReturns.likely}%</p>
						</FundTileProjection>
					</div>
					<div className="flex-1">
						<FundTileProjection title="Projected Returns">
							<p>Bad: {projectedReturns.bad}%</p>
							<p>Good: {projectedReturns.good}%</p>
							<p>Likely: {projectedReturns.likely}%</p>
						</FundTileProjection>
					</div>
				</div>
			</Tile>
		</div>
	);
}

export default FundTile;
