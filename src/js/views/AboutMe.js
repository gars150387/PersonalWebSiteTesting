import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const AboutMe = () => {
	return (
		<>
			<Card style={{ width: "75%" }}>
				<Card.Img variant="bottom" src="rigo-baby.jpg" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>Here is the part where I tell you my story!</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
};
