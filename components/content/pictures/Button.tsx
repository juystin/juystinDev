import Image from "next/image";
import { useEffect } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

const ButtonContainer = styled(animated.div)`
    width: 100%;
    aspect-ratio: 1 / 1;

    display: flex;
    flex-direction: column;
    cursor: pointer;
`

const ImageContainer = styled.div<{ portrait: boolean }>`
    height: 100%;
    width: 100%;
    border-radius: 6px;

    overflow: clip;

    display: flex;
    align-items: ${props => props.portrait ? "center" : "flex-start"};
`

const StyledImage = styled(Image)`
    width: 100%;
    height: 100%;

    border-radius: 6px;
`

const Button = ({data, setActivePicture}) => {

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
                mass: 5,
                friction: 60,
                tension: 40
            },
            delay: (800 + (data.id * 500))
        })
    }, [])

    return (
        <ButtonContainer style={buttonAnimation} onClick={() => setActivePicture(data)}>
            <ImageContainer portrait={data.portrait}>
                <StyledImage 
                    alt={data.location + " | " + data.date}
                    src={data.url}
                    height={data.height}
                    width={data.width}
                    layout="responsive"
                />
            </ImageContainer>
        </ButtonContainer>
     );
}
 
export default Button;