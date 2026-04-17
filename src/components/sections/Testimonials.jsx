import React from "react";
import styled from "styled-components";
import { testimonials } from "../../data/constants";
import { Tilt } from "react-tilt";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0 16px;
  margin-top: 100px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 10px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TestimonialsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

const TestimonialCard = styled.div`
  width: 100%;
  max-width: 320px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 10px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const AuthorContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
`;

const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const AuthorName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const AuthorTitle = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Description = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
`;

const Testimonials = () => {
  return (
    <Container id="testimonials">
      <Wrapper>
        <Title>What People Say About My Work!</Title>
        <Desc>Here are some testimonials from people I have worked with</Desc>
        <TestimonialsContainer>
          {testimonials.map((testimonial) => (
            <Tilt key={testimonial.id}>
              <TestimonialCard>
                <Description>"{testimonial.description}"</Description>
                <AuthorContainer>
                  <AuthorImage src={testimonial.image} alt={testimonial.name} />
                  <AuthorInfo>
                    <AuthorName>{testimonial.name}</AuthorName>
                    <AuthorTitle>{testimonial.title}</AuthorTitle>
                  </AuthorInfo>
                </AuthorContainer>
              </TestimonialCard>
            </Tilt>
          ))}
        </TestimonialsContainer>
      </Wrapper>
    </Container>
  );
};

export default Testimonials;
