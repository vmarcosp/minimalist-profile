import React from 'react';
import styled from 'styled-components';
import { pink } from '../../styleguide/colors';

const StyledIconSpan = styled.span`
  color: ${pink}
`

export const MadeWith = ({madeWith}) => (
  <span>
    {madeWith} <StyledIconSpan>❤</StyledIconSpan>
  </span>
)