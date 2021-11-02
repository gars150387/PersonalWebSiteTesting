import React from "react";
import { Card } from "react-bootstrap";
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

export const CardCompSquare = ({ title, company, link, img }) => {
	return (
		<>
			{DataCertifications.map(item => {
				return (
					<Card
						className="m-auto"
						style={{ width: "70%", borderTop: "white", borderLeft: "white" }}
						key={item.title}>
						<Card.Title className="text-center">{item.title}</Card.Title>
						<Card.Img variant="top" src={`./${item.img}.jpg`} />
						<Card.Body>
							<Card.Text>Company issued: {item.company}</Card.Text>
							{/* <Button className="m-auto" variant="primary" href={item.href}>
                        Click and Check it out
                    </Button> */}
						</Card.Body>
					</Card>
				);
			})}
		</>
	);
};
