import { useEffect, useRef, useState } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import ProjectsButton from "./buttons/ProjectsButton";
import BlogsButton from "./buttons/BlogsButton";
import ContactButton from "./buttons/ContactButton";
import { useNavigate } from "react-router-dom";

// box-sizing necessary, else padding-top will affect height (causing overflow).
const NavContainer = styled(animated.div)`
    position: fixed;
    z-index: 3;
    height: 100vh;
    width: 0vw;
    background-color: #E7E7E7;
    overflow: clip;
    padding-top: 7vh;
    box-sizing: border-box;
    border-right: solid 0px red;
`

const Navigation = ({navOpen, setNavOpen, routeTransitioning, setRouteTransitioning, activePage, setActivePage, homeFadeInApi}) => {

    const navigate = useNavigate();

    const [navVis, setNavVis] = useState(false);

    const [navAnimation, navApi] = useSpring(() => ({ 
        config: {
            mass: 1,
            friction: 35,
            tension: 220,
        }
    }));

    useEffect(() => {
        navApi.start({
            to: {
                width: navOpen ? "25vw" : "0vw",
            },
            onRest: () => {
                setNavVis(navOpen);
            }
        })
    }, [navOpen]);

    useEffect(() => {
        if (!navVis && !routeTransitioning) {
            if (activePage === "projects") {
                navigate("/projects");
            }
        }
    }, [navVis, routeTransitioning])

    return ( 
        <NavContainer style={navAnimation}>
            <ProjectsButton setNavOpen={setNavOpen} routeTransitioning={routeTransitioning} setRouteTransitioning={setRouteTransitioning} activePage={activePage} setActivePage={setActivePage}/>
            <BlogsButton />
            <ContactButton />
        </NavContainer>
    );
}
 
export default Navigation;