import React from "react";
import styled from "styled-components";
import { themeColor } from '../../styleguide/colors';

const StyledLocation = styled.p`
  font-weight:bold;
  color: ${themeColor};
`

export const Location = ({location}) => (
  <StyledLocation>
    {location}
  </StyledLocation>
)
