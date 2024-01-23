import styled from "styled-components";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import OffsetLogo from "./OffsetLogo";
import GithubLogo from "./GithubLogo";

const HeaderSection = styled.div`
    grid-row: 1 / 2;
    
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`

const HeaderContainer = styled.div`
    width: 100%;
    height: 50%;

    display: grid;
    grid-template-columns: 90px 1fr 100px;
    grid-template-rows: 100%;

    padding: 0px 0px;
`

const LogoContainer = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 2;

    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    cursor: pointer;

    z-index: 10;
`

const OffsetLogoContainer = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 2;

    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    cursor: pointer;
    
    z-index: 9;

    margin-top: -1px;
    margin-left: 2px;
`

const NavContainer = styled.nav`
    grid-column: 1 / 4;
    grid-row: 1 / 2;

    height: 100%;

    z-index: 5;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 30px;

    font-family: Roboto;
    font-size: 16px;
    font-weight: 250;
`

const NavButton = styled.a`
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    cursor: pointer;
`

const GithubButtonContainer = styled.div`
    grid-column: 3 / 4;
    grid-row: 1 / 2;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
    width: 100%;
`

const GithubButton = styled.a`
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 6px;

    background: ${props => props.theme.colors.scarlet};

    z-index: 11;

    cursor: pointer;
`

const Header = ({}) => {

    const navigate = useNavigate();
    
    return (
        <HeaderSection>
            <HeaderContainer>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                <OffsetLogoContainer>
                    <OffsetLogo />
                </OffsetLogoContainer>
                <NavContainer>
                    <NavButton onClick={() => navigate("/projects")}>Projects</NavButton>
                    <NavButton onClick={() => navigate("/blogs")}>Blogs</NavButton>
                    <NavButton onClick={() => navigate("/pictures")}>Pictures</NavButton>
                </NavContainer>
                <GithubButtonContainer>
                    <GithubButton href={"https://www.github.com/juystin"} target="_blank" rel="noopener noreferrer">
                        <GithubLogo />
                    </GithubButton>
                </GithubButtonContainer>
            </HeaderContainer>
        </HeaderSection>
     );
}
 
export default Header;