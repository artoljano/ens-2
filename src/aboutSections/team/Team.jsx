import { React, useEffect, useState } from "react";
import gsap from "gsap";
import "./team.css";

import Hero from "../../assets/hero/Hero.png";

export const teamData = [
  {
    id: 1,
    name: "Emily Carter",
    position: "Marketing Manager",
    image: require("../../assets/hero/Hero.png"),
  },
  {
    id: 2,
    name: "James Reynolds",
    position: "Software Engineer",
    image: require("../../assets/about/test-person.jpg"),
  },
  {
    id: 3,
    name: "Sophia Bennett",
    position: "Graphic Designer",
    image: require("../../assets/about/test-person1.webp"),
  },
  {
    id: 4,
    name: "Liam Mitchell",
    position: "Project Coordinator",
    image: require("../../assets/about/test-person2.jpg"),
  },
  {
    id: 5,
    name: "Olivia Turner",
    position: "Customer Support Lead",
    image: "",
  },
  {
    id: 6,
    name: "Noah Harris",
    position: "Financial Analyst",
    image: "",
  },
  {
    id: 7,
    name: "Isabella Moore",
    position: "HR Specialist",
    image: "",
  },
];

const bgPositions = {
  p1: "0 0",
  p2: "0 25%",
  p3: "0 50%",
  p4: "0 75%",
  p5: "0 100%",
};

function Team() {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered item index

  // Mouse enter handler
  const handleMouseEnter = (index) => {
    setHoveredIndex(index); // Set the hovered index when a product is hovered
    console.log(index);
  };

  // Mouse leave handler
  const handleMouseLeave = () => {
    setHoveredIndex(null); // Reset hovered index when mouse leaves
  };

  return (
    <section className="ens-team section__padding">
      <div className="ens-team_wrapper">
        <ul className="ens-team_list">
          {teamData.map((member, id) => (
            <li
              key={member.id}
              onMouseEnter={() => handleMouseEnter(member.id)} // Set the hover state for the current product
              onMouseLeave={handleMouseLeave}
              className="ens-team_item"
            >
              <span className="ens-team_item-position">{member.position}</span>

              <img
                // Reset hover state on mouse leave
                className="ens-team_list-image"
                style={{
                  opacity: hoveredIndex === member.id ? 1 : 0,
                  transition: "1s ease",
                }}
                src={member.image}
                alt=""
              />

              <span className="ens-team_item-name">{member.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Team;
