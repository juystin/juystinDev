import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import Image from "next/image";
import { device } from "../../../styles/devices";

const Container = styled(animated.div)<{ index: number }>`
    width: 100%;
    height: auto;
    aspect-ratio: 5 / 3;

    border-radius: 6px;
    
    overflow: clip;
    
    cursor: pointer;

    background: ${props => props.index % 2 === 0 ? props.theme.colors.white : props.theme.colors.black};

    @media ${device.laptop} {
        background: ${props => props.index % 4 === 0 ? props.theme.colors.white : props.index % 4 === 3 ? props.theme.colors.white : props.theme.colors.black};
    }
`

const Thumbnail = styled(Image)`
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
            <Thumbnail 
                src={"/assets/thumbnails/projects/" + data.short + "/0.png"} 
                alt={data.title} 
                layout="responsive"
                width={1920}
                height={1152}
            />
        </Container>
     );
}

export default Button;