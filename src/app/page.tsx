import Link from 'next/link';

export default function Page() {
	return (
		<div className="bg-background flex flex-col items-center ">
			<h1>Welcome to Cushon</h1>
			<h2>How can we help you today?</h2>
			<Link href="/dashboard">Login to personal account</Link>
		</div>
	);
}
