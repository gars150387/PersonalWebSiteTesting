import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";

export const Projects = () => {
	return (
		<>
			<Row className="m-auto">
				<Col className="m-auto">
					<Card>
						<Card.Img style={{ width: "35px", height: "35px" }} variant="top" src="rigo-baby.jpg" rounded />
						<Card.Body>
							<Card.Text>
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</Card.Text>
						</Card.Body>
					</Card>
					<br />
					<Card>
						<Card.Body>
							<Card.Text>
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</Card.Text>
						</Card.Body>
						<ReactPlayer controls url="https://youtu.be/-QgJgZCJvo4" />
					</Card>
				</Col>
			</Row>
		</>
	);
};
