import React from "react";
import styled from "styled-components";
import { black } from 'colors';

const StyledName = styled.h2`
  color: ${black};
  font-weight:normal;
  text-transform:uppercase;`;

export const Name = ({name}) => (
  <StyledName>
    {name}
  </StyledName>
  )
