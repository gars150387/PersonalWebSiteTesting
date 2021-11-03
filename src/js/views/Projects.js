import React from "react";
import { Card, Row, Col } from "react-bootstrap";
// import ReactPlayer from "react-player";
import VideoPlayer from "react-video-js-player";
import "../../video/PersonalWebsiteInProgress.mp4";

export const Projects = () => {
	const VideoSrc = PersonalWebsiteInProgress;

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
						<VideoPlayer src={VideoSrc} width="720px" height="420px" playBackRates={[0.5, 1, 3.85, 16]} />
						{/* <ReactPlayer
							controls
							url="/workspace/PersonalWebSiteTesting/src/video/Projects.js - PersonalWebSiteTesting - Gitpod Code.mp4"
							src=""
						/> */}
					</Card>
				</Col>
			</Row>
		</>
	);
};
