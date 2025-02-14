import React from 'react';

import Tile from '@/components/Tile';
import LinkButton, { LinkButtonType } from '@/components/LinkButton';

import userIsas from '@/api/isa/getUserIsas/mocks/userIsa.mock.json';

function InvestmentTile() {
	return (
		<Tile title="Current investments">
			<h3 className="text-xl font-semibold text-primary">ISAs</h3>
			<table className="w-full table-auto text-left mt-3 mb-6">
				<thead>
					<tr className="border-b-2 border-primary">
						<th className="py-2">Title</th>
						<th>Fund</th>
						<th>Balance</th>
						<th>Return</th>
					</tr>
				</thead>
				<tbody>
					{userIsas.map((isa) => (
						<tr key={isa.name} className="border-b border-black">
							<td className="py-2">{isa.name}</td>
							{/* TODO: display list of all funds when we do multi-fund ISAs */}
							<td>{isa.funds[0].name}</td>
							<td>{isa.balance}</td>
							<td>+{isa.return}%</td>
						</tr>
					))}
				</tbody>
			</table>

			<div className="flex justify-end">
				<LinkButton href="/dashboard/isa/new" type={LinkButtonType.PRIMARY}>
					Add a new ISA
				</LinkButton>
			</div>
		</Tile>
	);
}

export default InvestmentTile;
