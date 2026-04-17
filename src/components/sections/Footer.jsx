import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const FooterContainer = styled.div`
  width: 100%;
  
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 24px;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.primary}aa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: ${({ theme }) => theme.primary};
  letter-spacing: 1px;
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease-in-out;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.primary}00);
    transition: width 0.3s ease-in-out;
  }
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    &::after {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.3s ease-in-out;
  padding: 8px 12px;
  border-radius: 8px;
  background: ${({ theme }) => theme.primary}15;
  border: 1px solid ${({ theme }) => theme.primary}40;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary}30;
    border-color: ${({ theme }) => theme.primary}80;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px ${({ theme }) => theme.primary}30;
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text_secondary}aa;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.primary}30;
  padding-top: 1.5rem;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>ARAVIND OSURI</Logo>
        <div className="flex flex-row gap-1">
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display">
          <FaGithub/>
          </SocialMediaIcon>
    <SocialMediaIcon href={`mailto:${Bio.gmail}`}> 
  <SiGmail />
</SocialMediaIcon>
      
          </div>
        <Nav>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </Nav>
      
      
        <Copyright>&copy; ARAVIND OSURI. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
