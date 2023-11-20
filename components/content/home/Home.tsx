import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import Button from "./Button";

const PageStructure = styled.main`
    grid-row: 2 / 3;
    display: grid;
    grid-template-rows: minmax(100px, 24vw) auto;
`

const TitleSection = styled.div`
    grid-row: 1 / 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const TitleContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    overflow: clip;
`

const Title = styled(animated.h1)`
    font-family: Josefin Sans;
    font-size: 11.4vw;
    color: white;
    margin: 0 0;
`

const ButtonSection = styled.div`
    grid-row: 2 / 3;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 20px 20px 60px 20px;
    gap: 20px;
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