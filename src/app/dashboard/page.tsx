import Tile from '@/components/Tile';
import Link from 'next/link';

export default function Page() {
	return (
		<div className="grid grid-cols-[0.7fr_0.3fr] gap-x-16">
			<h2 className="text-4xl font-semibold mb-10 col-span-2">Welcome, James</h2>

			<div>
				<Tile title="Current investments">
					<h3 className="text-xl font-semibold text-primary">ISAs</h3>
					<Link href="/dashboard/isa">Add a new ISA</Link>
				</Tile>
			</div>
			<div>
				<Tile title="Total investments">
					<p className="text-6xl font-semibold">£10,590</p>
				</Tile>
			</div>
		</div>
	);
}
