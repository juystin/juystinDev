import Markdown from "react-markdown";
import styled from "styled-components";

const Modal = styled.div`
    grid-row: 1 / 2;
    grid-column: 1 / 2;

    z-index: 3;

    height: 100dvh;
    width: 100dvw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    pointer-events: none;
`

const Background = styled.div`
    grid-row: 1 / 2;
    grid-column: 1 / 2;

    z-index: 2;

    background: black;
    opacity: 0.8;
`

const ImageSection = styled.div`
    position: fixed;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ImageContainer = styled.div<{ portrait: boolean }>`
    width: ${props => props.portrait ? "30%" : "60%"};
    height: ${props => props.portrait ? "auto" : "auto"};

    display: grid;
    grid-template-rows: auto auto auto;
    gap: 2px;

    pointer-events: auto;
`

const Image = styled.img`
    grid-row: 2 / 3;

    width: 100%;
    height: 100%;
`

const DateLocationContainer = styled.div`
    grid-row: 1 / 2;

    width: 100%;

    display: flex;
    justify-content: space-between;
`

const Location = styled.span`
    font-family: system-ui;
    color: ${props => props.theme.colors.white};
    font-family: system-ui;
    font-size: 11pt;
    font-weight: 250;
`

const Date = styled.span`
    color: ${props => props.theme.colors.white};
    font-family: system-ui;
    font-size: 11pt;
    font-weight: 250;
`

const Description = styled.p`
    grid-row: 3 / 4;
    color: ${props => props.theme.colors.white};

    height: auto;
    max-height: 100px;

    overflow: scroll;

    font-family: system-ui;
    font-size: 9pt;
    font-weight: 250;

    text-align: justify;

    margin: 0 0;
`

const Picture = ({ activePicture, setActivePicture }) => {

    return (
        <>
            <Background onClick={() => setActivePicture(null)}/>
            <Modal>
                <ImageSection>
                    <ImageContainer portrait={activePicture.portrait}>
                        <DateLocationContainer>
                            <Location>{activePicture.location}</Location>
                            <Date>{activePicture.date}</Date>
                        </DateLocationContainer>
                        <Image src={activePicture.url}/>
                        <Description>
                            {activePicture.description}
                        </Description>
                    </ImageContainer>
                </ImageSection>
            </Modal>
        </>
        
     );
}
 
export default Picture;