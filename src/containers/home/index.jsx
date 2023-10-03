import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Nasrin
          <br />
          Front end developer
        </h1>
      </div>
      <div className="home__content-me" style={{ display: "flex" }}>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateY(550px)",
          }}
          end={{
            transform: "translatex(0px)",
          }}
        >
          <div className="home__contact-me" >
            <button   onClick={handleNavigateToContactMePage}>Hire Me</button>
          </div>
        </Animate>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateY(550px)",
          }}
          end={{
            transform: "translatex(0px)",
          }}
        >
          <div className="home__contact-me">
            <button>
              <a href="../../images/bejourney.png" download={true} className="link-download">
                Download CV
              </a>
            </button>
          </div>
        </Animate>
      </div>
    </section>
  );
};
export default Home;
