import styled from "styled-components";

const PageStructure = styled.main`
    grid-row: 2 / 3;
    width: 100%;
`

const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;
    width: 100%;
`

const MainText = styled.h1`
    color: ${props => props.theme.colors.white};
    font-size: 200px;
    font-family: Josefin Sans;
    margin: 0 0;
`

const SubText = styled.p`
    color: ${props => props.theme.colors.white};
    font-family: Roboto;
    font-size: 20px;
    font-weight: 100;
    margin: 0 0;
`

const Error404 = ({}) => {

    return ( 
        <PageStructure>
            <TextSection>
                <MainText>404</MainText>
                <SubText>Could not find this resource :(</SubText>
            </TextSection>
        </PageStructure>
     );
}
 
export default Error404;