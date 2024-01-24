import { useEffect } from "react"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"
import Button from "./Button"
import { device } from "../../../styles/devices"

const PageStructure = styled.main`
    display: grid;
    grid-template-rows: min-content auto;
    row-gap: 35px;

    margin-top: 50px;

    @media ${device.tablet}, ${device.laptop} {
        margin-top: 75px;
	}
`

const TitleSection = styled.div`
    grid-row: 1 / 2;
`

const TitleContainer = styled.div`
    height: 100%;
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

    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 20px;

    box-sizing: border-box;

    @media ${device.laptop} {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: min-content;
    }
`

const Projects = ({data}) => {

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
                    <Title style={textIntroAnimation}>PROJECTS</Title>
                </TitleContainer>
            </TitleSection>
            <ButtonSection>
                { data["projects"].map((project) => {
                    return (
                        <Button data={project} />
                    )
				}) }
            </ButtonSection>
        </PageStructure>
     );
}
 
export default Projects;