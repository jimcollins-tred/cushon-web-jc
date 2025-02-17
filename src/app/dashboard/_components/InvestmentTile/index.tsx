import React from 'react';

import Tile from '@/components/Tile';
import LinkButton, { LinkButtonType } from '@/components/LinkButton';

import { getUserIsas } from '@/api/isa/getUserIsas';
import { Isa } from '@/types/isa';

interface InvestmentTileProps {
	userId: number;
}

function generateIsaRow(isa: Isa) {
	const { name, isas_funds: funds, balance, isa_return: isaReturn } = isa;

	// TODO: Assume one fund for now. Multiple funds to come
	const fund = funds[0];

	const { name: fundName } = fund;

	return (
		<tr key={isa.name} className="border-b border-black">
			<td className="py-2">{name}</td>
			{/* TODO: display list of all funds when we do multi-fund ISAs */}
			<td>{fundName}</td>
			<td>{balance}</td>
			<td>+{isaReturn}%</td>
		</tr>
	);
}

async function InvestmentTile({ userId }: InvestmentTileProps) {
	const userIsas = await getUserIsas(userId);

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
				<tbody>{userIsas.map((isa) => generateIsaRow(isa))}</tbody>
			</table>

			<div className="flex justify-end">
				<LinkButton href="/dashboard/isa/funds" type={LinkButtonType.PRIMARY}>
					Add a new ISA
				</LinkButton>
			</div>
		</Tile>
	);
}

export default InvestmentTile;
