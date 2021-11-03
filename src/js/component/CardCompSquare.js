import React from "react";
import { Card, Button } from "react-bootstrap";
import { DataCertifications } from "./DataCertifications";
import "../../img/FullStackWebDeveloperCertificationMiamiDadeCollege.jpg";

export const CardCompSquare = () => {
	return (
		<>
			{DataCertifications.map(item => {
				return (
					<Card
						key={item.id}
						// md={4}
						// className="m-auto"
						style={{ borderTop: "white", borderLeft: "white", borderRight: "white" }}>
						<Card.Title className="text-center bg-gray">{item.title}</Card.Title>
						<Card.Img src={`./${item.img}.jpg`} />
						<Card.Body>
							<Card.Text>
								{" "}
								<h5>{item.company}</h5>
							</Card.Text>
							<Button className="m-auto" variant="primary" href={item.href}>
								Click and Check it out
							</Button>
						</Card.Body>
					</Card>
				);
			})}
		</>
	);
};
