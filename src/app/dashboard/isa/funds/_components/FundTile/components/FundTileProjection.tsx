interface FundTileProjectionProps {
	title?: string;
	children: React.ReactNode;
}

function FundTileProjection({ title, children }: FundTileProjectionProps) {
	return (
		<div className="border-2 border-primary rounded-md">
			<h3 className="px-5 py-3 text-md font-semibold">{title}</h3>

			<div className="p-5">{children}</div>
		</div>
	);
}

export default FundTileProjection;
