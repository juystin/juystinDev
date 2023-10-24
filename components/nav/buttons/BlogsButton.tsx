import { animated } from "react-spring";
import styled from "styled-components";

const ButtonContainer = styled(animated.div)`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: end;
    width: 22vw;
    height: 10%;
    margin: 1vh 1vw 0vh 1.4vw;
`

const ButtonTitle = styled(animated.h2)`
    font-size: 2.2em;
    margin: 0 0;
`

const ButtonDescription = styled(animated.p)`
    font-size: 1.2em;
    margin: 0 0;
`

const BlogsButton = ({}) => {
    return ( 
        <ButtonContainer>
            <ButtonTitle>BLOGS</ButtonTitle>
            <ButtonDescription>Talking about stuff</ButtonDescription>
        </ButtonContainer>
     );
}
 
export default BlogsButton;