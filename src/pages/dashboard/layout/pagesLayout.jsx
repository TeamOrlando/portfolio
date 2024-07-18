/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/images/dopel1.png";
import { motion } from "framer-motion";

const PagesLayout = ({ children }) => {
  const location = useLocation();
  const path = location.pathname.split("/dashboard/")[1];

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const slideInBottomVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full h-full flex gap-10 justify-center align-middle items-center p-20">
      <div className="relative">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={slideInLeftVariants}
          className="text-3xl h-full font-bold fixed top-40 mb-6"
        >
          {!path ? "Overview" : capitalizeFirstLetter(path)}
        </motion.h1>
      </div>
      <div className="relative flex flex-col w-full justify-center items-center gap-10">
        {!path && (
          <Link
            to="/preview"
            className="absolute right-0 top-0 p-4 bg-gray-800 text-white shadow-lg hover:bg-black hover:shadow-2xl rounded-xl"
          >
            View Portfolio
          </Link>
        )}
        {children}

        <motion.img
          initial="hidden"
          animate="visible"
          variants={slideInBottomVariants}
          src={logo}
          alt="logo"
          className="h-[100px] mt-20"
        />
      </div>
    </div>
  );
};

export default PagesLayout;
