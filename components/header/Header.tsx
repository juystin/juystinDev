import styled from "styled-components";
import Image from 'next/image';
import menuIcon from "../../assets/header/menu.svg"
import { animated, useSpring } from "react-spring";
import { useEffect } from "react";
import Hamburger from "./Hamburger";
import SpecialHamburger from "./SpecialHamburger";

const HeaderContainer = styled.div`
    position: absolute;
    z-index: 2;
    height: 7vh;
    width: 100%;
    display: flex;
    padding-top: 0.25%;
`

const TitleContainer = styled.div`
    height: 100%;
    width: fit-content;
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
`

const TitleSecondary = styled.p`
    color: #E7E7E7;
    font-size: 0.8em;
    margin: 0;
    font-weight: lighter;
`

const MenuContainer = styled.div`
    height: 100%;
    min-width: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SpecialHeaderContainer = styled(animated.div)`
    position: absolute;
    z-index: 4;
    height: 7vh;
    width: 0%;
    display: flex;
    padding-top: 0.25%;
    overflow: clip;
`

const SpecialTitleContainer = styled.div`
    height: 100%;
    min-width: fit-content;
    width: fit-content;
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
`

const SpecialTitleSecondary = styled.p`
    color: #E2271E;
    font-size: 0.8em;
    margin: 0;
    white-space: nowrap;
    font-weight: lighter;
`

const SpecialMenuContainer = styled.div`
    height: 100%;
    min-width: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Header = ({navOpen, setNavOpen}) => {

    const [specialHeaderAnimation, specialHeaderApi] = useSpring(() => ({
        width: navOpen ? "0%" : "25vw"
    }));

    useEffect(() => {
        specialHeaderApi.start({
            width: navOpen ? "25vw" : "0%",
            config: {
                mass: 1,
                friction: 35,
                tension: 220,
            }
        })
    }, [navOpen])
    
    return (
        <>
            <HeaderContainer>
                <MenuContainer>
                    <Hamburger color="white" navOpen={navOpen} setNavOpen={setNavOpen}/>
                </MenuContainer>
                <TitleContainer>
                    <TitlePrimary>Justin Nguyen</TitlePrimary>
                    <TitleSecondary>Full Stack Developer</TitleSecondary>
                </TitleContainer>
            </HeaderContainer>
            <SpecialHeaderContainer style={specialHeaderAnimation}>
                <SpecialMenuContainer>
                    <SpecialHamburger color="red" navOpen={navOpen} setNavOpen={setNavOpen}/>
                </SpecialMenuContainer>
                <SpecialTitleContainer>
                    <SpecialTitlePrimary>Justin Nguyen</SpecialTitlePrimary>
                    <SpecialTitleSecondary>Full Stack Developer</SpecialTitleSecondary>
                </SpecialTitleContainer>
            </SpecialHeaderContainer>
        </>
     );
}
 
export default Header;