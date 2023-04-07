import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import gp from "../../Assets/Civic/gp.png";


function Civic() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Environmental <strong className="purple"> Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Green actions are happening in this section ...
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gp}
              isBlog={false}
              title="Google Project Management"
              description=" Google Project Management on Coursera is a comprehensive online course that provides learners with the knowledge and skills to effectively manage projects using Google's tools and methodologies. The course covers topics such as project planning, execution, monitoring, and closure, as well as effective communication, team collaboration, and risk management. Learners will also gain insights into Google's project management philosophy and best practices. The course is self-paced and offers a mix of instructional videos, interactive assignments, and real-world case studies to help learners develop practical project management skills using Google's approach."
          />
          </Col>    
          
    
        </Row>
      </Container>
    </Container>
  );
}

export default Civic;
