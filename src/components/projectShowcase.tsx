import {Badge, Button, Card, Col, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import type {Project} from "./projectData.ts";

interface Props {
    items: Project[];
    numberOfProjects?: number;
}

function ProjectShowcase(props: Props) {
    const navigateToProject = useNavigate();
    return (
        <>
            <Row className="pt-4 pb-0">
                <h1 className={"text-success"}>Projects</h1>
            </Row>
            <Col>
                <Row className="p-0 justify-content-center align-items-center">
                    {props.items.map((project) => (
                        (props.numberOfProjects && project.index >= props.numberOfProjects) ? null :
                        <Card key={project.title} className="m-4 border border-3 border-secondary-subtle bg-info col-md-3 d-flex flex-column justify-content-center align-content-center" style={{ minHeight: '30em', maxWidth:"30rem"}}>
                            <Card.Img style={{maxWidth: "30rem", maxHeight: "15rem", objectFit:"contain"}} className="pt-2" variant="top" src={project.coverImage} />
                            <Card.Body className="d-flex flex-column justify-content-between align-content-between">
                                <Card.Title>{project.title} <Badge className="text-success bg-secondary">{project.badge}</Badge></Card.Title>
                                <Card.Text>
                                    {project.smallDescription}
                                </Card.Text>
                                <div className="mt-auto">
                                    <p className="text-muted">
                                        Skills: {project.skills.join(', ')}
                                    </p>
                                    {project.enabled && project.link &&
                                        <Button style={{fontWeight: "500"}} className="text-success" onClick={() => {
                                            navigateToProject(project.link)
                                        }} variant="primary">Go to project</Button>
                                        || <Button style={{fontWeight: "500"}} className="text-success" disabled variant="primary">Coming soon!</Button>
                                    }
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>
            </Col>
        </>
    );
}

export default ProjectShowcase;


// Old way of doing it, kept for documentation purposes
//<Col>
//                 <Row className="p-4 justify-content-between align-items-center">
//                     <Card className="m-1" style={{maxWidth: '30%'}}>
//                         <Card.Img className="pt-1" variant="bottom" src={Gator} />
//                         <Card.Body>
//                             <Card.Title>Escape the gator</Card.Title>
//                             <Card.Text>
//                                 A local player versus player racing survival game making use of a VR headset and a controller
//                             </Card.Text>
//                             <Button onClick={() => {
//                                 navigateToProject('/projects/escape_the_gator')
//                             }} variant="primary">Go somewhere</Button>
//                         </Card.Body>
//                     </Card>
//                     <Card className="m-1" style={{maxWidth: '30%'}}>
//                         <Card.Img className="pt-1" variant="top" src={Gator} />
//                         <Card.Body>
//                             <Card.Title>Escape the gator</Card.Title>
//                             <Card.Text>
//                                 A local player versus player racing survival game making use of a VR headset and a controller
//                             </Card.Text>
//                             <Button onClick={() => {
//                                 navigateToProject('/projects/escape_the_gator')
//                             }} variant="primary">Go somewhere</Button>
//                         </Card.Body>
//                     </Card>
//                     <Card className="m-1" style={{maxWidth: '30%'}}>
//                         <Card.Img className="pt-1" variant="top" src={Gator} />
//                         <Card.Body>
//                             <Card.Title>Escape the gator</Card.Title>
//                             <Card.Text>
//                                 A local player versus player racing survival game making use of a VR headset and a controller
//                             </Card.Text>
//                             <Button onClick={() => {
//                                 navigateToProject('/projects/escape_the_gator')
//                             }} variant="primary">Go somewhere</Button>
//                         </Card.Body>
//                     </Card>
//                 </Row>
//             </Col>