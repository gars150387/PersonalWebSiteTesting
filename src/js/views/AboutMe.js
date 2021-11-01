import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const AboutMe = () => {
	return (
		<div className="">
			<Row>
				<Col className="text-end">
					<Card.Img
						// className="justify-content-end"
						style={{ width: "60%", height: "60%" }}
						variant="top"
						src="rigo-baby.jpg"
					/>
				</Col>
				<Col>
					{/* <Card className="justify-content-start" style={{ width: "60%", margin: "auto" }}>
						<Card.Img
							className="justify-content-end"
							style={{ width: "55%", height: "50%" }}
							variant="top"
							src="rigo-baby.jpg"
						/> */}
					<Card.Body className="text-start">
						<Card.Title>This is Me!</Card.Title>
						<Card.Text>Here is the part where I tell you my story!</Card.Text>
					</Card.Body>
					{/* </Card> */}
				</Col>
			</Row>
			<Row>
				<Col>
					{" "}
					<Card.Body className="text-end">
						<Card.Title>This is Me!</Card.Title>
						<Card.Text>Here is the part where I tell you my story!</Card.Text>
					</Card.Body>
				</Col>
				<Col>
					<Card.Img
						// className="justify-content-end"
						style={{ width: "60%", height: "60%" }}
						variant="top"
						src="rigo-baby.jpg"
					/>
				</Col>
			</Row>
			<Row>
				<Col className="text-end">
					<Card.Img
						// className="justify-content-end"
						style={{ width: "60%", height: "60%" }}
						variant="top"
						src="rigo-baby.jpg"
					/>
				</Col>
				<Col>
					<Card.Body className="text-start">
						<Card.Title>This is Me!</Card.Title>
						<Card.Text>Here is the part where I tell you my story!</Card.Text>
					</Card.Body>
				</Col>
			</Row>
		</div>
	);
};
