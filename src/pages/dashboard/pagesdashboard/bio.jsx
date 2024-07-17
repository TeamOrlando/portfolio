import { useState } from "react";
import PagesLayout from "../layout/pagesLayout";

const Bio = () => {
  const [profilePicture, setProfilePicture] = useState(
    "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
  );
  const [newPicture, setNewPicture] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handlePictureChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNewPicture(e.target.files[0]);
    }
  };

  const handlePictureUpload = (e) => {
    e.preventDefault();
    if (newPicture) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePicture(e.target.result);
        setIsEditing(false);
        setNewPicture(null);
        // Here you would typically also upload the image to a server
        // and update the user profile with the new image URL
      };
      reader.readAsDataURL(newPicture);
    }
  };

  return (
    <PagesLayout>
      <div className="w-full py-4 gap-10 flex justify-center align-middle">
        <div className="w-[80%] flex flex-col items-center gap-4 align-middle justify-center bg-gray-600 rounded-2xl text-white p-4">
          <div className="flex flex-col items-center align-middle justify-center">
            <img
              src={profilePicture}
              alt="profile pic"
              className="h-[80px] w-[80px] rounded-full border-4 border-gray-100"
            />
            <button
              className="underline text-blue-400 text-sm"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            {isEditing && (
              <form
                onSubmit={handlePictureUpload}
                className="flex flex-col items-center"
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePictureChange}
                />
                <button
                  type="submit"
                  className="mt-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                >
                  Upload
                </button>
              </form>
            )}
          </div>
          <div className="bg-white mb-auto text-black p-6 rounded-lg shadow-lg w-full">
            <form className="space-y-8">
              <div className="flex space-x-4">
                <div className="w-1/5">
                  <label className="block text-sm font-medium" htmlFor="title">
                    Title
                  </label>
                  <select
                    id="title"
                    className="mt-1 block w-full px-3 py-2 border rounded-md text-black"
                  >
                    <option>Mr</option>
                    <option>Mrs</option>
                    <option>Miss</option>
                    <option>Dr</option>
                    <option>Prof</option>
                    <option>ESQ</option>
                  </select>
                </div>
                <div className="w-2/5">
                  <label
                    className="block text-sm font-medium"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="mt-1 block w-full px-3 py-2 border rounded-md text-black"
                  />
                </div>
                <div className="w-2/5">
                  <label
                    className="block text-sm font-medium"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="mt-1 block w-full px-3 py-2 border rounded-md text-black"
                  />
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium" htmlFor="sex">
                    Sex
                  </label>
                  <select
                    id="sex"
                    className="mt-1 block w-full px-3 py-2 border rounded-md text-black"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium" htmlFor="dob">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dob"
                    className="mt-1 block w-full px-3 py-2 border rounded-md text-black"
                  />
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label
                    className="block text-sm font-medium"
                    htmlFor="address"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="mt-1 block w-full px-3 py-2 border rounded-md text-black"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="mt-1 block w-full px-3 py-2 border rounded-md text-black"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium" htmlFor="about">
                  About Me
                </label>
                <textarea
                  id="about"
                  className="mt-1 block w-full px-3 py-2 border rounded-md text-black"
                  rows="4"
                ></textarea>
              </div>
              <div>
                <label
                  className="block text-sm font-medium"
                  htmlFor="languages"
                >
                  Languages
                </label>
                <input
                  type="text"
                  id="languages"
                  className="mt-1 block w-full px-3 py-2 border rounded-md text-black"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PagesLayout>
  );
};

export default Bio;
