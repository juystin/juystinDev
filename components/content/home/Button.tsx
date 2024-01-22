import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

const ButtonContainer = styled(animated.div)`
    display: flex;
    width: 100%;
    height: auto;
    aspect-ratio: 5 / 2;
    flex-direction: column;
    cursor: pointer;
`

const ImageContainer = styled.div<{ index: number }>`
    background: ${props => props.index % 4 === 0 ? props.theme.colors.white : props.index % 4 === 3 ? props.theme.colors.white : props.theme.colors.black};
    max-height: 100%;
    max-width: 100%;
    border-radius: 6px;

    overflow: clip;
`

const ButtonName = styled.h1`
    font-size: 20pt;
    color: ${props => props.theme.colors.white};
    text-transform: capitalize;
    font-family: Raleway;
`

const Image = styled.img`
    width: 100%;
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
                tension: 65
            },
            delay: (700 + (id * 400))
        })
    }, [])

    return ( 
        <ButtonContainer style={buttonAnimation} onClick={() => navigate("/" + name)}>
            <ImageContainer index={id}>
                <Image src={"/assets/thumbnails/home/" + name + ".png"} />
            </ImageContainer>
            <ButtonName>{name}</ButtonName>
        </ButtonContainer>
     );
}
 
export default Button;