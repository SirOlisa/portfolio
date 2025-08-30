import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="section">
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title">About Me</h2>
        </Col>
      </Row>
      <Row>
        <Col lg={8} className="mx-auto">
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-5" style={{ textAlign: 'justify' }}>
              <p className="lead">
                Hello! I'm Madubuike Olisa, a DevOps Engineer with a deep passion for automation, cloud computing, and building scalable, efficient infrastructure.
              </p>

              <h4 className="mt-4">Learning Journey</h4>
              <p>
                After dipping my toes into all sorts of different tech niches, I finally stumbled into DevOps and I was immediately hooked. I dove headfirst into self-learning, binging tons of YouTube tutorials from awesome creators like Abhishek Veeramalla, TechWorld with Nana, and freeCodeCamp, and getting my hands dirty with platforms like KodeKloud. After a few months of soaking it all up, I decided to level up and really cement what I’d learned, so I enrolled in the Tech365 DevOps program to go even deeper and keep the momentum going
              </p>
              <p>
                I'm actively honing my skills through hands-on projects and structured learning initiatives. Currently, I'm completing the #100DaysOfDevOps challenge led on KodeKloud, which has provided me with intensive, practical experience in core DevOps tools and methodologies.
              </p>
              <p>
                My goal is to master the ever-evolving world of Cloud-Native technology, building resilient, scalable cloud systems worldwide
              </p>
              <h4 className="mt-4"> My DevOps Philosophy</h4>
              <p>
                I firmly believe that continuous improvement, automation, and collaboration forms the very bedrock of DevOps and are non-negotiables. I am committed to applying my knowledge to real-world projects, optimizing workflows for peak efficiency, and continuously learning about emerging technologies.
              </p>

              <h4 className="mt-4">Knowledge Sharing</h4>
              <p>
                I actively document my learning journey and insights on  <a href="https://www.linkedin.com/in/madubuikeolisa/" target="_blank" rel="noopener noreferrer"><u>LinkedIn</u></a>, where I share challenges I encounter in the DevOps world and other things DevOps related.
              </p>

              <h4 className="mt-4">Beyond the screen</h4>
              <p>
                When I'm not building and automating, I enjoy exploring good food, participating in sports, watching football and keeping fit. I'm also a massive comic book & anime fan!
              </p>

              <h4 className="mt-4">Let’s Connect</h4>
              <p>
                I'm always open to discussing collaboration and new opportunities in DevOps and cloud engineering. Feel free to reach out to me at <a href="mailto:youfoundolisa@gmail.com">youfoundolisa@gmail.com</a>.
              </p>
            </Card.Body>



          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;