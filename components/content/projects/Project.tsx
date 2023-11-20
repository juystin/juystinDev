import styled from "styled-components";

const PageStructure = styled.main`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto 300px;
    row-gap: 40px;
    column-gap: 20px;
    margin: 80px 20px 60px 20px;
`

const ImageSection = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    display: grid;
    row-gap: 20px;
`

const Image = styled.div`
    display: flex;
    width: 100%;
    height: 600px;
    flex-direction: column;
    background: purple;
    border-radius: 6px;
`

const TextSection = styled.div`
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    height: 100%;
    width: 100%;
`

const TextContainer = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
    position: sticky;
    top: 40px;
`

const Title = styled.h1`
    color: white;
    text-transform: uppercase;
    width: 100%;
    margin-top: -12px;
    font-size: 36pt;
`

const Description = styled.p`
    color: white;
    width: 100%;
    margin-top: -24px;
`

const RelatedBlogsSection = styled.div`
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`

const ExtraBlogsTitle = styled.h1`
    font-family: Raleway;
    color: white;
`

const ExtraBlogsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 20px;
    height: 100%;
    width: 100%;
`

const ExtraBlog = styled.div`
    height: 100%;
    width: 400px;
    border-radius: 6px;
    background: purple;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 100%;
`

const DemoButton = styled.div`
    height: 80px;
    width: 100%;
    border-radius: 6px;
    background-color: gray;
`

const GitHubButton = styled.div`
    height: 80px;
    width: 100%;
    border-radius: 6px;
    background-color: gray;
`

const Project = ({id, name}) => {
    return ( 
        <PageStructure>
            <ImageSection>
                <Image></Image>
                <Image></Image>
                <Image></Image>
                <Image></Image>
            </ImageSection>
            <TextSection>
                <TextContainer>
                    <Title>{name}</Title>
                    <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod ipsum eu venenatis suscipit. Mauris quis metus sit amet elit.
                    </Description>
                    <ButtonContainer>
                        <DemoButton />
                        <GitHubButton />
                    </ButtonContainer>
                </TextContainer>
            </TextSection>
            <RelatedBlogsSection>
                <ExtraBlogsTitle>Related Blogs</ExtraBlogsTitle>
                <ExtraBlogsContainer>
                    <ExtraBlog></ExtraBlog>
                    <ExtraBlog></ExtraBlog>
                </ExtraBlogsContainer>
            </RelatedBlogsSection>
        </PageStructure>
     );
}
 
export default Project;