import React from "react";
import styled from "styled-components";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;
const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;

  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary}bb;
  padding: 8px 12px;
  border-radius: 6px;
  background: ${({ theme }) => theme.primary}15;
  border: 1px solid ${({ theme }) => theme.primary}40;
  width: fit-content;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Span = styled.div``;

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
  
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "rgba(13, 19, 24, 0.6)",
        color: "#fff",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
        border: "1px solid rgba(0, 255, 179, 0.1)",
        borderRadius: "12px",
        transition: "all 0.3s ease",
      }}
      contentArrowStyle={{
        borderRight: "7px solid  rgba(0, 212, 255, 0.4)",
      }}
      date={education.date}
    >
      <Top>
        <Image src={education.img} />
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>
      <Grade>
        <b>Grade :</b>
        {education.grade}
      </Grade>
      <Description>
        <Span>{education.desc}</Span>
      </Description>
    </VerticalTimelineElement>
  );
};

export default EducationCard;
