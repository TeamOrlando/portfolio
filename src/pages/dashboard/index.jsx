const sideBarSections = [
  { name: "Skills", number: 5 },
  { name: "Experience", number: 5 },
  { name: "Projects", number: 5 },
  { name: "Socials", number: 5 },
];
const Dashboard = () => {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-6">Overview</h1>

      <div className="w-[50%] mx-auto">
        <div className="flex justify-between gap-5 p-4 rounded-lg shadow-md w-[50%]">
          <h2>Bio</h2>
          <p>50%</p>
        </div>
      </div>
      {sideBarSections.map((eachsection, index) => {
        return (
          <div key={index} className="w-[50%] mx-auto">
            <div className="flex justify-between gap-5 p-4 rounded-lg shadow-md w-[50%]">
              <h2>{eachsection.name}</h2>
              <p>{eachsection.number}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
