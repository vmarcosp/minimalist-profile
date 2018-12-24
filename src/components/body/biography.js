import React from 'react';
import styled from 'styled-components';
import { gray } from 'styleguide/colors';
import { mobileScreenSize } from 'styleguide/breakpoints';

const StyledBiography = styled.p`
  color: ${gray};
  @media screen and (min-width:${mobileScreenSize}){
    max-width: 900px;
  }
  margin: 0 auto;
`

export const Biography = ({biography}) => (
  <StyledBiography>
    {biography}
  </StyledBiography>
  )
