import React from "react";
import "./LandingPage.css";
import logo from "./images/green-logo.png";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="logo-container artwork-container">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <div className="text-container">
        <h1 className="heading">Welcome</h1>
        <p className="text-justify">
          Welcome to our library! We offer a vast collection of books,
          periodicals, and other materials to help you learn, research, and
          explore. Our knowledgeable staff is here to assist you in finding the
          resources you need and our comfortable reading areas provide the
          perfect space for quiet study or leisurely reading. We also offer a
          variety of programs and events, including author talks, book clubs,
          and workshops, to help you connect with other readers and expand your
          knowledge.
        </p>{" "}
        <p>
          If you have an account with us, you can easily borrow books,
          audiobooks, and other materials by logging into our online catalog.
          You can also reserve items that are currently checked out, and receive
          notifications when they become available. If you don't have an
          account, you can sign up for one online or in-person. With an account,
          you can also take advantage of our digital resources, such as e-books,
          online magazines, and research databases. We are committed to
          providing you with the resources you need, whether you prefer physical
          books or digital formats. We look forward to serving you!
        </p>
        <h3 className="our-mission">Our Mission</h3>
        <p>
          The Green Library has been in operation since 2001 in the city of
          Oulu, Finland. Our library is a vital community resource, serving
          patrons of all ages and backgrounds. We have a wide range of
          collections, resources, and services that cater to the diverse needs
          and interests of our patrons. Our mission is to provide free access to
          information and promote lifelong learning, and we strive to create a
          welcoming and inclusive environment for all.
        </p>
      </div>
      <div className="landing-image"></div>
      <div className="cards-container">
        <div className="card contact-info">
          <h2>Contact</h2>
          <p> Phone: 045-1234567 </p>
          <p> Email: contact@thegreenlibrary.com </p>{" "}
          <p> Address: The Green Library </p>
          <p> Keskustantie 10 </p>
          <p> 90100, Oulu </p>
        </div>
        <div className="card opening-hours-card-2">
          <h2>Opening Hours</h2>
          <p> Mon-Thu: 09:00-20:00 </p>
          <p> Friday: 09:00-18:00 </p>
          <p> Saturday: 12:00-18:00 </p>
          <p> Sunday: Closed </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
