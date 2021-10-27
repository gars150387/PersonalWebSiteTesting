import React from "react";
import { Card, Button } from "react-bootstrap";
import { DataCertifications } from "./DataCertifications";

export const CardComp = ({ title, company, link }) => {
	return (
		<>
			{DataCertifications.map(index => {
				return (
					<li key={index}>
						<Card style={{ width: "18rem" }}>
							<Card.Img variant="top" src={`${img}`} />
							<Card.Body>
								<Card.Title>{title}</Card.Title>
								<Card.Text>{company}</Card.Text>
								<Button variant="primary" href={`${link}`}>
									Click and Check it out
								</Button>
							</Card.Body>
						</Card>
					</li>
				);
			})}
		</>
	);
};
