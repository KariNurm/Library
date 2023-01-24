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
      </div>
    </div>
  );
}

export default LandingPage;
