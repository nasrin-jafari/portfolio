import { Line } from "rc-progress";
import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { PageHeaderContent } from "../../components";
import "./styles.scss";
import {skillsData} from '../../data/data'

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__content-wrapper">
        <div className="skills__content-wrapper__inner-content">
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
            <h3 className="skills__content-wrapper__inner-content__category-text">
              frontend developer
            </h3>

            <div className="skills__content-wrapper__inner-content__progressbar-container">
              {skillsData.map((skillItem) => (
                <AnimateKeyframes
                  play
                  duration={1}
                  keyframes={["opacity : 1", "opacity : 0"]}
                  iterationCount="1"
                >
                  <div className="progressbar-wrapper" key={skillItem.id}>
                    <p>{skillItem.name}</p>
                    <Line
                      percent={skillItem.value}
                      strokeWidth="2"
                      strokeColor="var(--yellow-theme-main-color)"
                      trailWidth="2"
                      strokeLinecap="square"
                    />
                  </div>
                </AnimateKeyframes>
              ))}
            </div>
          </Animate>
        </div>
    
      </div>
    </section>
  );
};
export default Skills;
