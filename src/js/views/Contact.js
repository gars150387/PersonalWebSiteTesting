import React from "react";
import { Form, Row, Container, Col, Button } from "react-bootstrap";

export const Contact = () => {
	return (
		<Container>
			<h1 className="text-center">Contact Me</h1>
			<p className="text-center">
				Do you have any questions? Please do not hesitate to contact us directly. <br /> Our team will come back
				to you within a matter of hours to help you.
			</p>
			<Row>
				<Col xs={6} className="m-auto">
					<Form>
						<Form.Group
							className="mb-3 mt-4 border-white borderBottom-black-solid"
							controlId="exampleForm.ControlInput1">
							{/* <Form.Label className="borderBottom-solid borderBottom-black ">Email address</Form.Label> */}
							<Form.Control type="email" placeholder="name@example.com" />
						</Form.Group>
						<Form.Group
							className="mb-3 border-white borderBottom-black-solid"
							controlId="exampleForm.ControlTextarea1">
							{/* <Form.Label className="borderBottom-solid borderBottom-black ">
								Please leave us your comment
							</Form.Label> */}
							<Form.Control as="textarea" rows={3} placeholder="Leave your comment here" />
						</Form.Group>
						<Button className="mt-2 mb-2 item-end bg-success" style={{ display: "flex", right: "50px" }}>
							Submit
						</Button>{" "}
					</Form>
				</Col>
			</Row>
		</Container>
	);
};
