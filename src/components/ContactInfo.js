import React from "react";

const ContactInfo = ({ title, content, icon }) => {
  return (
    <div className="relative">
      <div className="absolute left-11 -mt-1">
        <label className="text-gray-500 text-xs">{title}</label>
        <p className="text-sm -mt-0.5">{content}</p>
      </div>
      <div className="phone-contact flex">
        <div className="bg-white p-2.5 rounded-md shadow-xl">{icon}</div>
      </div>
    </div>
  );
};

export default ContactInfo;
