import styled from "styled-components";

const FooterSection = styled.div`
    grid-row: 3 / 4;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    padding: 0px 20px;
`

const FooterName = styled.h2`
    font-family: Raleway;
    font-size: 100%;
    color: ${props => props.theme.colors.white};
`

const Footer = () => {
    return ( 
        <FooterSection>
            <FooterName>Justin Nguyen</FooterName>
        </FooterSection>
     );
}
 
export default Footer;