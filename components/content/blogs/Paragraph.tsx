import { useEffect } from "react";
import Markdown from "react-markdown";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

export interface ParagraphProps {
    content: string,
    delay: number
}

const ParagraphStyled = styled(animated.p)`
    color: white;
    font-size: 18px;
    line-height: 24px;
    text-align: justify;
`

const Container = styled(animated.div)`
`

const Paragraph = ({ content, delay }) => {

    const [containerAnimation, containerApi] = useSpring(() => ({
        from: {
            y: -8
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
                mass: 10
            },
            delay: delay
        })
        containerApi.start({
            to: {
                y: 0
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