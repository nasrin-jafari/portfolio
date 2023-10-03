import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Social media"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Be in touch with me</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="social">
            <a href="https://www.linkedin.com/in/nasrin-jafri" target="_blank">
              <FaLinkedinIn size={40} color="#FFD700" />
            </a>
            <a href="https://t.me/Naasiiiin" target="_blank">
              <FaTelegramPlane size={40} color="#FFD700" />
            </a>
            <a href="mailto:nasrin.jafari778@gmail.com" target="_blank">
              <HiMail size={40} color="#FFD700" />
            </a>

          </div>
        </Animate>
      </div>
    </section>
  );
};
export default Contact;
