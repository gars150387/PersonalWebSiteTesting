import React from "react";
import { Card, Button } from "react-bootstrap";
import { DataCertifications } from "./DataCertifications";
import "../../img/BecomeAReactDeveloper.jpg";
import "../../img/BuildAGoogleMapAppWithJavascript.jpg";
// import "../../img/DevelopingACriticalMindset.jpg";
import "../../img/FirebaeEssentialTraining.jpg";
import "../../img/JavascriptCodeChallenges.jpg";
import "../../img/NodejsEssentialTraining.jpg";
// import "../../img/React Creating and Hosting a Full Stack Site.PNG";
import "../../img/React.jsEssentialTraining.jpg";
import "../../img/ReactBuildingAnInterface.jpg";
import "../../img/ReactComponentsContextAndAccessibility.jpg";
import "../../img/ReactDesignPatterns.jpg";
import "../../img/ReactEcosystems.jpg";
import "../../img/ReactHooks.jpg";
// import "../../img/ReactDesignPatternscertification.jpg";

export const CardComp = props => {
	return (
		<>
			{DataCertifications.map(index => {
				return (
					<ul key={index}>
						<li className="m-auto">
							<Card md={6} className="m-auto" style={{ width: "18rem" }}>
								<Card.Img variant="top" src={`./${this.img}.jpg`} />
								<Card.Body>
									<Card.Title>{this.title}</Card.Title>
									<Card.Text>{this.company}</Card.Text>
									<Button variant="primary" href={this.link}>
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
