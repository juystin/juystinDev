import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

const Container = styled(animated.div)<{ index: number }>`
    display: flex;
    width: 100%;
    height: auto;
    aspect-ratio: 5 / 3;
    flex-direction: column;
    background: ${props => props.index % 4 === 0 ? props.theme.colors.white : props.index % 4 === 3 ? props.theme.colors.white : props.theme.colors.black};
    border-radius: 6px;
    overflow: clip;
    cursor: pointer;
`

const Thumbnail = styled.img`
    height: 100%;
    width: 100%;
`

const Button = ({ data }) => {

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
                friction: 40,
                tension: 65
            },
            delay: (700 + (data.id * 400))
        })
    }, [])

    return ( 
        <Container style={buttonAnimation} onClick={() => navigate("/projects/" + data.short + "/")} index={data.id}>
            <Thumbnail src={"assets/thumbnails/projects/" + data.short + "/0.png"} alt={data.title} />
        </Container>
     );
}

export default Button;