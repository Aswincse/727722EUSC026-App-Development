import React from "react";
import { Container, Row, Col } from "reactstrap";

import courseImg01 from "../../assests/images/web-development.png";
import courseImg02 from "../../assests/images/kids-learning.png";
import courseImg03 from "../../assests/images/seo.png";
import courseImg04 from "../../assests/images/ui-ux.png";
import FreeCourseCard from "./FreeCourseCard";

import "./free-course.css";

const freeCourseData = [
  {
    id: "01",
    title: "Fun with Web Development",
    imgUrl: courseImg01,
    students: 150,
    rating: 4.8,
  },
  {
    id: "02",
    title: "Coding Adventures for Kids",
    imgUrl: courseImg02,
    students: 200,
    rating: 4.9,
  },

  {
    id: "03",
    title: "Exploring SEO Basics",
    imgUrl: courseImg03,
    students: 120,
    rating: 4.7,
  },

  {
    id: "04",
    title: "Design with Figma - Basics",
    imgUrl: courseImg04,
    students: 130,
    rating: 4.6,
  },
];

const FreeCourse = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Our Fun and Free Courses</h2>
          </Col>

          {freeCourseData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;
