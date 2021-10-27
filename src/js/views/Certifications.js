import React from "react";
import { CardComp } from "../component/CardComp";
import { DataCertifications } from "../component/DataCertifications";

export const Certifications = () => {
	return (
		<>
			{DataCertifications &&
				DataCertifications.map(e => {
					return <CardComp />;
				})}
		</>
	);
};
