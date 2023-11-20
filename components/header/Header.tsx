import styled from "styled-components";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.div`
    grid-row: 1 / 2;
    width: 100%;
    display: grid;
    grid-template-columns: minmax(60px, 1fr) 14fr;
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

const NavContainer = styled.nav`
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    height: 100%;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    font-family: Raleway;
`

const NavButton = styled.a`
    color: white;
    text-decoration: none;
`

const Header = ({}) => {

    const navigate = useNavigate();
    
    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo onClick={() => navigate("/")}></Logo>
            </LogoContainer>
            <NavContainer>
                <NavButton href="/projects/">Projects</NavButton>
                <NavButton href="/blogs/">Blogs</NavButton>
                <NavButton href="/pictures/">Pictures</NavButton>
            </NavContainer>
        </HeaderContainer>
     );
}
 
export default Header;