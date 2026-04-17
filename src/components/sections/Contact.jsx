import React, { useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";


const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 40px;
  text-align: center;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 8px;
    font-size: 28px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;
const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background: rgba(13, 19, 24, 0.6);
  border: 1px solid rgba(0, 255, 179, 0.1);
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  margin-top: 28px;
  gap: 12px;
  transition: all 0.3s ease;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 255, 179, 0.1);
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 8px;
  padding: 12px 16px;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
  }
  
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
    box-shadow: 0 0 16px rgba(0, 255, 179, 0.1);
    background-color: rgba(0, 255, 179, 0.02);
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 255, 179, 0.1);
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 8px;
  padding: 12px 16px;
  transition: all 0.3s ease;
  font-family: inherit;
  resize: vertical;
  
  &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
  }
  
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
    box-shadow: 0 0 16px rgba(0, 255, 179, 0.1);
    background-color: rgba(0, 255, 179, 0.02);
  }
`;

const ContactButton = styled.button`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: ${({ theme }) => theme.primary};
  padding: 12px 18px;
  margin-top: 8px;
  border-radius: 8px;
  border: none;
  color: ${({ theme }) => theme.card};
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(0, 255, 179, 0.2);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 255, 179, 0.3);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;


const Contact = () => {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(form.current);
      const data = {
        user_email: formData.get('user_email'),
        user_name: formData.get('user_name'),
        subject: formData.get('subject'),
        message: formData.get('message')
      };

      // Send to your backend
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/send-email`,
        data
      );

      if (response.data.success) {
        alert("Message Sent Successfully!");
        form.current.reset();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message. Please try again or contact me directly at avi996631@gmail.com");
    } finally {
      setLoading(false);
    }
  };

  return (
      <Container>
          <Wrapper>
            
              <Title>Contact</Title>
              <Desc>
                  Feel free to reach out to me for any questions or opportunities!
              </Desc>
              <ContactForm ref={form} onSubmit={handleSubmit}>
                  <ContactTitle>Email Me 🚀</ContactTitle>
                  <ContactInput placeholder="Your Email" name="user_email" type="email" required />
                  <ContactInput placeholder="Your Name" name="user_name" required/>
                  <ContactInput placeholder="Subject" name="subject" required/>
                  <ContactInputMessage placeholder="Message" name="message" rows={4} required/>
                  <ContactButton type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send"}
                  </ContactButton>
              </ContactForm>
          </Wrapper>
      </Container>
  );
};

export default Contact;
