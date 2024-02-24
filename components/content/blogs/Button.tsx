import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Image from "next/image";
import { device } from "../../../styles/devices";

const Container = styled(animated.div)`
    display: flex;
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 1;
    flex-direction: column;
    cursor: pointer;

    position: relative;

    @media ${device.tablet}, ${device.laptop} {
		width: 100%;
        height: auto;
        aspect-ratio: 7 / 1;
	}
`

const ButtonContainer = styled(animated.div)`
    background: ${props => props.theme.colors.scarlet};
    height: 100%;
    border-radius: 6px;

    overflow: clip;

    position: relative;
`

const ShadowOverlay = styled.div`
    height: 100%;
    width: 100%;

    -webkit-box-shadow:inset 0 0 24px 4px ${props => props.theme.colors.black};
    box-shadow:inset 0 0 24px 4px ${props => props.theme.colors.black};

    position: absolute;
    z-index: 3;
`

const ScreenOverlay = styled.div`
    height: 100%;
    width: 100%;

    background: ${props => props.theme.colors.black};

    position: absolute;
    z-index: 2;

    opacity: 0.55;
`

const BlogNameSection = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;

    position: absolute;
    z-index: 4;
`

const BlogNameContainer = styled.div`
    display: flex;
    flex-direction: column;

    margin-left: 20px;
`

const BlogTitle = styled.h1`
    color: ${props => props.theme.colors.white};
    font-family: Raleway;

    font-size: 2.4vw;

    margin: 0 0;
`

const BlogSubtitle = styled.h2`
    color: ${props => props.theme.colors.white};
    font-family: Raleway;

    font-size: 2vw;

    margin: 0 0;
`

const ImageContainer = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;
    z-index: 0;
`

const StyledImage = styled(Image)`
    width: 100%;
    height: 100%;

    object-fit: cover;
`

const BackgroundCircle = styled.div`
    border-radius: 100%;

    width: 60%;
    height: 500%;

    top: -200%;
    left: -20%;

    background: ${props => props.theme.colors.black};
    opacity: 0.92;

    position: absolute;
    z-index: 1;
`

const Button = ({data}) => {

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
            delay: (700 + (data.id * 400))
        })
    }, [])

    return (
        <Container style={buttonAnimation} onClick={() => navigate("/blogs/" + data.id + "/")}>
            <ShadowOverlay />
            <ScreenOverlay />
            <ButtonContainer>
                <ImageContainer>
                    <StyledImage 
                        src={"/assets/thumbnails/blogs/" + data.id + "/0.png"} 
                        alt={data.title + ": " + data.subtitle}
                        width={1920}
                        height={274}
                    />
                </ImageContainer>
                <BackgroundCircle />
            </ButtonContainer>
            <BlogNameSection>
                <BlogNameContainer>
                    <BlogTitle>{data.title}</BlogTitle>
                    <BlogSubtitle>{data.subtitle}</BlogSubtitle>
                </BlogNameContainer>
            </BlogNameSection>
        </Container>
     );
}
 
export default Button;