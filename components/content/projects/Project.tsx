import styled from "styled-components";
import blogData from "../../../public/data/blogs.json"
import { useNavigate } from "react-router-dom";
import GithubLogo from "../../header/GithubLogo";
import { device } from "../../../styles/devices";

const PageStructure = styled.main`
    display: flex;
    flex-direction: column;
    margin-top: 75px;

    overflow-x: hidden;

    @media ${device.tablet} {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: auto auto;

        row-gap: 40px;
        column-gap: 20px;

        overflow: visible;
    }
`

const ImageSection = styled.div`
    height: 30vh;
    overflow: scroll;

    @media ${device.tablet} {
        display: grid;
        grid-column: 1 / 2;
        grid-row: 1 / 2;

        height: auto;
    }
`

const ImageScroller = styled.div`
    display: flex;
    gap: 20px;

    height: 100%;
    width: fit-content;

    padding: 8px 0;

    box-sizing: border-box;

    @media ${device.tablet} {
        display: grid;
        grid-column: 1 / 2;
        grid-row: 1 / 2;

        height: auto;
        width: auto;

        padding: 0 0;
    }
`

const Image = styled.div<{ id: number }>`
    width: auto;
    height: 100%;
    aspect-ratio: 5 / 3;
    border-radius: 6px;
    overflow: clip;

    background: ${props => props.id % 2 === 0 ? props.theme.colors.white : props.theme.colors.black};
`

const TextSection = styled.div`
    height: auto;
    width: 100%;

    margin-top: 50px;

    @media ${device.tablet} {
        grid-column: 2 / 3;
        grid-row: 1 / 2;

        margin-top: 0px;
    }
`

const TextContainer = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    gap: 50px;
    
    @media ${device.tablet} {
        height: 450px;

        position: sticky;
        top: 40px;

        justify-content: space-between;
    }
`

const Title = styled.h1`
    color: ${props => props.theme.colors.white};
    text-transform: uppercase;
    width: 100%;
    margin-top: -12px;
    font-size: 36pt;
    font-family: Raleway;
    font-weight: 700;

    @media ${device.tablet} {
        height: 450px;

        position: sticky;
        top: 40px;

        justify-content: space-between;
    }
`

const Description = styled.p`
    color: ${props => props.theme.colors.white};
    width: 100%;
    margin-top: -24px;
    font-family: Roboto;
    font-weight: 300;
`

const RelatedBlogsSection = styled.div`
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    height: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    margin-top: 25px;

    @media ${device.tablet} {
        margin-top: 0px;
    }
`

const ExtraBlogsTitle = styled.h1`
    font-family: Raleway;
    color: ${props => props.theme.colors.white};
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
    background: ${props => props.theme.colors.scarlet};

    position: relative;

    overflow: clip;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 100%;
`

const DemoButton = styled.a`
    height: 80px;
    width: 100%;
    border-radius: 6px;
    background: ${props => props.theme.colors.scarlet};
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
`

const DemoText = styled.span`
    font-family: Roboto;
    font-size: 18pt;

    text-transform: uppercase;
    letter-spacing: 0.75px;

    font-weight: 300;

    color: ${props => props.theme.colors.white};
`

const GitHubButton = styled.a`
    height: 80px;
    width: 100%;
    border-radius: 6px;
    background: ${props => props.theme.colors.scarlet};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    text-decoration: none;
`

const GithubText = styled.span`
    font-family: Roboto;
    font-size: 18pt;

    text-transform: uppercase;

    font-weight: 550;

    color: ${props => props.theme.colors.white};
`

const Thumbnail = styled.img`
    height: 100%;
    width: 100%;
`

const BlogImage = styled.img`
    height: 100%;
    width: 100%;

    object-fit: cover;

    position: absolute;
    z-index: 1;
`

const ShadowOverlay = styled.div`
    height: 100%;
    width: 100%;

    -webkit-box-shadow:inset 0 0 24px 4px ${props => props.theme.colors.black};
    box-shadow:inset 0 0 24px 4px ${props => props.theme.colors.black};

    position: absolute;
    z-index: 3;
`

const ScreenOverlay = styled.div`
    height: 100%;
    width: 100%;

    background: ${props => props.theme.colors.black};

    position: absolute;
    z-index: 2;

    opacity: 0.58;
`

const BlogNameSection = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;

    position: absolute;
    z-index: 4;
`

const BlogNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;
    width: 100%;
`

const BlogTitle = styled.h1`
    color: ${props => props.theme.colors.white};
    font-family: Raleway;

    font-size: 28pt;
    text-align: center;

    margin: 0 0;
`

const BlogSubtitle = styled.h2`
    color: ${props => props.theme.colors.white};
    font-family: Raleway;

    font-size: 16pt;
    text-align: center;

    margin: 0 0 0 0;
`

const Project = ({data}) => {

    const navigate = useNavigate();

    return ( 
        <PageStructure>
            <ImageSection>
                <ImageScroller>
                    { data.image_urls.map((url: string, index: number) => {
                        return (
                            <Image id={index}>
                                <Thumbnail src={"/" + url} />
                            </Image>
                        )
                        }
                    )}
                </ImageScroller>
            </ImageSection>
            <TextSection>
                <TextContainer>
                    <Title>{data.title}</Title>
                    <Description>{data.description}</Description>
                    <ButtonContainer>
                        {
                            data.demo ?
                            <DemoButton href={data.demo} target="_blank" rel="noopener noreferrer">
                                <DemoText>{ data.demoText }</DemoText>
                            </DemoButton>
                            :
                            <></>
                        }
                        {
                            data.github ?
                            <GitHubButton href={data.github} target="_blank" rel="noopener noreferrer">
                                <GithubLogo />
                                <GithubText>
                                    GitHub
                                </GithubText>
                            </GitHubButton>
                            :
                            <></>
                        }
                    </ButtonContainer>
                </TextContainer>
            </TextSection>
            { data.blogs.length !== 0 ?
                <RelatedBlogsSection>
                    <ExtraBlogsTitle>Related Blogs</ExtraBlogsTitle>
                    <ExtraBlogsContainer>
                        {
                            data.blogs.map((id: number) => {

                                let blog = blogData.blogs.find((blog) => blog.id === id)

                                return (
                                    <ExtraBlog>
                                        <ShadowOverlay />
                                        <ScreenOverlay />
                                        <BlogImage src={"/assets/thumbnails/blogs/" + blog.id + "/0.png"}></BlogImage>
                                        <BlogNameSection>
                                            <BlogNameContainer onClick={() => navigate("/blogs/" + blog.id)}>
                                                <BlogTitle>{blog.title}</BlogTitle>
                                                <BlogSubtitle>{blog.subtitle}</BlogSubtitle>
                                            </BlogNameContainer>
                                        </BlogNameSection>
                                    </ExtraBlog>
                                )
                            })    
                        }
                    </ExtraBlogsContainer>
                </RelatedBlogsSection>
                : <></>
            }
        </PageStructure>
     );
}
 
export default Project;