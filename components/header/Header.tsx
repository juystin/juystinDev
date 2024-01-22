import styled from "styled-components";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import OffsetLogo from "./OffsetLogo";
import GithubLogo from "./GithubLogo";

const HeaderContainer = styled.div`
    grid-row: 1 / 2;
    width: 100%;
    display: grid;
    grid-template-columns: minmax(60px, 1fr) 14fr minmax(80px, 1.2fr);
    grid-template-rows: 100%;
    height: 100%;
`

const LogoContainer = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 100%;
    width: max(50px, 60%);
    z-index: 10;
    margin-left: 20px;
`

const OffsetLogoContainer = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 100%;
    width: max(50px, 60%);
    z-index: 9;
    margin-left: 22px;
    margin-top: -1px;
`

const NavContainer = styled.nav`
    grid-column: 1 / 4;
    grid-row: 1 / 2;
    height: 100%;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    font-family: Raleway;
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
    margin-left: -20px;
`

const GithubButton = styled.a`
    height: 60%;
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
     );
}
 
export default Header;