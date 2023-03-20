import React from "react";
import SectionTitle from "../components/SectionTitle";
import SkillMeasure from "../components/SkillMeasure";

const ResumePage = () => {
  return (
    <div className="resume-page space-y-8">
      <div>
        <SectionTitle title="About" />
        <ul className="my-4 space-y-2.5">
          <li>
            Developer with <span className="font-bold">3 years</span> of
            experience
          </li>
          <li>
            Code principally with{" "}
            <span className="font-bold">JavaScript, Python and Dart</span>
          </li>
          <li>
            <span className="font-bold">Mobile</span> technology{" "}
            <span className="font-bold">passionate</span>
          </li>
          <li>
            <span className="font-bold">User experience</span> is the priority
          </li>
        </ul>
      </div>
      <div>
        <SectionTitle title="Technologies" />
        <SkillMeasure width="w-12/12" title="Flutter" color="bg-sky-500" />
        <SkillMeasure
          width="w-11/12"
          title="React & React Native"
          color="bg-red-400"
        />
        <SkillMeasure
          width="w-10/12"
          title="Tailwind & Bootstrap"
          color="bg-indigo-400"
        />
        <SkillMeasure
          width="w-11/12"
          title="Django & Flask"
          color="bg-stone-600"
        />
        <SkillMeasure
          width="w-10/12"
          title="Unity & Godot"
          color="bg-orange-400"
        />
      </div>
      <div>
        <SectionTitle title="Soft Skills" />
        <SkillMeasure width="w-9/12" title="Adaptation" color="bg-sky-500" />
        <SkillMeasure width="w-10/12" title="creativity" color="bg-red-400" />
        <SkillMeasure width="w-12/12" title="Team work" color="bg-indigo-400" />
        <SkillMeasure width="w-11/12" title="Curiosity" color="bg-stone-600" />
      </div>
      <div>
        <SectionTitle title="Languages" />
        <SkillMeasure width="w-12/12" title="Malagasy" color="bg-sky-500" />
        <SkillMeasure width="w-11/12" title="English" color="bg-red-400" />
        <SkillMeasure width="w-11/12" title="French" color="bg-indigo-400" />
      </div>
    </div>
  );
};

export default ResumePage;
