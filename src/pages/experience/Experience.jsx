import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Microsoft from "../../assets/msft.png"
import './Experience.css'

const Experience = () => {
  return (

    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2011 - present"
          iconStyle={{ size: '40px', background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<img className="test" src={Microsoft} alt="msft"/>}
        >
          <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Microsoft</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  )
}

export default Experience