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
import "../../img/ReactTestingAndDebugging.jpg";
import "../../img/ReactEssentialTraining.jpg";
import "../../img/NodejsEssentialTraining.jpg";
import "../../img/DevelopingACriticalThinkingMindset.jpg";
import "../../img/FullStackWebDeveloperCertificationMiamiDadeCollege.jpg";
import "../../img/ReactDesignPatterns.jpg";
import "../../img/ReactCreatingAndHostingAFullStackSite.jpg";

export const CardComp = ({ title, company, link, img }) => {
	return (
		<>
			{DataCertifications.map(item => {
				return (
					<Card
						key={item.id}
						md={6}
						className="m-auto"
						style={{ width: "40%", borderTop: "white", borderLeft: "white", borderRight: "white" }}>
						<Card.Title className="text-center bg-gray">{item.title}</Card.Title>
						<Card.Img variant="top" src={`./${item.img}.jpg`} />
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
