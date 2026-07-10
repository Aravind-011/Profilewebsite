import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/Mee.jpeg";
import HeroBgAnimation from "../HeroBgAnimation";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
// import StarCanvas from "../canvas/Stars";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 50px 30px;
  z-index: 1;
  background: linear-gradient(135deg, rgba(0, 255, 179, 0.05) 0%, rgba(0, 255, 179, 0.02) 50%, rgba(0, 255, 179, 0.03) 100%);

  @media (max-width: 960px) {
    padding: 40px 16px;
  }

  @media (max-width: 640px) {
    padding: 24px 16px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;
const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 42px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 56px;
  margin-bottom: 8px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 6px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 28px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 40px;
  margin-bottom: 12px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 18px;
    line-height: 32px;
    margin-bottom: 10px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  filter: drop-shadow(0 0 8px rgba(0, 255, 179, 0.3));
`;

const SubTitle = styled.div`
  font-size: 16px;
  line-height: 28px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
  letter-spacing: 0.3px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 20px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-decoration: none;
  border: none;
  outline: none;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 22px;
  height: 44px;
  border-radius: 10px;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  letter-spacing: 0.3px;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.bg};
    box-shadow: 0 8px 25px rgba(0, 255, 179, 0.3);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 640px) {
    height: 42px;
    font-size: 13px;
    padding: 8px 16px;
    gap: 8px;
  }
`;

const OpenToWorkButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  outline: none;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 22px;
  height: 44px;
  border-radius: 10px;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  letter-spacing: 0.3px;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.bg};
    box-shadow: 0 8px 25px rgba(0, 255, 179, 0.3);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 640px) {
    height: 42px;
    font-size: 13px;
    padding: 8px 16px;
    gap: 8px;
  }
`;

const ResumeIcon = styled.span`
  width: 16px;
  height: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 16px;

  svg {
    width: 16px;
    height: 16px;
    stroke: currentColor;
    stroke-width: 2;
    fill: none;
  }
`;

const OpenToWorkIcon = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  flex: 0 0 10px;
  animation: blink 1.5s infinite;

  @keyframes blink {
    0%, 49%, 100% {
      opacity: 1;
    }
    50%, 99% {
      opacity: 0.3;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    gap: 10px;
    justify-content: center;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  width: 360px;
  height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(0, 255, 179, 0.1), rgba(0, 255, 179, 0.05));
    border: 2px solid rgba(0, 255, 179, 0.2);
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: -12px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 255, 179, 0.1) 0%, transparent 70%);
    z-index: 0;
  }

  @media (max-width: 640px) {
    width: 280px;
    height: 280px;
  }
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 35%;
  display: block;
  position: relative;
  z-index: 2;
  box-shadow: 
    0 0 40px rgba(0, 255, 179, 0.2),
    0 0 20px rgba(0, 255, 179, 0.1),
    inset 0 -10px 30px rgba(0, 0, 0, 0.2),
    inset 0 10px 30px rgba(255, 255, 255, 0.05);
  filter: brightness(1.05) contrast(1.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    filter: brightness(1.12) contrast(1.12) drop-shadow(0 0 20px rgba(0, 255, 179, 0.3));
    box-shadow: 
      0 0 60px rgba(0, 255, 179, 0.3),
      0 0 30px rgba(0, 255, 179, 0.15),
      inset 0 -10px 30px rgba(0, 0, 0, 0.1),
      inset 0 10px 30px rgba(255, 255, 255, 0.1);
    transform: scale(1.03);
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

const Hero = () => {
  return (
    <div id="About">
      <HeroContainer>
        <HeroBg>
          {/* <StarCanvas /> */}
          <HeroBgAnimation />
        </HeroBg>

        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <Title>
                  Hi, I'm <br /> {Bio.name}
                </Title>
                <TextLoop>
                  I am a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <SubTitle>{Bio.summary}</SubTitle>
              </motion.div>

              <ButtonContainer>
                <ResumeButton href={Bio.resume} download="Aravind_Osuri_Resume.pdf" aria-label="Download Resume">
                  <ResumeIcon>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M5 20h14v-2H5v2zm7-18v10l4-4 1.4 1.4L12 16 6.6 9.4 8 8l4 4V2z" />
                    </svg>
                  </ResumeIcon>
                  Resume
                </ResumeButton>
                <OpenToWorkButton>
                  <OpenToWorkIcon />
                  Open to work
                </OpenToWorkButton>
              </ButtonContainer>
            </HeroLeftContainer>
            <HeroRightContainer>
              <motion.div {...headContentAnimation}>
                <Tilt>
                  <ImgContainer>
                    <Img src={`${HeroImg}?t=${Date.now()}`} alt="Aravind Osuri" />
                  </ImgContainer>
                </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;
