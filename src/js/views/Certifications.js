import React from "react";
import { CardComp } from "../component/CardComp";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Certifications = item => {
	return (
		<>
			<Row className="justify-content-center">
				<Col className="bg-secundary b-solid b-balck text-center">
					<Link to="/certifications">
						<i className="fas fa-list-ul" style={{ width: "15px", height: "15px", marginRight: "10px" }} />
					</Link>
					<Link to="/certifications/square">
						<i className="fas fa-th-large" style={{ width: "15px", height: "15px", marginLeft: "5px" }} />
					</Link>
				</Col>
			</Row>
			<CardComp key={item.title} />
		</>
	);
};
