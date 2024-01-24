import styled from "styled-components";

const FooterSection = styled.div`
    height: 50px;

    
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const FooterName = styled.h2`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 250;
    
    color: ${props => props.theme.colors.white};

    margin: 0 0;
`

const Footer = () => {
    return ( 
        <FooterSection>
            <FooterName>Justin Nguyen</FooterName>
        </FooterSection>
     );
}
 
export default Footer;