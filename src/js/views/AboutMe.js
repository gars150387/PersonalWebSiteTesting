import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Drag } from "../component/Drag";
import { Board } from "../component/Board";

export const AboutMe = () => {
	return (
		<div className="flexbox">
			<Board id="board-1" className="baord">
			<Drag id="drag-1" className="drag" draggable="true">
			<Col className="text-end">
					<Card.Img
						// className="justify-content-end"
						style={{ width: "60%", height: "60%" }}
						variant="top"
						src="rigo-baby.jpg"
					/>
				</Col>
				<Drag>
				<Col>
					{/* <Card className="justify-content-start" style={{ width: "60%", margin: "auto" }}>
						<Card.Img
							className="justify-content-end"
							style={{ width: "55%", height: "50%" }}
							variant="top"
							src="rigo-baby.jpg"
						/> */}
					<Card.Body className="text-start">
						<Card.Title>Add Motion to provide animetion to this paragraph</Card.Title>
						<Card.Text>Here is the part where I tell you my story!</Card.Text>
					</Card.Body>
					{/* </Card> */}
				</Col>
				</Drag>
				<Drag>
				<Col>
					{" "}
					<Card.Body className="text-end">
						<Card.Title>This is Me!</Card.Title>
						<Card.Text>Here is the part where I tell you my story!</Card.Text>
					</Card.Body>
				</Col>
				</Drag>
				<Drag>
				<Col>
					<Card.Img
						// className="justify-content-end"
						style={{ width: "60%", height: "60%" }}
						variant="top"
						src="rigo-baby.jpg"
					/>
				</Col>
				</Drag>
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

			</Drag>
			</Board>
			<Board id="board-2" className="board">
				<Drag id="drag-2" className="drag" draggable="true">
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
						<Card.Title>Add Motion to provide animetion to this paragraph</Card.Title>
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

				</Drag>
			</Board>
		</div>
	);
};
