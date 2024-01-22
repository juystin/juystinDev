import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import Button from "./Button";

const PageStructure = styled.main`
    display: grid;
    grid-template-rows: min-content auto;
    margin-top: 21vh;
    row-gap: 15px;
`

const TitleSection = styled.div`
    grid-row: 1 / 2;
`

const TitleContainer = styled.div`
    height: 100%;
    overflow: clip;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    overflow: clip;
`

const Title = styled(animated.h1)`
    font-family: Josefin Sans;
    font-size: 11.4vw;
    color: ${props => props.theme.colors.white};
    margin: 0 0;
`

const ButtonSection = styled.div`
    grid-row: 2 / 3;
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    padding: 0 2vw;
    box-sizing: border-box;
    column-gap: 2vw;
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