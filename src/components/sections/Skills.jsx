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
  grid-template-columns: 1fr 2fr 1fr;
  gap: 40px;
  align-items: flex-start;
  margin-top: 40px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const StackCard = styled.div`
  background: rgba(13, 19, 24, 0.6);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 255, 179, 0.1);
  border-radius: 12px;
  padding: 28px 24px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(0, 255, 179, 0.2);
    box-shadow: 0 8px 24px rgba(0, 255, 179, 0.12);
  }

  @media (max-width: 1200px) {
    max-width: 350px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    padding: 20px 16px;
    gap: 16px;
  }
`;

const StackTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  text-align: center;
`;

const IconsCircle = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
`;

const IconBox = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  &:hover {
    transform: scale(1.08) translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
    border-color: rgba(255, 255, 255, 0.12);
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
  border: 1.5px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 20px;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.12);
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
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: transparent;
  border: 2.5px solid rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  &:hover {
    transform: scale(1.15) translateY(-5px);
    border-color: rgba(255, 255, 255, 0.18);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.38);
  }
`;

const OldSkillsContainer = styled.div`
  width: 100%;
  display: none;
`;

const Skills = () => {
  // Get MERN Stack (index 4) and .NET Stack (if exists)
  const mernStack = skills.find(s => s.title === "MERN Stack") || null;
  const dotnetStack = skills.find(s => s.title === ".NET Stack") || null;
  const langStack = skills.find(s => s.title === "Languages") || null;
  const frontendStack = skills.find(s => s.title === "Frontend") || null;
  const toolsStack = skills.find(s => s.title === "Tools") || null;

  return (
    <Container id="Skills">
      <Wrapper>
        <Title>
          <span className="gradient">Skill</span> Highlights
        </Title>

        <HighlightsContainer>
          {/* Left: MERN Stack */}
          {mernStack && (
            <Tilt>
              <StackCard>
                <StackTitle>{mernStack.title}</StackTitle>
                <IconsCircle>
                  {mernStack.skills.map((item, idx) => (
                    <IconBox key={`mern-${idx}`}>
                      <img src={item.image} alt={item.name} title={item.name} />
                    </IconBox>
                  ))}
                </IconsCircle>
              </StackCard>
            </Tilt>
          )}

          {/* Center: Tech Categories */}
          <CenterContent>
            {frontendStack && (
              <TechCategory>
                <CategoryTitle>Frontend Technologies</CategoryTitle>
                <SkillsRow>
                  {frontendStack.skills.map((item, idx) => (
                    <SkillBadge key={`frontend-${idx}`}>
                      <img src={item.image} alt={item.name} />
                    </SkillBadge>
                  ))}
                </SkillsRow>
              </TechCategory>
            )}

            {langStack && (
              <TechCategory>
                <CategoryTitle>Programming Languages</CategoryTitle>
                <SkillsRow>
                  {langStack.skills.slice(0, 5).map((item, idx) => (
                    <SkillBadge key={`lang-${idx}`}>
                      <img src={item.image} alt={item.name} />
                    </SkillBadge>
                  ))}
                </SkillsRow>
              </TechCategory>
            )}

            {toolsStack && (
              <TechCategory>
                <CategoryTitle> Tools worked on</CategoryTitle>
                <SkillsRow>
                  {toolsStack.skills.map((item, idx) => (
                    <SkillBadge key={`tools-${idx}`}>
                      <img src={item.image} alt={item.name} />
                    </SkillBadge>
                  ))}
                </SkillsRow>
              </TechCategory>
            )}
          </CenterContent>

          {/* Right: .NET Stack */}
          {dotnetStack && (
            <Tilt>
              <StackCard>
                <StackTitle>{dotnetStack.title}</StackTitle>
                <IconsCircle>
                  {dotnetStack.skills.map((item, idx) => (
                    <IconBox key={`dotnet-${idx}`}>
                      <img src={item.image} alt={item.name} title={item.name} />
                    </IconBox>
                  ))}
                </IconsCircle>
              </StackCard>
            </Tilt>
          )}
        </HighlightsContainer>

        {/* Hidden old skills container */}
        <OldSkillsContainer>
          {skills.map((skill, index) => (
            <div key={`skill-${index}`}>
              <div>{skill.title}</div>
            </div>
          ))}
        </OldSkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
