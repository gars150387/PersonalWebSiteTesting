import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";
// import VideoPlayer from "react-video-js-player";
// import "../../video/PersonalWebsiteInProgress.mp4";

export const Projects = () => {
	// const VideoSrc = PersonalWebsiteInProgress;

	return (
		<>
			<Row className="m-auto">
				<Col className="m-auto">
					<Card.Img style={{ width: "35px", height: "35px" }} variant="top" src="rigo-baby.jpg" rounded />
					<Card.Body>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of the cards
							content.
						</Card.Text>
					</Card.Body>{" "}
					<br />
					<Card.Body>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of the cards
							content.
						</Card.Text>
					</Card.Body>
					{/* <VideoPlayer src={VideoSrc} width="720px" height="420px" playBackRates={[0.5, 1, 3.85, 16]} /> */}
					<ReactPlayer
						autoPlay={true}
						className="d-flex m-auto rouned border-solid border-transparency"
						controls
						url="https://cdn.loom.com/sessions/thumbnails/45c055eff97c49e6aa79d7b2e9d2c4ff-00001.mp4#t=0.1"
						src=""
					/>
					<h5 className="text-center">
						To watch full video of the progression of my website,{" "}
						<button className="bg-success rounded" href="https://www.loom.com/my-videos">
							click here
						</button>
					</h5>
				</Col>
			</Row>
		</>
	);
};
