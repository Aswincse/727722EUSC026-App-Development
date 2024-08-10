import React, { Fragment } from "react";
import Header from "../Components/Header/Header";
import HeroSection from "../Components/Hero-Section/HeroSection";
import CompanySection from "../Components/Company-section/Company";
import AboutUs from "../Components/About-us/AboutUs";
import Courses from "../Components/Courses-section/Courses";
import ChooseUs from "../Components/Choose-us/ChooseUs";
import Features from "../Components/Feature-section/Features";
import FreeCourse from "../Components/Free-course-section/FreeCourse";
import Testimonials from "../Components/Testimonial/Testimonials";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <HeroSection />
      <CompanySection />
      <AboutUs />
      <Courses />
      <ChooseUs />
      <Features />
      <FreeCourse />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
