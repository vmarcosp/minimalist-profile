import React from 'react'
import styled from 'styled-components'

const StyledBackground = styled.div`
  height: 100%;
  width: 100%;
  background-size:cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => props.imageUrl});
  filter: grayscale(1) blur(2px);
`

export const Background = props => <StyledBackground {...props} role="img" aria-label="Header background" />
