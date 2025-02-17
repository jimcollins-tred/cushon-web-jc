interface TileProps {
	title?: string;
	children: React.ReactNode;
}

export function Tile({ title, children }: TileProps) {
	return (
		<div className="border-2 border-primary rounded-md">
			{title && (
				<h3 className="bg-primary px-5 py-3 text-white text-xl font-semibold">{title}</h3>
			)}
			<div className="p-5">{children}</div>
		</div>
	);
}

export default Tile;
