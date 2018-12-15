import React from "react";
import styled from "styled-components";
import { Name } from "./name";
import { Location } from "./location";
import { name, location, biography, socialLinks} from "./../../profile.json";
import { Biography } from './biography';
import { SocialArea } from './social-area';
import { Footer } from '../footer';
import { headerHeight } from 'styleguide/breakpoints';
console.log(headerHeight);
const StyledContent = styled.main`
  text-align:center;
  padding:0 1rem;
`

const Wrapper = styled.div`
  position: relative;
  top: 100px;
  display: flex;
  flex-direction: column;
  min-height: calc(100% - (${headerHeight} + 100px));
  `

export const UserProfile = () =>
(
<Wrapper>
  <StyledContent>
    <Name name={name}/>
    <Location location={location}/>
    <Biography biography={biography}/>
    <SocialArea socialLinks={socialLinks}/>
  </StyledContent>
  <Footer/>
</Wrapper>
)
