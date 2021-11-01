import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const AboutMe = () => {
	return (
		<>
			<Card style={{ width: "75%", margin: "auto" }}>
				<Card.Img
					className="justify-content-end"
					style={{ width: "100%", height: "50%" }}
					variant="top"
					src="rigo-baby.jpg"
				/>
				<Card.Body>
					<Card.Title>This is Me!</Card.Title>
					<Card.Text>Here is the part where I tell you my story!</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
};
