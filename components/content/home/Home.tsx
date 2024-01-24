import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import Button from "./Button";
import { device } from "../../../styles/devices";

const PageStructure = styled.main`
    display: grid;
    grid-template-rows: min-content auto;
    row-gap: 35px;

    width: 100%;

    margin-top: 75px;
`

const TitleSection = styled.div`
    grid-row: 1 / 2;

    width: 100%;
`

const TitleContainer = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    align-items: flex-end;
    justify-content: center;

    overflow: clip;
`

const Title = styled(animated.h1)`
    font-family: Josefin Sans;
    
    font-size: 10vw;

    color: ${props => props.theme.colors.white};
    
    margin: 0 0;
`

const ButtonSection = styled.div`
    grid-row: 2 / 3;

    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 20px;

    box-sizing: border-box;

    @media ${device.tablet} {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: min-content;
    }
`

const Home = ({}) => {

    const [textIntroAnimation, textIntroApi] = useSpring(() => ({
		from: {
			opacity: 0,
            y: 200,
		}
  	}));

    useEffect(() => {
        textIntroApi.start({
            to: {
                opacity: 1,
                y: 0,
            },
            config: {
                mass: 1,
                friction: 50,
                tension: 100
            },
            delay: 200
        })
    }, [])

    return ( 
        <PageStructure>
            <TitleSection>
                <TitleContainer>
                    <Title style={textIntroAnimation}>JUSTIN NGUYEN</Title>
                </TitleContainer>
            </TitleSection>
            <ButtonSection>
                <Button id={0} name={"projects"}/>
                <Button id={1} name={"blogs"}/>
                <Button id={2} name={"pictures"}/>
            </ButtonSection>
        </PageStructure>
     );
}
 
export default Home;