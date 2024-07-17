import { useState } from "react";
import { apiGetExperiences } from "../../../services/experience";

const Overview = () => {
    const [data, setData] = useState({
        skills: 0,
        projects: 0,
        experiences: 0,
        socials: 0,
    };
    )
}

const [isLoading, setIsLoading] = useState(false)
const getData = async() => {
    setIsLoading(true)
    try {
       
        const [totalSkills, 
            totalExperiences, 
            totalProjects,
        ] = await Promise.all([
            apiGetSkills,
            apiGetExperience,
            apiGetProjects,
        ]);

        const newData = {
         skills: totalSkills.length,
        projects: totalProjects.length,
        experiences: totalExperiences.length,
        socials: totalSocials.length,
        };

        setData(newData);
    } catch (error) {
        console.log(error)
    }finally{
        setIsLoading(false)
    }

};

useEffect(() => {
    //getData();
}

export default Overview