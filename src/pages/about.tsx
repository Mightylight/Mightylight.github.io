import {skillsData} from "../components/skillData";
import {Button, Image} from "react-bootstrap";
import {Row, Col} from "react-bootstrap";

function About() {

    return (
        <>
            <Row>
                <Col className="col-md-4 d-flex justify-content-center align-items-center">
                    <Row className="p-3">
                        <Image roundedCircle className="mx-auto" style={{maxWidth: "20rem", maxHeight: "20rem", borderRadius:"50%"}} src="/assets/profile_picture.jpg" alt="Profile Picture"></Image>
                        <p style={{maxWidth: "80%"}} className="mx-auto m-5 fs-5 lh-md text-start bg-info p-4 border border-3 border-secondary-subtle rounded-2">
                            I'm a 21 year old software/game developer from the Netherlands, currently studying Creative Media and Game Technologies (CMGT) at Saxion University of Applied Sciences.
                            Playing games all my life, turned into a passion to create them myself. This started during IT classes in secondary school, and I haven't stopped programming since.

                            Over the years I have worked on many projects, both personal and for school, ranging from small hobby projects to larger group projects, learning a variety of skills along the way.
                        </p>
                    </Row>
                </Col>
                <Col className="col-md-8 d-flex rounded-2">
                    <div className="p-3">
                        <h3 className="p-3 mb-3">My Skills</h3>
                        <Col className="d-flex flex-wrap bg-nf justify-content-between bg-info border border-3 border-secondary-subtle rounded-2">
                            <div className="d-flex flex-wrap  p-3 justify-content-between">
                                {skillsData.map((skill, index) => (
                                    <Button key={index} href={skill.link} variant="" className="m-1 p-1">
                                        <Image src={skill.icon} style={{maxWidth:"9rem", maxHeight:"9rem",minWidth:"9rem", minHeight:"9rem", objectFit:"contain"}}></Image>
                                    </Button>
                                ))}
                            </div>
                        </Col>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default About;