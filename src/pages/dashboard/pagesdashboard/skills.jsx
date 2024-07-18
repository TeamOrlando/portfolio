import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";


const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState("");
  const [proficiency, setProficiency] = useState("Beginner");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (skill && proficiency) {
      if (editIndex !== null) {
        const updatedSkills = skills.map((item, index) =>
          index === editIndex ? { skill, proficiency } : item
        );
        setSkills(updatedSkills);
        setEditIndex(null);
      } else {
        setSkills([...skills, { skill, proficiency }]);
      }
      setSkill("");
      setProficiency("Beginner");
    }
  };

  const handleEditSkill = (index) => {
    setEditIndex(index);
    setSkill(skills[index].skill);
    setProficiency(skills[index].proficiency);
  };

  const handleDeleteSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  return (
    <div className="flex gap-10 items-start justify-start w-full p-10 mx-20">
      <h2 className="text-2xl font-bold mb-6 text-center">Skills</h2>
      <div className="flex flex-col w-3/4">
        <div className="flex justify-center rounded-lg bg-gray-600 w-full text-white p-4">
          <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full">
            <form
              className="flex gap-4 justify-between items-end"
              onSubmit={handleAddSkill}
            >
              <div className="w-full">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="skill"
                >
                  Skill
                </label>
                <input
                  type="text"
                  id="skill"
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                  className="block w-full px-3 py-2 border rounded-md text-black"
                />
              </div>

              <div className="w-full">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="levelofproficiency"
                >
                  Level of Proficiency
                </label>
                <select
                  id="levelofproficiency"
                  value={proficiency}
                  onChange={(e) => setProficiency(e.target.value)}
                  className="block w-full px-3 py-2 border rounded-md text-black"
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                  <option>Expert</option>
                </select>
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
          {skills.length ? (
            <div className="bg-white text-gray-800 p-4 w-full">
              {skills.map((skillItem, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center mb-2 p-2 border-b border-gray-300"
                >
                  <span className="font-medium">{skillItem.skill}</span>
                  <span className="text-sm">{skillItem.proficiency}</span>
                  <div className="flex gap-4">
                    <FiEdit2
                      className="text-gray-500 cursor-pointer hover:text-gray-900"
                      onClick={() => handleEditSkill(i)}
                    />
                    <FaTrashAlt
                      className="text-gray-500 cursor-pointer hover:text-gray-700"
                      onClick={() => handleDeleteSkill(i)}
                    />
                  </div>
                </div>
              ))}
            </div>

          ) : (
        
            <p>No skills added!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
