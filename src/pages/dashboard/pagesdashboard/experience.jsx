import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import PagesLayout from "../layout/pagesLayout";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [duration, setDuration] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddExperience = (e) => {
    e.preventDefault();
    if (company && role && duration) {
      if (editIndex !== null) {
        const updatedExperiences = experiences.map((item, index) =>
          index === editIndex ? { company, role, duration } : item
        );
        setExperiences(updatedExperiences);
        setEditIndex(null);
      } else {
        setExperiences([...experiences, { company, role, duration }]);
      }
      setCompany("");
      setRole("");
      setDuration("");
    }
  };

  const handleEditExperience = (index) => {
    setEditIndex(index);
    setCompany(experiences[index].company);
    setRole(experiences[index].role);
    setDuration(experiences[index].duration);
  };

  const handleDeleteExperience = (index) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
  };

  return (
    <PagesLayout>
      <div className="flex gap-10 items-start justify-start w-full p-10 mx-20">
        {/* <h2 className="text-2xl font-bold mb-6 text-center">Experience</h2> */}
        <div className="flex flex-col w-3/4 mx-auto">
          <div className="flex justify-center rounded-lg bg-gray-600 w-full text-white p-2">
            <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full">
              <form
                className="flex flex-col gap-4"
                onSubmit={handleAddExperience}
              >
                <div className="w-full">
                  <label
                    className="block mb-1 text-sm font-medium"
                    htmlFor="company"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="block w-full px-3 py-2 border rounded-md text-black"
                  />
                </div>

                <div className="w-full">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="role"
                  >
                    Role
                  </label>
                  <input
                    type="text"
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="block w-full px-3 py-2 border rounded-md text-black"
                  />
                </div>

                <div className="w-full">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="duration"
                  >
                    Duration
                  </label>
                  <input
                    type="text"
                    id="duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="block w-full px-3 py-2 border rounded-md text-black"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                  >
                    {editIndex !== null ? "Update" : "Add"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full flex justify-center rounded-lg bg-black text-white p-2 mt-4">
            <div className="bg-white text-gray-800 p-4 w-full">
              {experiences.map((experienceItem, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center mb-2 p-2 border-b border-gray-300"
                >
                  <div>
                    <span className="font-medium">
                      {experienceItem.company}
                    </span>
                    <div>{experienceItem.role}</div>
                    <div>{experienceItem.duration}</div>
                  </div>
                  <div className="flex gap-2">
                    <FaEdit
                      className="text-blue-500 cursor-pointer hover:text-blue-700"
                      onClick={() => handleEditExperience(i)}
                    />
                    <FaTrashAlt
                      className="text-red-500 cursor-pointer hover:text-red-700"
                      onClick={() => handleDeleteExperience(i)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PagesLayout>
  );
};

export default Experience;
