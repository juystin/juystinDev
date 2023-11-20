import { useEffect } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

const Container = styled(animated.div)`
    display: flex;
    width: 100%;
    height: 500px;
    flex-direction: column;
    background: purple;
    border-radius: 6px;
`

const Button = ({id, name}) => {
    
    const [buttonAnimation, buttonApi] = useSpring(() => ({
		from: {
			opacity: 0,
		}
  	}));

    useEffect(() => {
        buttonApi.start({
            to: {
                opacity: 1,
            },
            config: {
                mass: 1,
                friction: 50,
                tension: 100
            },
            delay: 1400 + (id * 350)
        })
    }, [])

    return ( 
        <Container style={buttonAnimation}>
        </Container>
     );
}
 
export default Button;