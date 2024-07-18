import { Link } from "react-router-dom";
import { BsFilePerson } from "react-icons/bs";
import { BsGearFill } from "react-icons/bs";
import { FaRegFolderOpen } from "react-icons/fa";
import { MdPeople } from "react-icons/md";

import { RiUserStarLine } from "react-icons/ri";

import PagesLayout from "./layout/pagesLayout";
import { useEffect, useState } from "react";

const sideBarSections = [
  {
    name: "Skills",
    color: "#000",
    number: 5,
    icon: <BsGearFill size={30} color="#FD4Ef5" className="text-gray-800" />,
    path: "/dashboard/skills",
  },
  {
    name: "Experience",
    color: "#000",
    number: 5,
    icon: (
      <RiUserStarLine size={30} color="#10CAFF" className="text-gray-800" />
    ),
    path: "/dashboard/experience",
  },
  {
    name: "Projects",
    color: "#000",
    number: 5,
    icon: (
      <FaRegFolderOpen size={30} color="#FD4EF5" className="text-gray-800" />
    ),
    path: "/dashboard/projects",
  },
  {
    name: "Socials",
    color: "#000000",
    number: 5,
    icon: <MdPeople size={30} className="text-gray-800" />,
    path: "/dashboard/socials",
  },
];

const Dashboard = () => {
  return (
    <PagesLayout>
      <div className="w-[80%] relative">
        <div className="w-[80%] mx-auto ">
          <Link
            to="/dashboard"
            className="flex justify-between gap-5 p-4 rounded-lg border border-gray-900 shadow-md w-[70%] mx-auto hover:shadow-2xl"
          >
            <div className="flex justify-between align-middle items-center gap-4">
              <BsFilePerson size={30} className="text-gray-800" />
              <h2 className=" font-bold text-2xl text-gray-800">Bio</h2>
            </div>
            <p className="text-2xl text-gray-800 font-bold">50%</p>
          </Link>
        </div>

        {sideBarSections.map((eachsection, index) => {
          return (
            <div key={index} className="w-[80%] mx-auto flex flex-col my-4">
              <Link
                to={eachsection.path}
                style={{
                  color: eachsection.color,
                  border: "solid 1px",
                  borderColor: eachsection.color,
                }}
                className="flex justify-between gap-5 p-4 font-bold rounded-lg shadow-md w-[70%] mx-auto hover:shadow-2xl  cursor-pointer"
              >
                <div className="flex justify-between  align-middle items-center gap-4">
                  {eachsection.icon}
                  <h2 className="text-2xl text-gray-800">{eachsection.name}</h2>
                </div>{" "}
                <p className="text-2xl text-gray-800">{eachsection.number}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </PagesLayout>
  );
};

export default Dashboard;

