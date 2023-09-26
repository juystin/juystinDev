import { useEffect } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

const NavContainer = styled(animated.div)`
    position: absolute;
    z-index: 1;
    height: 100vh;
    width: 0vw;
    background-color: crimson;
`

const Navigation = ({navOpen}) => {

    const [navAnimation, navApi] = useSpring(() => ({
        width: navOpen ? "0vw" : "25vw"
    }));

    useEffect(() => {
        navApi.start({ 
            width: navOpen ? "25vw" : "0vw",
            config: {
                mass: 1,
                friction: 20,
                tension: 100,
            }
        })
    }, [navOpen]);

    return ( 
        <NavContainer style={navAnimation}/>
    );
}
 
export default Navigation;