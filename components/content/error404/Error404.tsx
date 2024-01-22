import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

// Overall page layout: grid-template-rows: 75px auto 50px;
const PageStructure = styled.main`
    grid-row: 2 / 3;
    width: 100%;
    height: calc(100vh - 75px - 50px);
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
    font-size: clamp(40pt, 20vw, 120pt);
    font-family: Josefin Sans;
    margin: 0 0;
`

const SubText = styled.p`
    color: ${props => props.theme.colors.white};
    font-size: clamp(8pt, 2.65vw, 16pt);
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