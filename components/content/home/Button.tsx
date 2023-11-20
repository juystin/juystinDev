import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

const ButtonContainer = styled(animated.div)`
    display: flex;
    width: 100%;
    height: 500px;
    flex-direction: column;
    cursor: pointer;
`

const ImageContainer = styled.div`
    background: purple;
    height: 100%;
    border-radius: 6px;
`

const ButtonName = styled.h1`
    font-size: 20pt;
    color: white;
    text-transform: capitalize;
    font-family: Raleway;
`

const Button = ({id, name}) => {

    const navigate = useNavigate();

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
                friction: 60,
                tension: 80
            },
            delay: 1400 + (id * 350)
        })
    }, [])

    return ( 
        <ButtonContainer style={buttonAnimation} onClick={() => navigate("/" + name + "/")}>
            <ImageContainer />
            <ButtonName>{name}</ButtonName>
        </ButtonContainer>
     );
}
 
export default Button;