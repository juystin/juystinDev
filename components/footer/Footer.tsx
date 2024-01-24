import styled from "styled-components";
import { device } from "../../styles/devices";

const FooterSection = styled.div`    
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const FooterName = styled.h2`
    font-family: Roboto;
    font-size: 11px;
    font-weight: 250;
    
    color: ${props => props.theme.colors.white};

    margin: 0 0;

    @media ${device.tablet}, ${device.laptop} { 
        font-size: 16px;
    }
`

const Footer = () => {
    return ( 
        <FooterSection>
            <FooterName>Justin Nguyen</FooterName>
        </FooterSection>
     );
}
 
export default Footer;