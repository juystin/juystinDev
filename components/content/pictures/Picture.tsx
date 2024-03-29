import styled from "styled-components";
import { device } from "../../../styles/devices";

const PictureContainer = styled.div`
    grid-row: 1 / 2;
    grid-column: 1 / 2;

    position: absolute;
    z-index: 30;

    height: 100%;
    width: 100%;
`

const Modal = styled.div`
    height: 100dvh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    pointer-events: none;

    position: absolute:
    z-index: 41;
`

const Background = styled.div`
    background: black;
    opacity: 0.8;

    height: 100%;
    width: 100%;

    position: absolute;
    z-index: 40;
`

const ImageSection = styled.div`
    position: fixed;
    z-index: 43;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ImageContainer = styled.div<{ portrait: boolean }>`
    display: grid;
    grid-template-rows: auto min-content auto;
    gap: 2px;

    width: ${props => props.portrait ? "80%" : "80%"};
    height: auto;

    pointer-events: auto;

    @media ${device.laptop} {
        width: ${props => props.portrait ? "30%" : "40%"};
    }
`

const Image = styled.img`
    grid-row: 2 / 3;

    max-width:100%;
    max-height:100%;
`

const DateLocationContainer = styled.div`
    grid-row: 1 / 2;

    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

const Location = styled.span`
    font-family: Roboto;
    color: ${props => props.theme.colors.white};
    font-size: 11pt;
    font-weight: 50;
    text-align: left;
`

const Date = styled.span`
    color: ${props => props.theme.colors.white};
    font-family: Roboto;
    font-size: 11pt;
    font-weight: 50;
    text-align: right;
`

const Description = styled.p`
    grid-row: 3 / 4;
    color: ${props => props.theme.colors.white};

    height: auto;
    max-height: 90px;

    overflow: scroll;

    font-family: Roboto;
    font-size: 9pt;
    font-weight: 50;

    text-align: justify;

    margin: 0 0;

    @media ${device.tablet} {
        max-height: 70px;
    }

    @media ${device.laptop} {
        max-height: 70px;
    }
`

const Picture = ({ activePicture, setActivePicture }) => {

    return (
        <PictureContainer>
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
        </PictureContainer>
     );
}
 
export default Picture;