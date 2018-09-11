import React from "react";
import styled from "styled-components";
import { pink } from '../../styleguide/colors';

const StyledLocation = styled.p`
  font-weight:bold;
  color: ${pink};
`

export const Location = ({location}) => <StyledLocation>{location}</StyledLocation>
