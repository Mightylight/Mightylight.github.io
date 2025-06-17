import {Col, Row, Image, Button, ButtonGroup, Stack} from "react-bootstrap";
import ProjectShowcase from "../components/projectShowcase.tsx";
import {projectData} from "../components/projectData.ts";


function Home() {
    return <>
       <Row>
           <Col className="col-md-1 flex-fill rounded-2 me-md-2 ms-md-2 mb-md-0 mb-sm-2">
               <Stack gap={5} className="p-3 justify-content-center align-items-center">
                   <Image roundedCircle className="w-100 border border-3 border-secondary-subtle" src='/assets/profile_picture.jpg'></Image>
                   <div>
                       <div className="bg-info p-3 rounded-top-2 border border-bottom-0 border-3 border-secondary-subtle">
                           <h2>Hello I'm Bas</h2>
                           <p className={"text-success"} >
                               Software developer and Student at Saxion University of Applied Sciences.
                           </p>
                       </div>
                       <div  className="bg-info p-3 rounded-bottom-2 border border-top-0 border-3 border-secondary-subtle text-success">
                           <h4 className={"text-success"}>Check out my other platforms!</h4>
                           <ButtonGroup size={"lg"} className="d-flex justify-content-between align-items-center">
                               <Button href={"https://github.com/Mightylight"} variant="link">
                                   <Image style={{width: "5rem" ,height: "5rem"}} src='/assets/github.png'></Image>
                               </Button>
                               <Button href={"https://www.linkedin.com/in/basmeddeler/"} variant="link">
                                   <Image style={{width: "5rem" ,height: "5rem"}} src='/assets/linkedin.png'></Image>
                               </Button>
                           </ButtonGroup>
                       </div>
                   </div>
               </Stack>
           </Col>
           <Col className="col-md-8 flex-fill rounded-2">
               <ProjectShowcase numberOfProjects={3} items={projectData}></ProjectShowcase>
           </Col>
       </Row>
    </>
}
export default Home;
