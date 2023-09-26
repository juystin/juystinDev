import styled from "styled-components";

const ContentContainer = styled.main`
    position: absolute;
    z-index: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
`

const Title = styled.h1`
    color: white;
`

const Description = styled.p`
    color: white;
`

const Main = () => {
    return ( 
        <ContentContainer>
          <Title>
            Justin Nguyen
          </Title>
          <Description>
            Hello World!
          </Description>
        </ContentContainer>
     );
}
 
export default Main;