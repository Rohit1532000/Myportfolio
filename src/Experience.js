import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<i class="fa-solid fa-graduation-cap"></i>} 
        >
          <h3 className="vertical-timeline-element-title">
            D.K Carmel School, Ara, Bihar
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Matriculation Degree
          </h4>
          <p> CBSE</p>
        </VerticalTimelineElement>
        
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2017"
         iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<i class="fa-solid fa-graduation-cap"></i>} 
          
        >
          <h3 className="vertical-timeline-element-title">
            Anjabit Singh College, Bikramganj, Bihar
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Intermediate's Degree
          </h4>

          <p> Science</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<i class="fa-solid fa-graduation-cap"></i>} 
          
        >
          <h3 className="vertical-timeline-element-title">
            RKDF University, Bhopal, Madhya Pradesh
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree(BCA)
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<i class="fa-solid fa-briefcase"></i>} 
          
        >
          <h3 className="vertical-timeline-element-title">
            Front End Developer 
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            New Delhi, India
          </h4>
          <p>Developed the Front End infrastructure for 3 projects.</p>
        </VerticalTimelineElement>

        
      </VerticalTimeline>
    </div>
  );
}

export default Experience;