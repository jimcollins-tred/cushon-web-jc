import React, { PropsWithChildren } from 'react';

function SecondaryHeader({ children }: PropsWithChildren) {
	return <h2 className="text-4xl font-semibold mb-10">{children}</h2>;
}

export default SecondaryHeader;
