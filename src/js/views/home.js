import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { CarouselComp } from "../component/CarouselComp";
import { Breadcrumb } from "react-bootstrap";

export const Home = () => (
	<>
		<Breadcrumb>
			<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
			{/* <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">Library</Breadcrumb.Item>
			<Breadcrumb.Item active>Data</Breadcrumb.Item> */}
		</Breadcrumb>
		<CarouselComp />
	</>
);
