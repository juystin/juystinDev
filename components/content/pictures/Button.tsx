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

const ImageContainer = styled.div<{ portrait: boolean }>`
    height: 100%;
    width: 100%;
    border-radius: 6px;

    overflow: clip;

    display: flex;
    align-items: ${props => props.portrait ? "center" : "flex-end"};
`

const Image = styled.img<{ portrait: boolean }>`
    width: 100%;
    border-radius: 6px;

    object-fit: contain;
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

    console.log(data)

    return (
        <ButtonContainer style={buttonAnimation} onClick={() => setActivePicture(data)}>
            <ImageContainer portrait={data.portrait}>
                <Image portrait={data.portrait} src={data.url} />
            </ImageContainer>
        </ButtonContainer>
     );
}
 
export default Button;