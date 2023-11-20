import { useEffect } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import Button from "./Button";

const PageStructure = styled.main`
    display: grid;
    grid-template-rows: minmax(200px, 25vw) auto;
`

const TitleSection = styled.div`
    grid-row: 1 / 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: max(50px, 5vw);
`

const TitleContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    overflow: clip;
`

const Title = styled(animated.h1)`
    font-family: Josefin Sans;
    font-size: max(42pt, 11vw);
    color: white;
    margin: 0px 0px 0px 20px;
`

const ButtonSection = styled.div`
    grid-row: 2 / 3;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 20px 20px 60px 20px;
    gap: 20px;
`

const Blogs = () => {
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
                    <Title style={textIntroAnimation}>PICTURES</Title>
                </TitleContainer>
            </TitleSection>
            <ButtonSection>
                <Button id={0} name={"brutusmaps"} />
                <Button id={1} name={"brutusforce"} />
                <Button id={2} name={"brutusforce"} />
                <Button id={3} name={"brutusforce"} />
                <Button id={4} name={"brutusforce"} />
                <Button id={5} name={"brutusforce"} />
                <Button id={6} name={"brutusforce"} />
            </ButtonSection>
        </PageStructure>
     );
}
 
export default Blogs;