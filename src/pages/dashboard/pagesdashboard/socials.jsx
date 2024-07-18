import { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import PagesLayout from "../layout/pagesLayout";

const Socials = () => {
  const [linkedIn, setLinkedIn] = useState("");
  const [github, setGitHub] = useState("");
  const [x, setX] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    // Add any save logic here, like sending the data to an API
    console.log("Saved:", { linkedIn, github, x, instagram, facebook });
  };

  return (
    <PagesLayout>
      <div className="flex gap-10 items-start justify-start w-full p-10 mx-20">
        <div className="flex flex-col w-3/4 mx-auto">
          <div className="flex justify-center rounded-lg bg-gray-600 w-full text-white p-2">
            <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full">
              <form className="flex flex-col gap-4" onSubmit={handleSave}>
                <div className="w-full">
                  <label
                    className="block mb-1 text-sm font-medium"
                    htmlFor="linkedIn"
                  >
                    LinkedIn
                  </label>
                  <div className="flex items-center">
                    <FaLinkedin className="mr-2 text-blue-700" />
                    <input
                      type="text"
                      id="linkedIn"
                      value={linkedIn}
                      onChange={(e) => setLinkedIn(e.target.value)}
                      className="block w-full px-3 py-2 border rounded-md text-black"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <label
                    className="block mb-1 text-sm font-medium"
                    htmlFor="github"
                  >
                    GitHub
                  </label>
                  <div className="flex items-center">
                    <FaGithub className="mr-2 text-gray-800" />
                    <input
                      type="text"
                      id="github"
                      value={github}
                      onChange={(e) => setGitHub(e.target.value)}
                      className="block w-full px-3 py-2 border rounded-md text-black"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <label className="block mb-1 text-sm font-medium" htmlFor="x">
                    X (formerly Twitter)
                  </label>
                  <div className="flex items-center">
                    <FaTwitter className="mr-2 text-blue-500" />
                    <input
                      type="text"
                      id="x"
                      value={x}
                      onChange={(e) => setX(e.target.value)}
                      className="block w-full px-3 py-2 border rounded-md text-black"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <label
                    className="block mb-1 text-sm font-medium"
                    htmlFor="instagram"
                  >
                    Instagram
                  </label>
                  <div className="flex items-center">
                    <FaInstagram className="mr-2 text-pink-500" />
                    <input
                      type="text"
                      id="instagram"
                      value={instagram}
                      onChange={(e) => setInstagram(e.target.value)}
                      className="block w-full px-3 py-2 border rounded-md text-black"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <label
                    className="block mb-1 text-sm font-medium"
                    htmlFor="facebook"
                  >
                    Facebook
                  </label>
                  <div className="flex items-center">
                    <FaFacebook className="mr-2 text-blue-600" />
                    <input
                      type="text"
                      id="facebook"
                      value={facebook}
                      onChange={(e) => setFacebook(e.target.value)}
                      className="block w-full px-3 py-2 border rounded-md text-black"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PagesLayout>
  );
};

export default Socials;
