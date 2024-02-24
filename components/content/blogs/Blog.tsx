import { useEffect } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import Paragraph from "./Paragraph";
import { device } from "../../../styles/devices";

const PageStructure = styled.main`
    display: grid;
    grid-template-rows: auto auto auto;
    row-gap: 0px;
    padding: 0 7vw;

    margin-top: 50px;

    @media ${device.tablet}, ${device.laptop} {
		row-gap: 30px;
        margin-top: 75px;
	}
`

const BlogHeaderSection = styled.div`
`

const TitleSection = styled.div`
    grid-row: 1 / 2;

    display: grid;
    grid-template-rows: auto auto;
    row-gap: 4px;

    @media ${device.tablet}, ${device.laptop} {
		row-gap: 0px;
	}
`

const TitleContainer = styled.div`
    height: auto;
    max-width: 100%;
    overflow: clip;
    word-wrap: break-word;
`

const Title = styled(animated.h1)`
    color: ${props => props.theme.colors.white};

    margin: 0 0;

    font-family: Raleway;
    font-weight: 650;
    font-size: 20pt;

    @media ${device.tablet} {
		font-size: 48pt;
	}

    @media ${device.laptop} {
		font-size: 69pt;
	}
`

const SubtitleSection = styled.div`
    display: flex;
    justify-content: space-between;
`

const SubtitleContainer = styled.div`
    height: auto;
    max-width: 100%;
    overflow: clip;
    word-wrap: break-word;

    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    text-align: left;
`

const Subtitle = styled(animated.h2)`
    font-family: Raleway;
    font-weight: 650;

    color: ${props => props.theme.colors.white};

    font-size: 14pt;

    @media ${device.tablet} {
		font-size: 32pt;
	}

    @media ${device.laptop} {
		font-size: 48pt;
	}

    margin: 0 0;
`

const DateContainer = styled.div`
    height: auto;
    max-width: 100%;
    overflow: clip;
    word-wrap: break-word;

    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    text-align: right;
`

const Date = styled(animated.h2)`
    font-family: Roboto;
    font-weight: 450;

    color: ${props => props.theme.colors.white};

    margin: 0 0;

    font-size: 10pt;

    @media ${device.tablet} {
		font-size: 18pt;
	}

    @media ${device.laptop} {
		font-size: 24pt;
	}
`

const ContentContainer = styled.div`
    display: grid;
    grid-auto-rows: min-content;
    row-gap: 4px;
`

const ImageSection = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    aspect-ratio: 2 / 1;
    flex-direction: column;

    margin: 10px 0px;
    
    @media ${device.tablet}, ${device.laptop} {
		margin: 0px 0px;
        aspect-ratio: 7 / 1;
	}
`

const ImageContainer = styled(animated.div)`
    background: ${props => props.theme.colors.scarlet};
    height: 100%;
    border-radius: 6px;

    overflow: clip;
`

const Image = styled.img<{ center: string }>`
    height: 100%;
    width: 100%;

    object-fit: cover;
    object-position: 75% 50%;
`

const Blog = ({data}) => {
    const [titleIntroAnimation, titleIntroApi] = useSpring(() => ({
		from: {
            y: "15vw",
		}
  	}));

    const [subtitleIntroAnimation, subtitleIntroApi] = useSpring(() => ({
		from: {
            x: "-40vw",
		}
  	}));

    const [dateIntroAnimation, dateIntroApi] = useSpring(() => ({
		from: {
            y: "5vw",
		}
  	}));

    const [imageIntroAnimation, imageIntroApi] = useSpring(() => ({
		from: {
			opacity: 0
		}
  	}));

    useEffect(() => {
        titleIntroApi.start({
            to: {
                y: "0vw",
            },
            config: {
                mass: 1,
                friction: 30,
                tension: 100
            },
            delay: 0
        })
        subtitleIntroApi.start({
            to: {
                x: "0vw",
            },
            config: {
                mass: 1,
                friction: 20,
                tension: 45
            },
            delay: 300
        })
        dateIntroApi.start({
            to: {
                y: "0vw",
            },
            config: {
                mass: 1,
                friction: 20,
                tension: 65
            },
            delay: 600
        })
        imageIntroApi.start({
            to: {
                opacity: 1
            },
            config: {
                mass: 75,
                friction: 60,
                tension: 50
            },
            delay: 600
        })
    }, [])

    return ( 
        <PageStructure>
            <BlogHeaderSection>
                <TitleSection>
                    <TitleContainer>
                        <Title style={titleIntroAnimation}>{data.title}</Title>
                    </TitleContainer>
                </TitleSection>
                <SubtitleSection>
                    <SubtitleContainer>
                        <Subtitle style={subtitleIntroAnimation}>{data.subtitle}</Subtitle>
                    </SubtitleContainer>
                    <DateContainer>
                        <Date style={dateIntroAnimation}>{data.pubDate}</Date>
                    </DateContainer>
                </SubtitleSection>
            </BlogHeaderSection>
            <ImageSection>
                <ImageContainer style={imageIntroAnimation}>
                    <Image src={data.imageUrl} alt={data.id} center={data.center}/>
                </ImageContainer>
            </ImageSection>
            <ContentContainer>
                {
                    data.content.map((paragraph: string, index: number) => {
                        return <Paragraph content={paragraph} delay={(1000 + (index * 275))}/>
                    })
                }
            </ContentContainer>
        </PageStructure>
     );
}
 
export default Blog;