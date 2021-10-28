import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export const NavbarComp = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home" position="top-start">
					<Link to="/">Gustavo Rodriguez</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav" position="top-end">
					<Nav className="mr-5">
						<Link to="/aboutMe">
							<Nav.Link href="#aboutMe">About Me</Nav.Link>
						</Link>
						<Link to="/projects">
							<Nav.Link href="#projects">Projects</Nav.Link>
						</Link>
						<Nav>
							<Link to="/certifications">
								<Nav.Link href="#certifications">Certifications</Nav.Link>
							</Link>
							<Link to="/contact">
								<Nav.Link href="#contact">Contact</Nav.Link>
							</Link>
						</Nav>
						<NavDropdown title="GitHub" id="collasible-nav-dropdown">
							<NavDropdown.Item href="https://github.com/WoodlyB/Gustavo-and-Woodly-project/tree/main/src/js/views">
								Deyo Project
							</NavDropdown.Item>
							<NavDropdown.Item href="https://github.com/gars150387/Contact_list_Flux_API_BasedOnArticle">
								Contact List
							</NavDropdown.Item>
							<NavDropdown.Item href="https://github.com/gars150387/todo-list-in-landing-page-react-flux">
								To-Do List
							</NavDropdown.Item>
							<NavDropdown.Item href="https://github.com/gars150387/simple-counter-exercise-react-hook">
								Simple Counter Exercise
							</NavDropdown.Item>
							{/* <NavDropdown.Divider /> */}
							<NavDropdown.Item href="https://github.com/gars150387/random-excuse-exercise-javascript">
								Random Excuse Exercise
							</NavDropdown.Item>
							<NavDropdown.Item href="https://github.com/gars150387/random-card-generated">
								Random Card Generator Exercise
							</NavDropdown.Item>
							<NavDropdown.Item href="https://github.com/gars150387/traffic-light-exercise-react">
								Traffic Light Exercise
							</NavDropdown.Item>
							<NavDropdown.Item href="https://github.com/gars150387/Appointment_App">
								Appointment App from LinkedIn Learning
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
