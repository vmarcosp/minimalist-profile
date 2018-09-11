import React from "react";
import styled from "styled-components";
import { Name } from "./name";
import { Location } from "./location";
import { name, location, biography, socialLinks} from "./../../profile.json";
import { Biography } from './biography';
import { SocialArea } from './social-area';

const StyledContent = styled.div` 
  text-align:center;
  padding:0 1rem;
`

const Wrapper = styled.div`
  position: relative;
  top: 100px;
  display: flex;
  flex-direction: column;
  min-height: calc(100% - (var(--header-height) + 100px));`

export const UserProfile = () => 
<Wrapper>
  <StyledContent>
    <Name name={name}></Name>
    <Location location={location}></Location>
    <Biography biography={biography}></Biography>
    <SocialArea socialLinks={socialLinks}></SocialArea>
  </StyledContent>
</Wrapper>
