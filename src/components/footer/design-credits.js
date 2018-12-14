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
  display: flex;
  align-items: center;
`


export const DesignCredits = ({ content, link, arialLabel }) => (
  <StyledSpan>
    Design by:
    <StyledLink rel="noreferrer"role="link" href={link} arial-label={arialLabel}> {content} </StyledLink>
  </StyledSpan>
);
