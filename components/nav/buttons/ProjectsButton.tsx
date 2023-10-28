import { useEffect, useState } from "react";
import { animated } from "react-spring";
import styled from "styled-components";

const ButtonContainer = styled(animated.div)`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: end;
    width: 22vw;
    height: 10%;
    margin: 1vh 1vw 0vh 1.4vw;
`

const ButtonTitle = styled(animated.h2)<{ hover: boolean, routeTransitioning: boolean }>`
    color: ${props => props.hover && !props.routeTransitioning ? "#E2271E" : "#0A090A"};
    font-size: 200%;
    margin: 0 0;
    cursor: pointer;
`

const ButtonDescription = styled(animated.p)<{ hover: boolean, routeTransitioning: boolean }>`
    color: ${props => props.hover && !props.routeTransitioning ? "#E2271E" : "#0A090A"};
    font-size: 120%;
    margin: 0 0;
    cursor: pointer;
`

const ProjectsButton = ({setNavOpen, routeTransitioning, setRouteTransitioning, activePage, setActivePage}) => {

    const [hover, setHover] = useState(false);

    return ( 
        <ButtonContainer>
            <ButtonTitle 
                hover={hover}
                routeTransitioning={routeTransitioning}
                onMouseOver={() => {
                    setHover(true);
                }}
                onMouseOut={() => {
                    setHover(false);
                }}
                onClick={() => {
                    setNavOpen(false);
                    if (activePage !== "projects") {
                        setRouteTransitioning(true);
                        setActivePage("projects");
                    }
                }} 
            >PROJECTS</ButtonTitle>
            <ButtonDescription 
                hover={hover}
                routeTransitioning={routeTransitioning}
                onMouseOver={() => {
                    setHover(true);
                }}
                onMouseOut={() => {
                    setHover(false);
                }}
                onClick={() => {
                    setNavOpen(false);
                    if (activePage !== "projects") {
                        setRouteTransitioning(true);
                        setActivePage("projects");
                    }
                }} 
            >My work</ButtonDescription>
        </ButtonContainer>
     );
}
 
export default ProjectsButton;