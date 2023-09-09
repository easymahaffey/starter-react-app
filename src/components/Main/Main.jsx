import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./main.css";
import Easy from "../../images/Easy3.jpg";
import DW from "../../images/DW.png";
import TA from "../../images/TriAge.png";
import html from "../../images/HTML5.png";
import css from "../../images/CSS3.jpg";
import react from "../../images/react-icon.jpg";
import javascript from "../../images/javascript_icon.png";
import jest from "../../images/jest_icon.jpg";
import jquery from "../../images/jquery-icon.jpg";
import axios from "../../images/axios.png";
import mongoose from "../../images/mongoose_icon.jpg";
import passport from "../../images/Passport_icon.png";
import node from "../../images/node_icon.png";
import mongo from "../../images/mongodb_icon.png";
import github from "../../images/github-logo_black.jpg";
import linkedin from "../../images/linkedin_logo.png";

export default function Main() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ctlg8bd",
        "template_udj3fqj",
        form.current,
        "5gy5XWlncZZ_d565N"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="main">
      <section className="hero">
        <h1 className="hero-title">EASY MAHAFFEY</h1>
        <div className="hero-skills">
          <h2> WEB DEVELOPER </h2>
          <h2> SOFTWARE ENGINEER </h2>
          <h2> ENTREPRENEUR </h2>
        </div>
        <div className="hero-buttons">
          <a href="#about">
            <button>ABOUT</button>
          </a>
          <a href="#projects">
            <button>PROJECTS</button>
          </a>
          <a href="#skills">
            <button>SKILLS</button>
          </a>
          <a href="#experience">
            <button>EXPERIENCE</button>
          </a>
        </div>
      </section>
      <section id="about" className="about">
        <img className="about-pic" src={Easy} alt="Easy's pic" />
        <div className="about-text">
          <h2>GETTING TO KNOW EASY</h2>
          <p>
            Dedicated software developer with a passion for building innovative web applications. With 3 years of experience in the industry, I have honed my skills in JavaScript, ES6, React, Redux, Express, Mongo, Node, Chai, Jest, HTML5, CSS3, Sass, jQuery, Bootstrap and Pug. My experience includes working in Agile environments, using Git, GitHub, Jira, and Confluence for efficient collaboration and project management.
          </p>
          <p>
            As a problem solver, I thrive in finding creative solutions and
            delivering high-quality code that meets business objectives. I have
            a strong ability to communicate complex technical concepts to both
            technical and non-technical stakeholders. My adaptability and time
            management skills allow me to effectively handle multiple projects
            and meet deadlines. USAF Veteran (09/1979 – 12/1988).{" "}
          </p>
        </div>
      </section>
      <section id="projects" className="projects">
        <h2>SOFTWARE PROJECTS</h2>
        <div className="project-images">
          <a href="https://github.com/easymahaffey/DW_Pug_A" target="_blank" rel="noopener noreferrer">
            <img className="projects-pic" src={DW} alt="Dreamweaver Project" />
          </a>
          <a href="https://github.com/easymahaffey/TriAge_Pug_N" target="_blank" rel="noopener noreferrer">
            <img className="projects-pic" src={TA} alt="TriAge Project" />
          </a>
        </div>
      </section>
      <section id="skills" className="skills">
        <h2>TECHNICAL CODING SKILLS</h2>
        <div className="skill-icons">
          <div className="icon_column icon_first_column">
            <img className="icons html" src={html} alt="html icon" />
            <img className="icons css" src={css} alt="css icon" />
            <img className="icons react" src={react} alt="react icon" />
          </div>
          <div className="icon_column icon_second_column">
            <img
              className="icons javascript"
              src={javascript}
              alt="javascript icon"
            />
            <img className="icons jest" src={jest} alt="jest icon" />
            <img className="icons jquery" src={jquery} alt="jquery icon" />
          </div>
          <div className="icon_column icon_third_column">
            <img className="icons axios" src={axios} alt="axios icon" />
            <img
              className="icons mongoose"
              src={mongoose}
              alt="mongoose icon"
            />
          </div>
          <div className="icon_column icon_fourth_column">
            <img
              className="icons passport"
              src={passport}
              alt="passport icon"
            />
            <img className="icons node" src={node} alt="node icon" />
            <img className="icons mongo" src={mongo} alt="mongo icon" />
          </div>
        </div>
      </section>
      <section id="experience" className="experience">
        <h2>PROFESSIONAL EXPERIENCE</h2>
        <div className="experience-section">
          <div className="experience-text">
            <h4>Software Development, Cybersecurity, and Network Services:</h4>
            <p>
              Currently, my interests are aligned with software development,
              cybersecurity, and network services. This involves a comprehensive
              understanding and practical experience in various aspects of these
              domains.
            </p>
            <h4>
              Pre-IPO Funding, Product & Service Development, and Marketing:
            </h4>
            <p>
              In the past, I have directed companies towards pre-IPO funding,
              new product development and marketing, and new service development
              and marketing. This includes formulating strategies and executing
              plans to achieve company objectives.
            </p>
            <h4>Consulting Services:</h4>
            <p>
              I have provided consulting services in network security, SaaS,
              storage networks, network security products, IT products and
              services, content delivery, telecom services, telecom expense
              management, IP CCTV, e-commerce, digital rights management, and
              fabless semi conductors.
            </p>
          </div>
          <div className="experience-text text2">
            <h2>Specialties:</h2>
            <h4>Sales Management:</h4>
            <p>
              - Distribution and VAR channels using single and two-tier models -
              OEMs, TELCOs, government, and Fortune 2000 accounts.
            </p>
            <h4>Product Management:</h4>
            <p>
              - Product development and marketing for Internet security and
              video services, test equipment, LAN products, WAN products,
              storage networks, digital rights management, and IP CCTV.
            </p>
            <h4>Technical Skills:</h4>
            <p>
              - Fullstack Software development (MERN) <br />
              - Lawful intercept, VoIP, ATM, xDSL <br />
              - LAN/WAN systems integration <br />- Secure military voice and
              data communications
            </p>
          </div>
        </div>
      </section>
      <section id="contact" className="contact">
        <div className="contact-header">
          <h2>CONTACT ME</h2>
          <div className="contact-header-right">
            <a href="tel:+602-576-1164">
              <p>Phone: 602-576-1164</p>
            </a>
            <a href="mailto: easymahaffey90@gmail.com">
              <p>E-mail: easymahaffey90@gmail.com</p>
            </a>
          </div>
        </div>
        <div className="contact-text">
          <div className="contact-icons">
            <img className="icons github" src={github} alt="github icon" />
            <img
              className="icons linkedin"
              src={linkedin}
              alt="linkedin icon"
            />
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <h3>Send a message</h3>
            <div className="form-row-1">
              <input type="text" name="from_name" placeholder="Name" />
              <input type="email" name="from_email" placeholder="E-mail" />
            </div>
            <div className="form-row-2">
              <textarea name="message" placeholder="Message" />
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
