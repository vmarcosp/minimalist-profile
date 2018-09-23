import React from 'react';
import styled from 'styled-components';
import { themeColor } from '../../styleguide/colors';

const StyledContainer = styled.span`
  display: flex;
  align-items: center;
  .icon {
    color: ${themeColor};
    font-size: 20px;
    margin-left: 5px;
  }
`

export const MadeWith = ({ description }) =>
(
  <StyledContainer>
    {description} <span className='icon'>❤</span>
  </StyledContainer>
)
