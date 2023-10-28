import styled from "styled-components";
import Image from 'next/image';
import menuIcon from "../../assets/header/menu.svg"
import { animated, useSpring } from "react-spring";
import { useEffect } from "react";
import Hamburger from "./Hamburger";
import SpecialHamburger from "./SpecialHamburger";
import { Link, useNavigate } from "react-router-dom";

const HeaderContainer = styled(animated.div)`
    position: fixed;
    z-index: 2;
    height: 7vh;
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 0.25%;
    background-color: #0A090A;
`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

const TitlePrimary = styled.h1`
    color: #E7E7E7;
    font-size: 1.2em;
    margin: 0;
    font-weight: bold;
    cursor: pointer;
`

const TitleSecondary = styled.p`
    color: #E7E7E7;
    font-size: 0.8em;
    margin: 0;
    font-weight: lighter;
    cursor: pointer;
`

const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0.75vw;
    cursor: pointer;
`

const SpecialHeaderContainer = styled(animated.div)`
    position: fixed;
    z-index: 4;
    height: 7vh;
    width: 0%;
    display: flex;
    padding-top: 0.25%;
    overflow: clip;
`

const SpecialTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

const SpecialTitlePrimary = styled.h1`
    color: #E2271E;
    font-size: 1.2em;
    margin: 0;
    white-space: nowrap;
    font-weight: bold;
    cursor: pointer;
`

const SpecialTitleSecondary = styled.p`
    color: #E2271E;
    font-size: 0.8em;
    margin: 0;
    white-space: nowrap;
    font-weight: lighter;
    cursor: pointer;
`

const SpecialMenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0.75vw;
    cursor: pointer;
`

const PageNameContainer = styled.div`
    position: fixed;
    z-index: 5;
    height: 7vh;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 0.25%;
    overflow: clip;
    text-transform: uppercase;
    pointer-events: none;
`

const PageName = styled.h2`
    margin-top: 2vh;
    color: white;
`

const Header = ({navOpen, setNavOpen, routeTransitioning, activePage, setActivePage, inAnimation, homeFadeInApi}) => {

    const navigate = useNavigate();

    const [specialHeaderAnimation, specialHeaderApi] = useSpring(() => ({
        config: {
            mass: 1,
            friction: 35,
            tension: 220,
        }
    }));

    useEffect(() => {
        specialHeaderApi.start({
            to: {
                width: navOpen ? "25vw" : "0%"
            }
        })
    }, [navOpen])
    
    return (
        <>
            <PageNameContainer>
                <PageName>{activePage}</PageName>
            </PageNameContainer>
            <HeaderContainer style={inAnimation}>
                <MenuContainer>
                    <Hamburger navOpen={navOpen} setNavOpen={setNavOpen} routeTransitioning={routeTransitioning}/>
                </MenuContainer>
                <TitleContainer
                    onClick={() => {
                        if (!routeTransitioning && activePage !== "home") {
                            navigate("/")
                            setActivePage("home")
                            homeFadeInApi.start({
                                from: {
                                    opacity: 0
                                },
                                to: {
                                    opacity: 1
                                }
                            })
                        }
                    }}
                >
                    <TitlePrimary>Justin Nguyen</TitlePrimary>
                    <TitleSecondary>Full Stack Developer</TitleSecondary>
                </TitleContainer>
            </HeaderContainer>
            <SpecialHeaderContainer style={specialHeaderAnimation}>
                <SpecialMenuContainer>
                    <SpecialHamburger color="red" navOpen={navOpen} setNavOpen={setNavOpen} routeTransitioning={routeTransitioning}/>
                </SpecialMenuContainer>
                <SpecialTitleContainer
                    onClick={() => {
                        if (!routeTransitioning && activePage !== "home") {
                            navigate("/")
                            setActivePage("home")
                            homeFadeInApi.start({
                                from: {
                                    opacity: 0
                                },
                                to: {
                                    opacity: 1
                                }
                            })
                        }
                    }}
                >
                    <SpecialTitlePrimary>Justin Nguyen</SpecialTitlePrimary>
                    <SpecialTitleSecondary>Full Stack Developer</SpecialTitleSecondary>
                </SpecialTitleContainer>
            </SpecialHeaderContainer>
        </>
     );
}
 
export default Header;