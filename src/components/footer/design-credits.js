import React from "react";
import styled from 'styled-components';
import { grayLight } from '../../styleguide/colors';

const StyledLink = styled.a`
  color: ${grayLight};
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`

export const DesignCredits = ({ content, link, arialLabel }) => (
  <span>
    Design by:
    <StyledLink role="link" href={link} arial-label={arialLabel}> {content} </StyledLink>
  </span>
);