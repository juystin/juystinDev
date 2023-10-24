import { useEffect } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import ProjectsButton from "./buttons/ProjectsButton";
import BlogsButton from "./buttons/BlogsButton";
import ContactButton from "./buttons/ContactButton";

// box-sizing necessary, else padding-top will affect height (causing overflow).
const NavContainer = styled(animated.div)`
    position: absolute;
    z-index: 3;
    height: 100vh;
    width: 0vw;
    background-color: #E7E7E7;
    overflow: clip;
    padding-top: 7vh;
    box-sizing: border-box;
`

const Navigation = ({navOpen}) => {

    const [navAnimation, navApi] = useSpring(() => ({
        width: navOpen ? "0vw" : "25vw",
    }));

    useEffect(() => {
        navApi.start({ 
            width: navOpen ? "25vw" : "0vw",
            config: {
                mass: 1,
                friction: 35,
                tension: 220,
            }
        })
    }, [navOpen]);

    return ( 
        <NavContainer style={navAnimation}>
            <ProjectsButton />
            <BlogsButton />
            <ContactButton />
        </NavContainer>
    );
}
 
export default Navigation;