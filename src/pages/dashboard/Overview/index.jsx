import { useEffect, useState } from "react";
import { apiGetExperiences } from "../../../services/experiences";
import { apiGetSkills } from "../../../services/skills";
import { apiGetProjects } from "../../../services/projects";


const Skills = () => {
    const navigate = useNavigate();
    const [skills, setSkills]
}
const Overview = () => {
    const [data, setData] = useState({
        skills: 0,
        projects: 0,
        experiences: 0,
        socials: 0,
    })


const [isLoading, setIsLoading] = useState(false)
// anytime you async, you do trycatch
const getData = async () => {
    setIsLoading(true)
    try {
        const [totalSkills, totalExperiences, totalProjects] = await Promise.all([
            apiGetExperiences(),
            apiGetSkills(),
            apiGetProjects(), 
        ])
        console.log("Total skills:", totalSkills)
       

        const newData = {
         skills: totalSkills.length,
        projects: totalProjects.length,
        experiences: totalExperiences.length,
        };
        console.log(newData)

        setData(newData);

    } catch (error) {
        console.log(error)

    }finally{
        setIsLoading(false)
    }
     
    
    {
        isLoading ? <PageLoader/>
    }
    

};

useEffect(() => {
    getData()
}, []) 
}

export default Overview