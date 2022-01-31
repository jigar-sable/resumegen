import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useToast } from '@chakra-ui/react';

const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);

export const ResumeProvider = ({ children }) => {

    const printElem = useRef();
    const toast = useToast();

    const [theme, setTheme] = useState('purple.400');

    const [about, setAbout] = useState({
        name: "",
        role: "",
        email: "",
        phone: "",
        address: "",
        linkedin: "",
        picture:"",
    });

    const [educationList, setEducationList] = useState([
        {
            id: "",
            degree: "",
            school: "",
            startYr: 0,
            endYr: 0,
            grade: "",
        },
    ]);

    const [skills, setSkills] = useState([
        {
            id: 1,
            name: "JavaScript",
        },
        {
            id: 2,
            name: "ReactJS",
        },
        {
            id: 3,
            name: "NodeJS",
        },
        {
            id: 4,
            name: "MongoDB",
        },
        {
            id: 5,
            name: "ExpressJS",
        },
        {
            id: 6,
            name: "PHP",
        },
        {
            id: 7,
            name: ".Net",
        },
        {
            id: 8,
            name: "Java",
        },
        {
            id: 9,
            name: "RestAPI",
        },
        {
            id: 10,
            name: "jQuery",
        },
        {
            id: 11,
            name: "MySQL",
        },
        {
            id: 12,
            name: "Ajax",
        },
        {
            id: 13,
            name: "GitHub",
        },
        {
            id: 14,
            name: "HTML",
        },
        {
            id: 15,
            name: "CSS",
        },
        {
            id: 16,
            name: "TailwindCSS",
        },
        {
            id: 17,
            name: "Bootstrap",
        },
    ]);

    const [workList, setWorkList] = useState([
        {
            id: "",
            position: "",
            company: "",
            type: "",
            startDate: "",
            endDate: "",
            description: "",
        },
    ]);

    const [projects, setProjects] = useState([
        {
            id: "",
            name: "",
            description: "",
            url: "",
        },
    ]);


    // useEffect(() => {
    //     toast({
    //         title: `${theme.split(".", 1)} selected`,
    //         status: 'success',
    //         isClosable: true,
    //       })
    // }, [theme]);

    const value = { about, setAbout, educationList, setEducationList, skills, setSkills, workList, setWorkList, projects, setProjects, printElem, theme, setTheme };

    return (
        <ResumeContext.Provider value={value}>
            {children}
        </ResumeContext.Provider>
    )
}