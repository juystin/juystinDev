import { useEffect } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

const ButtonContainer = styled(animated.div)`
    display: flex;
    width: 100%;
    aspect-ratio: 1 / 1;
    flex-direction: column;
    cursor: pointer;
`

const ImageContainer = styled.div`
    background: purple;
    height: 100%;
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
                friction: 60,
                tension: 80
            },
            delay: 1400 + (id * 350)
        })
    }, [])

    return (
        <ButtonContainer style={buttonAnimation}>
            <ImageContainer>

            </ImageContainer>
        </ButtonContainer>
     );
}
 
export default Button;