import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import merch from "../../Assets/International/merch.png";
import travel from "../../Assets/International/travel.png";


function International() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Design <strong className="purple"> Skills </strong>
        </h1>
        <p style={{ color: "white" }}>
        Design is an increasingly crucial and in-demand aspect of various industries as the digital world advances. Fortunately, my lifelong passion for art has led me to hone my skills and specialize in this field, which I consider a natural extension of my abilities. My background in art has given me a profound understanding of design principles and techniques, allowing me to create visually stunning and innovative designs. I find the creative aspect of design work to be immensely fulfilling and enjoyable, and it is a true passion of mine. Continuously seeking new ways to push the boundaries of what is possible in this dynamic and exciting field, I am dedicated to delivering exceptional design solutions to clients.
        </p>
        <h1 className="project-heading">
          What i can <strong className="purple"> Do </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={merch}
              isBlog={false}
              title="Merch design"
              description="Over the past three years, my fervent interest in fashion has led me to actively pursue merch design. My primary focus as a designer is to express my thoughts and ideas through apparel, encompassing a diverse range of products such as realistic 2D and 3D clothing including <strong className="purple"> varsity jackets, bombers, hoodies, t-shirts, </strong> and other merchandise. During this time, I have gained valuable experience by completing numerous freelance design projects, in addition to creating custom clothing for local schools. To view a selection of my designs and evaluate their quality, I invite you to explore my portfolio on Art Station.
              artstationLink={"https://badrsonicsaad.artstation.com/projects/Zal2m1"}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="graphic/ poster design"
              description="As an artist from a young age, I have always had a love for drawing, and my passion for poster design has reignited that love. My primary goal as a designer is to create visually striking posters that are captivating and engaging to my audience. Through the use of tools like Procreate on iPad with Apple Pencil and Photoshop, I am able to bring my ideas to life with ease. Working as a designer for ECC Bureau des Arts, ECC Bureau des Sports, and ECC Junior Entreprises; this has given me the opportunity to gain valuable experience in designing posters and graphics for various events. For me, design is about more than just making something look good, it's about telling a story and evoking emotion."           
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="logo design"
              description="Logos have always fascinated me for their ability to instantly communicate a brand's personality, values, and mission. Using design software like Adobe Illustrator and Procreate, I aim to create logos that are visually appealing and conceptually strong. With years of freelancing experience, I have honed my ability to identify the unique elements that set each brand apart and translate them into a memorable visual identity. In my logo design process, I also strive to tell a compelling brand story and build a strong brand identity."           
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Community management"
              description="In today's world, social media has become a ubiquitous tool used by people all over the globe. Traditional forms of advertising such as TV or outdoor ads are no longer as effective. Building a strong digital presence on social media is now crucial for companies and startups, as it provides a cost-effective way to gain popularity through free advertising. As someone who is passionate about this field, I have worked as a social media manager and continuously strive to improve my skills. With my design expertise, I am eager to further expand my knowledge in social media management."           
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="UI/UX design"
              description="UI and UX design play a pivotal role in crafting compelling and user-centric digital experiences. As a design professional, I have honed my expertise in this critical field through my completion of the Google UX Design Professional Certificate, which has provided me with a solid foundation and in-depth understanding of best practices. Furthermore, I have actively participated in a UI/UX design competition, the L'Oréal Brandstorming event, showcasing my skills and creativity in creating innovative designs. You can view examples of my work on my GitHub profile, highlighting my commitment to staying updated with the latest trends and techniques in UI and UX design."           
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Sponsorship proposal design"
              description="Sponsorship proposal or business development folders are a creative tool that I utilize to captivate the minds of potential clients. I have had extensive experience in creating these folders as part of my involvement with the ECC Bureau des Sports, where we regularly organize events and seek sponsorship. These folders are carefully crafted to include various elements such as event regulations, invitations, badges, event posters, and event structure. The goal is to create a visually appealing and comprehensive package that effectively communicates the details and benefits of the event, enticing sponsors to participate and support our initiatives. Through my experience, I have developed skills in designing these folders to be engaging and persuasive, showcasing the value and opportunities of the events we organize to potential sponsors and participants."           
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default International;
