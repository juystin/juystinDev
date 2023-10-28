import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

const ContentContainer = styled.main`
    position: absolute;
    z-index: 0;
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 32vw 1fr 32vw;
    grid-template-rows: 32vh 1fr 32vh;
    align-items: center;
    justify-content: center;
    background-color: #0A090A;
`

const TextContainer = styled(animated.div)`
    z-index: 1;
    height: 100%;
    width: 100%;
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const TransitionContainer = styled(animated.div)`
    z-index: 2;
    height: 100%;
    width: 0%;
    background-color: #E2271E;
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    margin: 0px 0px 0px auto;
`

const Title = styled.h1`
    color: white;
`

const Description = styled.p`
    color: white;
`

const Home = ({activePage, routeTransitioning, setRouteTransitioning, animation, api}) => {

    const [boxCover, setBoxCover] = useState(false);
    const [boxFinish, setBoxFinish] = useState(false);

    const [transitionAnimation, transitionApi] = useSpring(() => ({ 
        config: {
            mass: 1,
            friction: 9,
            tension: 24,
        },
        from: {
            width: "0%",
            margin: "0px 0px 0px auto"
        },
    }));

    useEffect(() => {
        if (routeTransitioning) {
            transitionApi.start({
                to: {
                    width: "100%",
                    margin: "0px auto 0px 0px"
                },
                delay: 100,
                onRest: () => {
                    setBoxCover(true);
                    api.start({
                        from: {
                            opacity: 1
                        },
                        to: {
                            opacity: 0
                        },
                        immediate: true
                    })
                    transitionApi.start({
                        to: {
                            width: "0%",
                        },
                        delay: 100,
                        onRest: () => {
                            setBoxCover(false);
                            setRouteTransitioning(false);
                        }
                    })
                }
            })
        }
    }, [routeTransitioning])

    return ( 
        <ContentContainer>
            <TextContainer style={animation}>
                <Title>
                    Justin Nguyen
                </Title>
                <Description>
                    Hello World!
                </Description>
            </TextContainer>
            <TransitionContainer style={transitionAnimation}/>
        </ContentContainer>
     );
}
 
export default Home;