import { useEffect, useState } from "react";
import { apiGetExperiences } from "../../services/experiences";
import { apiGetSkills } from "../../services/skills";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const getData = async () => {
    setIsLoading(true);
    
  
    try {
      const [
        totalSkills,
        totalExperiences,
        // totalProjects,
      ] = await Promise.all([
        apiGetSkills,
        apiGetExperiences,
        // apiGetProjects,
      ]);

      const newData = {
        skills: totalSkills.length,
        // projects: totalProjects.length,
        experiences: totalExperiences.length,
        // socials: totalSocials.length,
      };
      console.log("data", newData);
      setData(newData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    //getData();
  });
  return <div>Dashboard</div>;
};

export default Dashboard;

