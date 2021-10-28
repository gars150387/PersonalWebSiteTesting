import React from "react";
import { Card, Button } from "react-bootstrap";
import { DataCertifications } from "./DataCertifications";
import "../../img/BecomeAReactDeveloper.jpg";
import "../../img/BuildAGoogleMapAppWithJavascript.jpg";
import "../../img/FirebaeEssentialTraining.jpg";
import "../../img/JavascriptCodeChallenges.jpg";
import "../../img/ReactBuildingAnInterface.jpg";
import "../../img/ReactComponentsContextAndAccessibility.jpg";
import "../../img/ReactEcosystems.jpg";
import "../../img/ReactHooks.jpg";

export const CardComp = ({ title, company, link, img }) => {
	return (
		<>
			{DataCertifications.map(index => {
				return (
					<ul key={index}>
						<li className="m-auto">
							<Card md={6} className="m-auto" style={{ width: "18rem" }}>
								<Card.Img variant="top" src={`./${img}.jpg`} />
								<Card.Body>
									<Card.Title>{title}</Card.Title>
									<Card.Text>{company}</Card.Text>
									<Button variant="primary" href={link}>
										Click and Check it out
									</Button>
								</Card.Body>
							</Card>
						</li>
					</ul>
				);
			})}
		</>
	);
};
