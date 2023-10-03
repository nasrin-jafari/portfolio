import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";
import { BsFiletypeHtml } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { PageHeaderContent } from "../../components";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { personalDetails } from "../../data/data";

const jobSummary =
  "I'm nasrin, the one who like challenge and excitement. I like to experience new things and acquire a lot of skills .I'm learning react js, and I would like to be a successful programmer in the future and still interested in my work.";
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={0}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i} style={{ listStyle: "" }}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={0}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <IoLogoJavascript
                  size={60}
                  color="var( --yellow-theme-main-color)"
                />
              </div>
              <div>
                <FaReact size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <TbWorldCode
                  size={60}
                  color="var( --yellow-theme-main-color)"
                />
              </div>
              <div>
                <BsFiletypeHtml
                  size={60}
                  color="var( --yellow-theme-main-color)"
                />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
