import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import PagesLayout from "../layout/pagesLayout";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [technology, setTechnology] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddProject = (e) => {
    e.preventDefault();
    if (projectName && description && technology && startDate && endDate) {
      if (editIndex !== null) {
        const updatedProjects = projects.map((item, index) =>
          index === editIndex
            ? { projectName, description, technology, startDate, endDate }
            : item
        );
        setProjects(updatedProjects);
        setEditIndex(null);
      } else {
        setProjects([
          ...projects,
          { projectName, description, technology, startDate, endDate },
        ]);
      }
      setProjectName("");
      setDescription("");
      setTechnology("");
      setStartDate("");
      setEndDate("");
    }
  };

  const handleEditProject = (index) => {
    setEditIndex(index);
    setProjectName(projects[index].projectName);
    setDescription(projects[index].description);
    setTechnology(projects[index].technology);
    setStartDate(projects[index].startDate);
    setEndDate(projects[index].endDate);
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  return (
    <PagesLayout>
      <div className="flex gap-10 items-start justify-start w-full p-10 mx-20">
        {/* <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2> */}
        <div className="flex flex-col w-3/4 mx-auto">
          <div className="flex justify-center rounded-lg bg-gray-600 w-full text-white p-2">
            <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full">
              <form className="flex flex-col gap-4" onSubmit={handleAddProject}>
                <div className="w-full">
                  <label
                    className="block mb-1 text-sm font-medium"
                    htmlFor="projectName"
                  >
                    Project Name
                  </label>
                  <input
                    type="text"
                    id="projectName"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="block w-full px-3 py-2 border rounded-md text-black"
                  />
                </div>

                <div className="w-full">
                  <label
                    className="block mb-1 text-sm font-medium"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="block w-full px-3 py-2 border rounded-md text-black"
                  />
                </div>

                <div className="w-full">
                  <label
                    className="block mb-1 text-sm font-medium"
                    htmlFor="technology"
                  >
                    Technology
                  </label>
                  <input
                    type="text"
                    id="technology"
                    value={technology}
                    onChange={(e) => setTechnology(e.target.value)}
                    className="block w-full px-3 py-2 border rounded-md text-black"
                  />
                </div>

                <div className="w-full">
                  <label
                    className="block mb-1 text-sm font-medium"
                    htmlFor="startDate"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="block w-full px-3 py-2 border rounded-md text-black"
                  />
                </div>

                <div className="w-full">
                  <label
                    className="block mb-1 text-sm font-medium"
                    htmlFor="endDate"
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
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
              {projects.map((projectItem, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center mb-2 p-2 border-b border-gray-300"
                >
                  <div>
                    <span className="font-medium">
                      {projectItem.projectName}
                    </span>
                    <div>{projectItem.description}</div>
                    <div>{projectItem.technology}</div>
                    <div>
                      {projectItem.startDate} - {projectItem.endDate}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <FaEdit
                      className="text-blue-500 cursor-pointer hover:text-blue-700"
                      onClick={() => handleEditProject(i)}
                    />
                    <FaTrashAlt
                      className="text-red-500 cursor-pointer hover:text-red-700"
                      onClick={() => handleDeleteProject(i)}
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

export default Projects;
