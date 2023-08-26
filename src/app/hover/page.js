"use client";
import React, { useState } from "react";
import ProjectDetails from "./componets/page.json";
import gsap from "gsap";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import Modal from "../componets/Modal";
function page() {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [projects, setProjects] = useState(ProjectDetails);
  const manageMouseEnter = (e, color, textColor, bgColor) => {
    const projectsDiv = e.target.closest(".projects");
    projectsDiv.classList.add("active");

    gsap.to(projectsDiv, {
      backgroundColor: bgColor,
      duration: "0.5",
    });
    gsap.to(e.target, {
      duration: "0.5",
    });
  };

  const manageMouseLeave = (e, color, textColor, bgColor) => {
    const projectsDiv = e.target.closest(".projects");
    projectsDiv.classList.remove("active");

    gsap.to(projectsDiv, {
      backgroundColor: "transparent",
      duration: "0.5",
    });
    gsap.to(e.target, {
      duration: "0.5",
    });
  };
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <div className="w-full bg-white">
      {projects.map((project, index) => {
        const { name, img, link, id, textColor, color, bgColor } = project;
        return (
          <div
            key={index}
            onMouseEnter={(e) => {
              manageMouseEnter(e, color, textColor, bgColor);
              setModal({ active: true, index });
            }}
            onMouseLeave={(e) => {
              manageMouseLeave(e, color, textColor, bgColor);
              setModal({ active: false, index });
            }}
          >
            <Link href={`/proejct-details/${id}`}>
              <div className="projects border-t-2 border-black">
                <div className="container mx-auto ">
                  <p className="2xl:text-9xl xl:text-8xl lg:text-7xl sm:text-5xl text-3xl py-6 font-extrabold relative z-10 w-fit uppercase flex ">
                    {name}
                    .<BsBoxArrowInUpRight />
                  </p>
                  {/* <Image src={img} alt="" width={1000} height={1000} /> */}
                </div>
              </div>
            </Link>
          </div>
        );
      })}
      <Modal modal={modal} projects={projects} />
    </div>
  );
}

export default page;
