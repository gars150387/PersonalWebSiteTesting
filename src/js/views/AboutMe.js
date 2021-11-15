import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Drag } from "../component/Drag";
// import { Board } from "../component/Board";

export const AboutMe = () => {
	return (
		<div className="flexbox">
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
					{" "}
					<Card.Body className="text-end">
						<Card.Title>This is Me!</Card.Title>
						<Card.Text>Here is the part where I tell you my story!</Card.Text>
					</Card.Body>
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
					{/* <Card className="justify-content-start" style={{ width: "60%", margin: "auto" }}>
						<Card.Img
							className="justify-content-end"
							style={{ width: "55%", height: "50%" }}
							variant="top"
							src="rigo-baby.jpg"
						/> */}
					<Card.Body className="text-start">
						<Card.Title>Add Motion to provide animation to this paragraph</Card.Title>
						<Card.Text>Here is the part where I tell you my story!</Card.Text>
					</Card.Body>
					{/* </Card> */}
				</Col>
			</Row>
			<Row>
				<Col>
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
