import { useEffect } from "react";
import Markdown from "react-markdown";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { device } from "../../../styles/devices";

export interface ParagraphProps {
    content: string,
    delay: number
}

const ParagraphStyled = styled(animated.p)`
    color: white;
    font-size: 12px;
    line-height: 18px;
    text-align: justify;

    font-family: Roboto;
    font-weight: 100;
    
    margin: 0 0;

    @media ${device.tablet} {
        font-size: 16px;
        line-height: 21px;
	}

    @media ${device.laptop} {
        font-size: 18px;
        line-height: 24px;
	}
`

const Container = styled(animated.div)`
    display: flex;
    align-items: center;
    gap: 0;
`

const Paragraph = ({ content, delay }) => {

    const [containerAnimation, containerApi] = useSpring(() => ({
        from: {
            y: "0.75vh"
        }
    }))

    const [textAnimation, textApi] = useSpring(() => ({
        from: {
            opacity: 0,
        }
    }))

    useEffect(() => {
        textApi.start({
            to: {
                opacity: 1,
            },
            config: {
                tension: 20,
                friction: 30,
                mass: 8
            },
            delay: delay
        })
        containerApi.start({
            to: {
                y: "0vh"
            },
            config: {
                tension: 60,
                friction: 20,
                mass: 1
            },
            delay: delay
        })
    }, [])

    return ( 
        <Container style={containerAnimation}>
            <ParagraphStyled style={textAnimation}>
                <Markdown>
                    { content }
                </Markdown>
            </ParagraphStyled>
        </Container>
     );
}
 
export default Paragraph;