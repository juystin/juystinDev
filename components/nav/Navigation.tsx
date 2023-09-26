import { useEffect } from "react";
import styled from "styled-components";

const NavContainer = styled.div`
    position: absolute;
    z-index: 1;
    height: 100vh;
    width: 25vw;
    background-color: crimson;
`

const Navigation = ({navOpen}) => {
    
    useEffect(() => {
        console.log(navOpen)
    }, [navOpen])

    return ( 
        navOpen ? <NavContainer /> : <></>
     );
}
 
export default Navigation;