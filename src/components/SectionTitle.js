import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <>
      <h3 className="text-2xl">{title}</h3>
      <hr className="bg-gray-800" />
    </>
  );
};

export default SectionTitle;
