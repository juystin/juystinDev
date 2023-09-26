import styled from "styled-components";
import Image from 'next/image';
import menuIcon from "../../assets/header/menu.svg"

const HeaderContainer = styled.div`
    position: absolute;
    z-index: 2;
    height: 7vh;
    width: 100%;
`

const HeaderTitleContainer = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 3.75vw;
    margin-top: 0.8em;
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
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 1vw;
    padding-top: 0.4em;
`

const Header = () => {
    return ( 
        <HeaderContainer>
            <HeaderTitleContainer>
                <TitleContainer>
                    <TitlePrimary><strong>Justin Nguyen</strong></TitlePrimary>
                    <TitleSecondary>Full Stack Developer</TitleSecondary>
                </TitleContainer>
            </HeaderTitleContainer>
            <MenuContainer>
                <Image
                    priority
                    src={menuIcon}
                    alt="Menu"
                />
            </MenuContainer>
        </HeaderContainer>
     );
}
 
export default Header;