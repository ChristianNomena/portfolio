import React from "react";

const SkillMeasure = ({ width, title, color }) => {
  return (
    <>
      <div class="mt-2 mb-1 text-base text-gray-600">{title}</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div className={`w- ${width} ${color} h-2.5 rounded-full`}></div>
      </div>
    </>
  );
};

export default SkillMeasure;
