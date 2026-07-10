import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { Tilt } from "react-tilt";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 60px 30px;
  background: linear-gradient(135deg, rgba(0, 255, 179, 0.02) 0%, transparent 50%, rgba(0, 255, 179, 0.02) 100%);

  @media (max-width: 960px) {
    padding: 40px 20px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  gap: 40px;
  padding: 0 30px;

  @media (max-width: 960px) {
    gap: 30px;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  .gradient {
    background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const HighlightsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  align-items: flex-start;
  margin-top: 40px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const StackCard = styled.div`
  background: linear-gradient(135deg, rgba(13, 19, 24, 0.8), rgba(20, 28, 35, 0.6));
  box-shadow: 0 8px 32px rgba(0, 255, 179, 0.08), 0 0 20px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 255, 179, 0.2);
  border-radius: 16px;
  padding: 32px 28px;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(0, 255, 179, 0.5);
    box-shadow: 0 16px 48px rgba(0, 255, 179, 0.2), 0 0 30px rgba(0, 255, 179, 0.1);
    background: linear-gradient(135deg, rgba(13, 19, 24, 0.95), rgba(20, 28, 35, 0.8));
  }

  @media (max-width: 1200px) {
    max-width: 350px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    padding: 24px 20px;
    gap: 18px;
  }
`;

const StackTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, #00d4aa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  letter-spacing: 0.5px;
`;

const IconsCircle = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
`;

const IconBox = styled.div`
  padding: 14px 20px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(0, 255, 179, 0.2), rgba(0, 220, 150, 0.1));
  border: 2px solid rgba(0, 255, 179, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 16px rgba(0, 255, 179, 0.12), inset 0 1px 2px rgba(255, 255, 255, 0.08);
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  white-space: nowrap;
  min-width: fit-content;
  letter-spacing: 0.3px;

  &:hover {
    transform: translateY(-6px) scale(1.05);
    box-shadow: 0 12px 28px rgba(0, 255, 179, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.1);
    border-color: rgba(0, 255, 179, 0.7);
    background: linear-gradient(135deg, rgba(0, 255, 179, 0.3), rgba(0, 220, 150, 0.2));
  }
`;

const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
`;

const TechCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 2px solid rgba(0, 255, 179, 0.15);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, rgba(0, 255, 179, 0.03), rgba(0, 200, 150, 0.01));
  backdrop-filter: blur(5px);

  &:hover {
    border-color: rgba(0, 255, 179, 0.35);
    background: linear-gradient(135deg, rgba(0, 255, 179, 0.08), rgba(0, 200, 150, 0.04));
    box-shadow: 0 8px 24px rgba(0, 255, 179, 0.1);
  }
`;

const CategoryTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  margin-bottom: 8px;
`;

const SkillsRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
`;

const SkillBadge = styled.div`
  padding: 14px 22px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(0, 255, 179, 0.15), rgba(0, 220, 150, 0.08));
  border: 2px solid rgba(0, 255, 179, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 6px 18px rgba(0, 255, 179, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.08);
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  white-space: nowrap;
  min-width: fit-content;
  text-align: center;
  letter-spacing: 0.3px;

  &:hover {
    transform: scale(1.15) translateY(-6px);
    border-color: rgba(0, 255, 179, 0.6);
    box-shadow: 0 12px 32px rgba(0, 255, 179, 0.25), inset 0 1px 2px rgba(255, 255, 255, 0.12);
    background: linear-gradient(135deg, rgba(0, 255, 179, 0.25), rgba(0, 220, 150, 0.15));
    color: ${({ theme }) => theme.text_primary};
  }
`;

const OldSkillsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <Title>
          <span className="gradient">Skill</span> Highlights
        </Title>

        <HighlightsContainer>
          {/* Show Frontend and Languages */}
          <Tilt>
            <StackCard>
              <StackTitle>Frontend Technologies</StackTitle>
              <IconsCircle>
                {skills[1]?.skills?.map((item, idx) => (
                  <IconBox key={`frontend-${idx}`}>
                    {item.name}
                  </IconBox>
                )) || null}
              </IconsCircle>
            </StackCard>
          </Tilt>

          {/* Center: Languages */}
          <Tilt>
            <StackCard>
              <StackTitle>Programming Languages</StackTitle>
              <IconsCircle>
                {skills[0]?.skills?.slice(0, 6).map((item, idx) => (
                  <IconBox key={`lang-${idx}`}>
                    {item.name}
                  </IconBox>
                )) || null}
              </IconsCircle>
            </StackCard>
          </Tilt>

          {/* Right: DevOps Tools */}
          <Tilt>
            <StackCard>
              <StackTitle>DevOps Tools</StackTitle>
              <IconsCircle>
                {skills.find(s => s.title === "DevOps Tools")?.skills?.map((item, idx) => (
                  <IconBox key={`devops-${idx}`}>
                    {item.name}
                  </IconBox>
                )) || null}
              </IconsCircle>
            </StackCard>
          </Tilt>
        </HighlightsContainer>

        {/* All Skills Categories */}
        <OldSkillsContainer>
          {skills.map((skill, index) => (
            <TechCategory key={`skill-${index}`}>
              <CategoryTitle>{skill.title}</CategoryTitle>
              <SkillsRow>
                {skill.skills.map((item, idx) => (
                  <SkillBadge key={`${skill.title}-${idx}`}>
                    {item.name}
                  </SkillBadge>
                ))}
              </SkillsRow>
            </TechCategory>
          ))}
        </OldSkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
