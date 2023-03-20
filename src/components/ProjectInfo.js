import React from "react";
import SectionTitle from "./SectionTitle";

const ProjectInfo = ({ title, year, frontend, backend, description }) => {
  return (
    <>
      <SectionTitle title={title} />
      <ul className="mt-2 space-y-2.5">
        <li>
          <span className="font-bold">Name : </span> {title}
        </li>
        <li>
          <span className="font-bold">Year : </span> {year}
        </li>
        <li>
          <span className="font-bold">Frontend : </span> {frontend}
        </li>
        <li>
          <span className="font-bold">Backend : </span> {backend}
        </li>
        <li className="text-justify">
          <span className="font-bold">Description : </span> {description}
        </li>
      </ul>
    </>
  );
};

export default ProjectInfo;
