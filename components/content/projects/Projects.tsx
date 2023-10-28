import styled from "styled-components";

const ContentContainer = styled.main`
    position: absolute;
    z-index: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 18vh;
    display: grid;
    grid-template-rows: repeat(3, minmax(30vh, 1fr));
    background-color: #0A090A;
`

const ProjectContainer = styled.div`
    grid-row: 1 / 2;
    display: grid;
    grid-template-columns: 4fr 6fr;
    
`

const ProjectInfo = styled.div`
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;
    padding: 0vw 3vw;
`

const ProjectTitle = styled.h1`
    color: white;
    align-self: flex-end;
`

const ProjectDesc = styled.p`
    color: white;
`

const Projects = () => {
    return ( 
        <ContentContainer>
            <ProjectContainer>
                <ProjectInfo>
                    <ProjectTitle>BRUTUSMAPS</ProjectTitle>
                    <ProjectDesc>
                        A full-stack web application mapping out all classrooms on The Ohio State University's main campus, alongside
                        all classes occurring inside them.
                    </ProjectDesc>
                </ProjectInfo>
            </ProjectContainer>
        </ContentContainer>
     );
}
 
export default Projects;