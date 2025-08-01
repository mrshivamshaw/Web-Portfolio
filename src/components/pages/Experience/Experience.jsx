import React from "react";
import student from "../../../Assests/teacher-svgrepo-com.svg";
import { motion } from "framer-motion";
import gpt from '../../../Assests/experience/GPT-Logo.png'
import gdgc from '../../../Assests/experience/gdgc.png'
import smt from '../../../Assests/experience/samllltt.png'



import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  const ImageIcon = ({ imgSrc }) => (
    <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
      <img
        src={imgSrc}
        alt="Timeline event"
        className="w-full h-full object-cover"
      />
    </div>
  );
  return (
    <div
      id="Experience"
      className="mainBg border-b-2 border-white/20 py-10 overflow-x-hidden h-auto  relative z-30 gap-6 flex flex-col justify-center items-center px-3"
    >
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.2, duration: 1 },
        }}
        className="sideCircle absolute -right-[55vh] top-[8vh] w-[40vw] h-[75.5vh] rounded-full z-30 bg-[#ff014f] duration-500 ease-linear"
      ></motion.div>

      <div className="z-30 flex flex-col justify-center items-center gap-2 text-5xl font-bold">
        <div className="flex items-center gap-2 heading rounded-lg">
          <img src={student} alt="admi" className="h-[7vh] w-auto" />
          <h1 className=" lg:text-[7vh] text-[#fff] md:text-[7vh] text-2xl font-bold tracking-wide mb-2">
            My <span className="text-[#fff]">Experience</span>
          </h1>
        </div>
      </div>
      <h1 className="text-center xl:text-6xl lg:text-6xl md:text-6xl text-4xl text-white font-semibold -mt-3">
        My Tech <span className="text-gradient text-center">Journey</span>.
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#ff014f", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #ff014f" }}
          date="Aug 2024 — July 2025"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<ImageIcon imgSrc={gpt} />} // Replace with actual image URL
        >
          <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">
            GrowthPurple Technologies (Remote)
          </h4>
          <p>
            • Built an event-driven automation system with Django and React, cutting manual workflows by 65%.<br />
            • Developed <strong>PlutonAI</strong>, a GenAI-powered coding SaaS that generates full-stack applications with multi-routing via Traefik, containerized using Docker. Optimized the app generation process, achieving a 50% improvement in speed.<br />
            • Launched <strong>FirstRound</strong>, an AI interview tool with live video, auto-transcription, and BI dashboards—boosting HR decisions by 55%.
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#242323", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #242323" }}
          date="Sep 2024 - Dec 2024"
          iconStyle={{ background: "#242323", color: "#fff", }}
          icon={<ImageIcon imgSrc={smt}/>}
        >
          <h3 className="vertical-timeline-element-title">
            Freelancer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Small Town Talks
          </h4>
          <p>
            • Developed 3 websites for clients and the agency itself.
            <br />• Worked on end-to-end website development and deployment.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#ff014f", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #ff014f" }}
          date="Sep 2023 - Sep 2024"
          iconStyle={{ background: "#fff", color: "#fff" }}
          icon={<ImageIcon imgSrc={gdgc}/>}
        >
          <h3 className="vertical-timeline-element-title">
            GDSC CP Facilitator
          </h3>
          <p>
            • Organized and led coding sessions for Google Developer Student
            Club.
            <br />
            • Helped students prepare for competitive programming challenges.
            <br />• Conducted workshops and problem-solving events.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Sep 2024 - present"
          contentStyle={{ background: "#242323", color: "#fff" }}
          iconStyle={{ background: "#fff", color: "#fff" }}
          icon={<ImageIcon imgSrc={gdgc}/>}
          contentArrowStyle={{ borderRight: "7px solid  #242323" }}
        >
          <h3 className="vertical-timeline-element-title">GDGC CP Lead</h3>
          <p>
            • Led the Competitive Programming team at GDGC AEC.
            <br />
            • Mentored students in problem-solving and algorithms.
            <br />• Hosted hackathons and CP contests for the community.
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
};

export default Education;
