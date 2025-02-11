import Link from 'next/link';

export default function Page() {
	return (
		<div>
			<h1>Manage your Cushon account</h1>
			<Link href="/dashboard/isa">Add a new ISA</Link>
		</div>
	);
}
