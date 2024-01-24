import styled from "styled-components";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import OffsetLogo from "./OffsetLogo";
import GithubLogo from "./GithubLogo";
import MenuLogo from "./MenuLogo";
import { device } from "../../styles/devices";
import { useEffect, useState } from "react";
import XLogo from "./XLogo";
import Link from "next/link";

const HeaderSection = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    z-index: 9;
`

const HeaderContainer = styled.div`
    width: 100%;
    height: 50%;

    display: grid;
    grid-template-columns: 90px 1fr 100px;
    grid-template-rows: 100%;
`

const LogoContainer = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 2;

    height: 100%;
    width: 100%;

    cursor: pointer;

    z-index: 10;

    position: relative;
`

const OverlayLogo = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    position: absolute;
    z-index: 2;
`

const UnderlayLogo = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    position: absolute;
    z-index: 1;

    margin-top: -1px;
    margin-left: 2px;
`

const NavContainer = styled.nav`
    grid-column: 1 / 4;
    grid-row: 1 / 2;

    height: 100%;

    z-index: 5;

    gap: 30px;

    font-family: Roboto;
    font-size: 16px;
    font-weight: 250;

    display: none;

    @media ${device.laptop} { 
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const VerticalNavContainer = styled.nav`
    grid-column: 1 / 4;
    grid-row: 1 / 2;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 60px;

    background: ${props => props.theme.colors.dark_black};

    width: 100%;
    height: min-content;

    padding: 80px 0 50px 0;

    position: relative;

    @media ${device.laptop} {
        display: none;
    }
`

const NavButton = styled.span`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 250;
    color: ${props => props.theme.colors.white};
    cursor: pointer;
`

const SideButtonContainer = styled.div`
    grid-column: 3 / 4;
    grid-row: 1 / 2;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    height: 100%;
    width: 100%;

    @media ${device.laptop} { 
        justify-content: center;
    }
`

const GithubButton = styled(Link)`
    height: 100%;
    width: 100%;

    border-radius: 6px;

    background: ${props => props.theme.colors.scarlet};

    z-index: 11;

    cursor: pointer;

    display: none;

    @media ${device.laptop} { 
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const MenuButton = styled.div`
    height: auto;
    width: auto;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    z-index: 11;

    cursor: pointer;

    display: block;

    @media ${device.laptop} { 
        display: none;
    }
`

const Header = ({}) => {

    const navigate = useNavigate();

    const [navOpen, setNavOpen] = useState(false);
    
    return (
        <HeaderSection>
            <HeaderContainer>
                { navOpen ?
                    <VerticalNavContainer>
                        <NavButton onClick={() => {
                            setNavOpen(false)
                            navigate("/projects")
                        }}>Projects</NavButton>
                        <NavButton onClick={() => {
                            setNavOpen(false)
                            navigate("/blogs")
                        }}>Blogs</NavButton>
                        <NavButton onClick={() => {
                            setNavOpen(false)
                            navigate("/pictures")
                        }}>Pictures</NavButton>
                    </VerticalNavContainer>
                : <></>
                }
                <LogoContainer>
                    <OverlayLogo>
                        <Logo />
                    </OverlayLogo>
                    <UnderlayLogo>
                        <OffsetLogo />
                    </UnderlayLogo>
                </LogoContainer>
                <NavContainer>
                    <NavButton onClick={() => navigate("/projects")}>Projects</NavButton>
                    <NavButton onClick={() => navigate("/blogs")}>Blogs</NavButton>
                    <NavButton onClick={() => navigate("/pictures")}>Pictures</NavButton>
                </NavContainer>
                <SideButtonContainer>
                    <GithubButton href={"https://www.github.com/juystin"} target="_blank" rel="noopener noreferrer">
                        <GithubLogo />
                    </GithubButton>
                    <MenuButton onClick={() => {
                        setNavOpen(!navOpen);
                    }}>
                        {navOpen ? <XLogo /> : <MenuLogo />}
                    </MenuButton>
                </SideButtonContainer>
            </HeaderContainer>
        </HeaderSection>
     );
}
 
export default Header;