import React from "react";
import { Carousel } from "react-bootstrap";

export const CarouselComp = () => {
	return (
		<Carousel>
			<Carousel.Item>
				<img
					className="d-block w-50 h-75 m-auto text=First slide bg-success"
					style={{ width: "400", height: "400" }}
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshDboirtTQFcxr3LX1qb7Z6OgzBz3lui4_w&usqp=CAU"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-50 h-75 m-auto text=Second slide bg-dark"
					style={{ width: "800", height: "600" }}
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMVi6vSqfjMLE58GCEObyQNw1rkcQ4yKpsnQ&usqp=CAU"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-50 h-75 m-auto text=Third slide bg-primary"
					style={{ width: "400", height: "400" }}
					src="./rigo-baby.jpg"
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
