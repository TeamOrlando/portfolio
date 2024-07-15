import { GrOverview } from "react-icons/gr";
import { BsFilePerson } from "react-icons/bs";
import { BsGearFill } from "react-icons/bs";
import { FaRegFolderOpen } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { RiUserStarLine } from "react-icons/ri";

const links = [
  { name: "Overview", path: "/dashboard", icon: <GrOverview size={50} /> },
  { name: "Bio", path: "/dashboard/bio", icon: <BsFilePerson size={50} /> },
  { name: "Skills", path: "/dashboard/skills", icon: <BsGearFill size={50} /> },
  {
    name: "Experience",
    path: "/dashboard/experience",
    icon: <RiUserStarLine size={50} />,
  },
  {
    name: "Projects",
    path: "/dashboard/projects",
    icon: <FaRegFolderOpen size={50} />,
  },
  { name: "Socials", path: "/dashboard/socials", icon: <MdPeople size={50} /> },
];

const Sidebar = () => {
  const location = useLocation();
  return (
    <>
      <div className="fixed h-[100vh] w-[10%] bg-transparent top-0 left-0 z-50 p-4">
        <div className="h-[100%] w-full border rounded-2xl p-4 shadow-xl bg-black text-gray-400 flex flex-col align-middle items-center justify-between">
          <div className="flex flex-col align-middle items-center gap-10">
            {links.map((link, index) => {
              return (
                <Link
                  to={link.path}
                  key={index}
                  className={`flex flex-col justify-center align-middle items-center hover:text-gray-200 cursor-pointer ${
                    location.pathname === link.path ? "text-gray-200" : ""
                  }`}
                >
                  {link.icon}
                  <p className="text-sm mt-2">{link.name}</p>
                </Link>
              );
            })}
          </div>

          <button className="flex justify-between align-middle items-center gap-2 hover:text-gray-200">
            <RiLogoutCircleRLine size={15} />
            <p className="text-xs">Logout</p>
          </button>
        </div>
      </div>
      <div className="w-[10%] h-[100vh] bg-transparent" />
    </>
  );
};

export default Sidebar;
