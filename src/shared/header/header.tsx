import React, { FunctionComponent } from "react";

import { Title } from "./title";
import { Description } from "./description";

type HeaderProps = {
	title: string;
	mainDescription?: string;
	secondaryDescription?: string;
	tertiaryDescription?: string;
};

export const Header: FunctionComponent<HeaderProps> = ({
	title,
	mainDescription,
	secondaryDescription,
	tertiaryDescription,
}) => {
	return (
		<div>
			<Title title={title} />

			{mainDescription ? (
				<Description
					description={mainDescription}
					secondDescription={secondaryDescription || undefined}
					thirdDescription={tertiaryDescription || undefined}
				/>
			) : (
				undefined
			)}
		</div>
	);
};
