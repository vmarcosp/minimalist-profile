import React from "react";
import styled from 'styled-components';
import { grayLight, themeColor } from 'colors';

const StyledLink = styled.a`
  color: ${grayLight};
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  &:hover{
    color: ${themeColor}
  }
`

const StyledSpan = styled.span`
  display: block;
  align-items: center;
`


export const DesignCredits = ({ content, link, arialLabel }) => (
  <StyledSpan>
    Design by:
    <StyledLink rel="noreferrer"role="link" href={link} arial-label={arialLabel}> {content} </StyledLink>
  </StyledSpan>
);
