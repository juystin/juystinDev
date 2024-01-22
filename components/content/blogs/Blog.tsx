import { useEffect } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import Paragraph from "./Paragraph";

const PageStructure = styled.main`
    display: grid;
    grid-template-rows: auto auto auto;
    row-gap: 60px;
    margin: 0 4vw;
`

const BlogHeaderSection = styled.div`
`

const TitleSection = styled.div`
    grid-row: 1 / 2;
    margin-top: max(50px, 5vw);

    display: grid;
    grid-template-rows: auto auto;
    row-gap: 0px;
`

const TitleContainer = styled.div`
    height: auto;
    max-width: 100%;
    overflow: clip;
    word-wrap: break-word;
`

const Title = styled(animated.h1)`
    font-family: system-ui;
    font-size: max(42pt, 6vw);
    color: ${props => props.theme.colors.white};

    margin: 0 0;
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
`

const Subtitle = styled(animated.h2)`
    font-family: system-ui;
    font-size: max(30pt, 4vw);
    color: ${props => props.theme.colors.white};

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
`

const Date = styled(animated.h2)`
    font-family: system-ui;
    font-size: max(20pt, 2.5vw);
    color: ${props => props.theme.colors.white};

    margin: 0 0;
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
    aspect-ratio: 7 / 1;
    flex-direction: column;
`

const ImageContainer = styled(animated.div)`
    background: ${props => props.theme.colors.scarlet};
    height: 100%;
    border-radius: 6px;

    overflow: clip;
`

const Image = styled.img`
    height: 100%;
    width: 100%;
`

const Blog = ({data}) => {
    const [titleIntroAnimation, titleIntroApi] = useSpring(() => ({
		from: {
			opacity: 1,
            y: 200,
		}
  	}));

    const [subtitleIntroAnimation, subtitleIntroApi] = useSpring(() => ({
		from: {
			opacity: 1,
            x: -800,
		}
  	}));

    const [dateIntroAnimation, dateIntroApi] = useSpring(() => ({
		from: {
			opacity: 0,
            x: 800,
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
                opacity: 1,
                y: 0,
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
                opacity: 1,
                x: 0,
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
                opacity: 1,
                x: 0,
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
                mass: 10,
                friction: 100,
                tension: 60
            },
            delay: 700
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
                    <Image src={"/assets/thumbnails/blogs/" + data.id + "/0.png"} alt={data.id} />
                </ImageContainer>
            </ImageSection>
            <ContentContainer>
                {
                    data.content.map((paragraph: string, index: number) => {
                        return <Paragraph content={paragraph} delay={(575 + (index * 275))}/>
                    })
                }
            </ContentContainer>
        </PageStructure>
     );
}
 
export default Blog;