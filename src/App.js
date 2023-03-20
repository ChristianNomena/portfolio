import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineMailOpen, HiDownload } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { BsFillCalendarMinusFill } from "react-icons/bs";
import ContactInfo from "./components/ContactInfo";
import MenuTitle from "./components/MenuTitle";
import ResumePage from "./pages/ResumePage";
import MobileDevelopmentPage from "./pages/MobileDevelopmentPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("resume");

  return (
    <div className="container-adapt">
      <div className="logo mt-4 grid grid-cols-12 sticky">
        <a
          className="col-span-12 lg:col-span-4 lg:-ml-6 lg:text-center font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-300 to-blue-400"
          href="/"
        >
          ChristianNomena
        </a>
      </div>
      <main className="mt-64 grid grid-cols-12 gap-8 justify-between mb-12">
        <div className="col-span-12 lg:col-span-4">
          <section className="profile-info bg-white rounded-3xl pb-6 sticky top-0">
            <div className="card-profile absolute -mt-40 left-1/2 transform -translate-x-1/2">
              <figure className="w-64 h-64">
                <img
                  className="rounded-3xl shadow-2xl"
                  src="./images/ChristianNomena.png"
                  alt="profile pic"
                />
              </figure>
            </div>
            <div className="about pt-28 text-center">
              <div className="mt-2 mb-4 space-y-3">
                <h2 className="text-2xl font-medium">Christian Razakamahery</h2>
                <h3 className="text-gray-400">Software Engineer</h3>
              </div>
              <div className="flex space-x-3 justify-center">
                <a
                  href="https://www.facebook.com/christian.gracerazakamahery.9/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF
                    className="text-blue-500 bg-gray-100 p-2.5 rounded-lg cursor-pointer transition ease-linear duration-200 hover:text-white hover:bg-sky-500"
                    size="2.4rem"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/nomena-christian-razakamahery-8844b2179/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn
                    className="text-sky-600 bg-gray-100 p-2.5 rounded-lg cursor-pointer transition ease-linear duration-200 hover:text-white hover:bg-sky-500"
                    size="2.4rem"
                  />
                </a>
                <a
                  href="https://github.com/ChristianNomena"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub
                    className="bg-gray-100 p-2.5 rounded-lg cursor-pointer transition ease-linear duration-200 hover:text-white hover:bg-sky-500"
                    size="2.4rem"
                  />
                </a>
              </div>
            </div>
            <div className="contact bg-gray-100 mx-5 mt-7 p-7 rounded-xl">
              <ContactInfo
                title="Phone"
                content="+261 34 29 060 58"
                icon={<IoPhonePortraitOutline className="text-red-600" />}
              />
              <hr className="text-gray-300 my-2.5" />
              <ContactInfo
                title="E-mail"
                content="christiangrzk@gmail.com"
                icon={<HiOutlineMailOpen className="text-cyan-600" />}
              />
              <hr className="text-gray-300 my-2.5" />
              <ContactInfo
                title="Location"
                content="Antananarivo - Madagascar"
                icon={<MdLocationOn className="text-rose-400" />}
              />
              <hr className="text-gray-300 my-2.5" />
              <ContactInfo
                title="Age"
                content="25 years"
                icon={<BsFillCalendarMinusFill className="text-violet-400" />}
              />
            </div>
            <center>
              <button className="rounded-lg text-white px-4 py-2.5 mt-6 flex justify-center items-center bg-sky-600 hover:bg-sky-700 transition ease-out duration-300">
                <HiDownload className="mr-1.5 -mt-0.5" size="1.1rem" />
                Download CV
              </button>
            </center>
          </section>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <section className="project-info relative bg-white rounded-3xl pb-6 h-full">
            <MenuTitle setCurrentPage={setCurrentPage} />
            <div className="mx-6 my-2">
              {currentPage === "resume" && <ResumePage />}
              {currentPage === "web" && <div></div>}
              {currentPage === "mobile" && <MobileDevelopmentPage />}
              {currentPage === "video-game" && <div></div>}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
