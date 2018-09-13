import React from 'react'
import styled from 'styled-components'
import { ProfileImage } from './profile-image'
import { Background } from './background';
import imageUrl from '../../assets/profile.jpg'
import { headerHeight } from '../../styleguide/breakpoints'

const StyledHeader = styled.header`
  position:relative;
  height: 300px;
`

export const Header = () =>
  (
    <StyledHeader>
      <Background imageUrl={imageUrl} />
      <ProfileImage imageUrl={imageUrl} />
    </StyledHeader>
  )
