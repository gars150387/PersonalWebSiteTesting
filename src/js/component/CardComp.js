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
import "../../img/ReactjsEssentialTraining.jpg";
import "../../img/NodejsEssentialTraining.jpg";
import "../../img/DevelopingACriticalThinkingMindset.jpg";
import "../../img/FullStackWebDeveloperCertificationMiamiDadeCollege.jpg";
import "../../img/ReactDesignPatterns.jpg";
import "../../img/ReactCreatingAndHostingAFullStackSite.jpg";
import "../../img/ReactEssentialTraining.jpg";

export const CardComp = ({ title, company, link, img }) => {
	return (
		<>
			{DataCertifications.map(item => {
				return (
					<ul key={item.id}>
						<li className="m-auto">
							<Card md={6} className="m-auto" style={{ width: "40%" }}>
								<Card.Title className="text-center">{item.title}</Card.Title>
								<Card.Img variant="top" src={`./${item.img}.jpg`} />
								<Card.Body>
									<Card.Text>Company issued: {item.company}</Card.Text>
									<Button className="m-auto" variant="primary" href={item.href}>
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
