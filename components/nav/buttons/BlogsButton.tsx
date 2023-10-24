import { animated } from "react-spring";
import styled from "styled-components";

const ButtonContainer = styled(animated.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: orange;
    width: 22vw;
    height: 10%;
    margin: 1vh 1vw 0vh 1vw;
    border: 1px solid;
    border-radius: 12px;
`

const BlogsButton = ({}) => {
    return ( 
        <ButtonContainer>
            BLOGS
        </ButtonContainer>
     );
}
 
export default BlogsButton;