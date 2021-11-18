import React, {useState} from "react";
// COMPONENTS
import ProjectItem from "../../components/projects/ProjectItem";
import SecretWord from "../../components/global/Secretword";

import Helpers from "../../hooks/helpers";
import "./projects.scss";

const Projects = () => {
	const initProjects = [
		{
			name: "Gifos",
			links: ["https://github.com/DannyCarvajal/gifos", "https://dannycarvajal.github.io/gifos/"],
			description: "Developed a platform to explore, create and download gifs. You can store your favorite gifs, see trending topics and gifs, and turn the dark mode on. Powered by Giphy's API and webRTC library",
		},
		{
			name: "Relyer",
			links: ["https://github.com/DannyCarvajal/relyer", "https://dannycarvajal.github.io/relyer/", "https://www.behance.net/gallery/129632115/RELYER"],
			description: "Front-End developer and UI/UX designer in the devlepment of a platform that helps MSMEs identify their tech needs, connecting with suppliers and experts that will boost their companies. A diagnostic test is done and then we suggest specialists and tools according to the needs.",
		},
		{
			name: "Podcast Channel",
			links: ["https://github.com/DannyCarvajal/podcastchannel", "https://dannycarvajal.github.io/podcastchannel"],
			description: "Podcast channel is a platform that allows you to listen different technologie podcasts by using embeded podcasts from Spotify, enjoy listening....",
		},
		{
			name: "Delilah Resto",
			links: ["https://github.com/DannyCarvajal/DelilahResto"],
			description: "Developed an REST API for a restaurant business 🥘 in which the clients (users) can register and order the most deluxe plates. On the other hand, the administrator can manage the orders, the plates and the users of the API.",
		},
	];

	// SEE SCREEN SIZE
	const {useScreenSize} = Helpers();
	const [isTabletOrDesktop] = useScreenSize();

	const [projects, setProjects] = useState(initProjects);
	const [currProject, setCurrProject] = useState([initProjects[0]]);

	const Projects = projects => {
		return projects.map(project => {
			let nameWithoutSpacesOrCases = project.name.replace(/\s/g, "").toLowerCase();
			return <ProjectItem key={project.name} image={process.env.PUBLIC_URL + `/img/${nameWithoutSpacesOrCases}.png`} name={project.name} links={project.links} description={project.description} currProject={currProject} setCurrProject={setCurrProject} projects={initProjects} />;
		});
	};

	return (
		<div className="projectsSection">
			<h2 className="projectsSection__title">Projects</h2>
			<div className="projectItemContainer">{isTabletOrDesktop ? Projects(currProject) : Projects(projects)}</div>
			<SecretWord secretLetter="t" bgcolor="white" letterColor="#353841" />
		</div>
	);
};

export default Projects;
