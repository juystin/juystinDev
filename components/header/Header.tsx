import styled from "styled-components";
import Image from 'next/image';
import menuIcon from "../../assets/header/menu.svg"
import specialMenuIcon from "../../assets/header/specialMenu.svg"
import { animated, useSpring } from "react-spring";
import { useEffect } from "react";

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
    color: white;
    font-size: 1.2em;
    margin: 0;
`

const TitleSecondary = styled.p`
    color: white;
    font-size: 0.8em;
    margin: 0;
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
    z-index: 3;
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
    color: orange;
    font-size: 1.2em;
    margin: 0;
    white-space: nowrap;
`

const SpecialTitleSecondary = styled.p`
    color: orange;
    font-size: 0.8em;
    margin: 0;
    white-space: nowrap;
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
                friction: 20,
                tension: 100,
            }
        })
    }, [navOpen])
    
    return (
        <>
            <HeaderContainer>
                <MenuContainer>
                    <Image
                        priority
                        src={menuIcon}
                        alt="Menu"
                        onClick={() => {
                            setNavOpen((navOpen) => (!navOpen))
                        }}
                    />
                </MenuContainer>
                <TitleContainer>
                    <TitlePrimary>Justin Nguyen</TitlePrimary>
                    <TitleSecondary>Full Stack Developer</TitleSecondary>
                </TitleContainer>
            </HeaderContainer>
            <SpecialHeaderContainer style={specialHeaderAnimation}>
                <SpecialMenuContainer>
                    <Image
                        priority
                        src={specialMenuIcon}
                        alt="Menu"
                        onClick={() => {
                            setNavOpen((navOpen) => (!navOpen))
                        }}
                    />
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