import ProjectShowcase from "../components/projectShowcase.tsx";
import {projectData} from "../components/projectData";

function Projects() {
    return (
        <div>
            <ProjectShowcase items={projectData}>
            </ProjectShowcase>
        </div>
    )
}
export default Projects;