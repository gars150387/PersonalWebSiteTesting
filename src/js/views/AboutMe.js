import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const AboutMe = () => {
	return (
		<div className="">
			<row>
				<Col xs={12} md={8}>
					<Card className="justify-content-start" style={{ width: "60%", margin: "auto" }}>
						<Card.Img
							className="justify-content-end"
							style={{ width: "55%", height: "50%" }}
							variant="top"
							src="rigo-baby.jpg"
						/>
						<Card.Body>
							<Card.Title>This is Me!</Card.Title>
							<Card.Text>Here is the part where I tell you my story!</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col xs={6} md={4} />
			</row>
			<row>
				<Col xs={6} md={4} />
				<Col xs={12} md={8}>
					<Card className="justify-content-start" style={{ width: "60%", margin: "auto" }}>
						<Card.Img
							className="justify-content-end"
							style={{ width: "55%", height: "50%" }}
							variant="top"
							src="rigo-baby.jpg"
						/>
						<Card.Body>
							<Card.Title>This is Me!</Card.Title>
							<Card.Text>Here is the part where I tell you my story!</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</row>
			<row>
				<Col xs={12} md={8}>
					<Card className="justify-content-start" style={{ width: "60%", margin: "auto" }}>
						<Card.Img
							className="justify-content-end"
							style={{ width: "55%", height: "50%" }}
							variant="top"
							src="rigo-baby.jpg"
						/>
						<Card.Body>
							<Card.Title>This is Me!</Card.Title>
							<Card.Text>Here is the part where I tell you my story!</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col xs={6} md={4} />
			</row>
		</div>
	);
};
