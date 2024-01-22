import * as React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components";

const Styled = styled.svg`
  width: auto;
  height: 100%;
  path {
    fill: ${props => props.theme.colors.white};
    stroke: ${props => props.theme.colors.white};
  }
`

const Logo = ({}) => {

  const navigate = useNavigate();

  return (
  <Styled
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 132.292 132.292"
    onClick={() => navigate("/")}
  >
    <path
      d="m62.03 89.156 17.364-52.584 22.012 35.953 10.89-25.778-8.742 40.282-22.607-35.176ZM70.99 36.345l-18.538 52.5-12.314 6.246-16.446-31.308 16.705 19.622 5.373-.014z"
      style={{
        fillOpacity: 1,
        strokeWidth: 0.330729,
      }}
      transform="translate(-31.8 -28.552) scale(1.44034)"
    />
  </Styled>
  )

}

export default Logo;
