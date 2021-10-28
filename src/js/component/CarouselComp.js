import React from "react";
import { Carousel } from "react-bootstrap";

export const CarouselComp = () => {
	return (
		<Carousel>
			<Carousel.Item>
				<img
					className="d-block m-auto text=First slide bg-success"
					style={{ width: "400", height: "400" }}
					src=""
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block m-auto text=Second slide bg-dark"
					style={{ width: "400", height: "400" }}
					src="./FirebaeEssentialTraining.jpg"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block m-auto text=Third slide bg-primary"
					style={{ width: "400", height: "400" }}
					src="./BecomeAReactDeveloper.jpg"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};
