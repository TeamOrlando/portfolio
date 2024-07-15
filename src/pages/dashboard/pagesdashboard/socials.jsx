import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const Socials = () => {
  const [socials, setSocials] = useState([]);
  const [platform, setPlatform] = useState("");
  const [handle, setHandle] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddSocial = (e) => {
    e.preventDefault();
    if (platform && handle) {
      if (editIndex !== null) {
        const updatedSocials = socials.map((item, index) =>
          index === editIndex ? { platform, handle } : item
        );
        setSocials(updatedSocials);
        setEditIndex(null);
      } else {
        setSocials([...socials, { platform, handle }]);
      }
      setPlatform("");
      setHandle("");
    }
  };

  const handleEditSocial = (index) => {
    setEditIndex(index);
    setPlatform(socials[index].platform);
    setHandle(socials[index].handle);
  };

  const handleDeleteSocial = (index) => {
    const updatedSocials = socials.filter((_, i) => i !== index);
    setSocials(updatedSocials);
  };

  return (
      <div className="flex gap-10 items-start justify-start w-full p-10 mx-20">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Social Media Handles
        </h2>
        <div className="flex flex-col w-3/4">
          <div className="flex justify-center rounded-lg bg-gray-600 w-full text-white p-4">
            <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full">
              <form className="flex flex-col gap-4" onSubmit={handleAddSocial}>
                <div className="w-full">
                  <label
                    className="block mb-1 text-sm font-medium"
                    htmlFor="platform"
                  >
                    Platform
                  </label>
                  <input
                    type="text"
                    id="platform"
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                    className="block w-full px-3 py-2 border rounded-md text-black"
                  />
                </div>

                <div className="w-full">
                  <label
                    className="block mb-1 text-sm font-medium"
                    htmlFor="handle"
                  >
                    Handle
                  </label>
                  <input
                    type="text"
                    id="handle"
                    value={handle}
                    onChange={(e) => setHandle(e.target.value)}
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
              {socials.map((socialItem, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center mb-2 p-2 border-b border-gray-300"
                >
                  <div>
                    <span className="font-medium">{socialItem.platform}</span>:{" "}
                    {socialItem.handle}
                  </div>
                  <div className="flex gap-2">
                    <FaEdit
                      className="text-blue-500 cursor-pointer hover:text-blue-700"
                      onClick={() => handleEditSocial(i)}
                    />
                    <FaTrashAlt
                      className="text-red-500 cursor-pointer hover:text-red-700"
                      onClick={() => handleDeleteSocial(i)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Socials;
