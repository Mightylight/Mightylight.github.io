import type {Project} from "../components/projectData";
import {Button, Container, Image} from "react-bootstrap";
import {useEffect, useState} from "react";

interface ProjectPageProps {
    project: Project;
}

function ProjectPage(props: ProjectPageProps) {
    const [description, setDescription] = useState<string[] | null>(null);

    useEffect(() => {
        props.project.bigDescription.then(setDescription);
    }, [props.project.bigDescription]);

    return (
        <div className="project-page bg-warning">
            <Image style={{maxWidth:"30rem", objectFit:"contain"}} src={props.project.coverImage} alt={props.project.title} className="project-image" />
            <h1>{props.project.title}</h1>
            <p className="text-muted">
                Skills: {props.project.skills.join(', ')}
            </p>

            <div className="project-websites d-flex flex-wrap justify-content-center">
                {props.project.websites && props.project.websites.map((website, index) => (
                    <Button key={index} href={website} target="_blank" rel="noopener noreferrer" className="btn btn-primary m-2">
                        Trailer
                    </Button>
                ))}
            </div>

            <Container className="project-description p-3 justify-content-center align-items-center">
                {description ? (
                    description.map((paragraph, index) => (
                        //<Card className="mx-auto w-75">
                        //    <Card.Body className="p-3 m-3 mx-auto" key={index}>
                        //        <Card.Text>{paragraph}</Card.Text>
                        //    </Card.Body>
                        //</Card>

                        <p className="mx-auto fs-5 lh-md text-start" style={{maxWidth: "70%"}} key={index}>{paragraph}</p>
                    ))
                ) : (
                    <p>Loading description...</p>
                )}
            </Container>
            <h3>Visuals</h3>
            <div className="pb-5 project-images d-flex flex-wrap justify-content-center">
                {props.project.images && props.project.images.map((image, index) => (
                    <Image key={index} src={image} alt={`Project image ${index + 1}`} className="project-image p-2" style={{maxWidth: "30rem", objectFit: "contain"}} />
                ))}
            </div>
        </div>
    );
}

export default ProjectPage;