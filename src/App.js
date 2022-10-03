import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineMailOpen, HiDownload } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { BsFillCalendarMinusFill } from "react-icons/bs";
import ContactInfo from "./components/ContactInfo";

const App = () => {
  return (
    <div className="container-adapt">
      <div className="logo">ChristianNomena</div>
      <main className="mt-80 grid grid-cols-12 lg:gap-8 justify-between mb-16">
        <div className="sticky col-span-12 lg:col-span-4">
          <section className="profile-info relative bg-white rounded-3xl pb-6">
            <div className="card-profile absolute -mt-40 left-1/2 transform -translate-x-1/2">
              <figure className="w-64 h-64">
                <img
                  className="rounded-3xl shadow-2xl"
                  src="./images/christiannomena.png"
                  alt="profile pic"
                />
              </figure>
            </div>
            <div className="about pt-28 text-center">
              <div className="mt-2 mb-4 space-y-3">
                <h2 className="text-2xl font-medium">Christian Razakamahery</h2>
                <h3 className="text-gray-400">Developer</h3>
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
                title="Téléphone"
                content="+261 34 29 060 58"
                icon={<IoPhonePortraitOutline className="text-red-600" />}
              />
              <hr className="text-gray-300 my-2.5" />
              <ContactInfo
                title="Adresse e-mail"
                content="christiangrzk@gmail.com"
                icon={<HiOutlineMailOpen className="text-cyan-600" />}
              />
              <hr className="text-gray-300 my-2.5" />
              <ContactInfo
                title="Emplacement"
                content="Antananarivo - Madagascar"
                icon={<MdLocationOn className="text-rose-400" />}
              />
              <hr className="text-gray-300 my-2.5" />
              <ContactInfo
                title="Âge"
                content="24 ans"
                icon={<BsFillCalendarMinusFill className="text-violet-400" />}
              />
            </div>
            <center>
              <button className="rounded-lg text-white px-4 py-2 mt-6 flex justify-center items-center bg-sky-600 hover:bg-sky-700 transition ease-out duration-300">
                <HiDownload className="mr-2" size="1.1rem" />
                Télécharger mon CV
              </button>
            </center>
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
