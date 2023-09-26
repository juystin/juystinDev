import styled from "styled-components";
import Image from 'next/image';
import menuIcon from "../../assets/header/menu.svg"

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
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1%;
`

const Header = () => {
    return ( 
        <HeaderContainer>
            <MenuContainer>
                <Image
                    priority
                    src={menuIcon}
                    alt="Menu"
                />
            </MenuContainer>
            <TitleContainer>
                <TitlePrimary><strong>Justin Nguyen</strong></TitlePrimary>
                <TitleSecondary>Full Stack Developer</TitleSecondary>
            </TitleContainer>
        </HeaderContainer>
     );
}
 
export default Header;