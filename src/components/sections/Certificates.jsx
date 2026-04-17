import React from "react";
import styled from "styled-components";
import { certificates } from "../../data/constants";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  padding: 80px 30px;
  background: linear-gradient(135deg, rgba(0, 255, 179, 0.08) 0%, rgba(0, 255, 179, 0.02) 50%, rgba(0, 255, 179, 0.04) 100%);
  min-height: 100vh;
  @media (max-width: 960px) {
    padding: 60px 16px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  gap: 30px;
`;

const TitleWrapper = styled.div`
  text-align: center;
  position: relative;
  margin-bottom: 20px;
`;

const TitleIcon = styled(motion.div)`
  font-size: 64px;
  margin-bottom: 16px;
  display: inline-block;
  animation: spin 3s linear infinite;
  
  @keyframes spin {
    0% { transform: rotateY(0deg) rotateZ(0deg); }
    100% { transform: rotateY(360deg) rotateZ(360deg); }
  }
`;

const Title = styled.div`
  font-size: 56px;
  text-align: center;
  font-weight: 800;
  margin-bottom: 8px;
  color: #ffffff;
  letter-spacing: 1px;
  text-shadow: 0 0 20px rgba(0, 255, 179, 0.1);
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Subtitle = styled(motion.div)`
  text-align: center;
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 40px;
  letter-spacing: 0.5px;
  font-weight: 500;
  background: linear-gradient(90deg, ${({ theme }) => theme.text_secondary}, ${({ theme }) => theme.primary}, ${({ theme }) => theme.text_secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const CertificatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 30px;
  width: 100%;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const CertificateCard = styled(motion.a)`
  background: rgba(13, 19, 24, 0.35);
  border: 2px solid rgba(0, 255, 179, 0.2);
  border-radius: 20px;
  padding: 32px;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 179, 0.15), transparent);
    transition: left 0.6s ease;
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(0, 255, 179, 0.05) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 0;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover::after {
    opacity: 1;
  }
  
  &:hover {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 20px 60px rgba(0, 255, 179, 0.3), inset 0 0 30px rgba(0, 255, 179, 0.08);
    transform: translateY(-12px) scale(1.02);
    background: rgba(13, 19, 24, 0.55);
  }
  
  @media (max-width: 768px) {
    padding: 24px;
    border-radius: 16px;
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 2;
`;

const CertIcon = styled.div`
  font-size: 72px;
  margin-bottom: 12px;
  display: inline-block;
  animation: float 4s ease-in-out infinite;
  filter: drop-shadow(0 4px 12px rgba(0, 255, 179, 0.2));
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotateZ(0deg); }
    50% { transform: translateY(-12px) rotateZ(5deg); }
  }
`;

const Badge = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, rgba(0, 255, 179, 0.2), rgba(0, 255, 179, 0.1));
  border: 1px solid rgba(0, 255, 179, 0.3);
  color: ${({ theme }) => theme.primary};
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 12px;
  letter-spacing: 0.5px;
`;

const CertTitle = styled.div`
  font-size: 22px;
  font-weight: 800;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.text_primary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.3;
  letter-spacing: 0.3px;
`;

const CertDescription = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7;
  font-weight: 500;
  letter-spacing: 0.2px;
`;

const CertFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1.5px solid rgba(0, 255, 179, 0.15);
  gap: 12px;
  flex-wrap: wrap;
`;

const Issuer = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  letter-spacing: 0.3px;
  background: rgba(0, 255, 179, 0.08);
  padding: 6px 12px;
  border-radius: 8px;
`;

const Date = styled.span`
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 700;
  background: rgba(0, 255, 179, 0.05);
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 13px;
  border: 1px solid rgba(0, 255, 179, 0.1);
`;

const LinkText = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 14px;
  font-weight: 800;
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.85;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  
  ${CertificateCard}:hover & {
    opacity: 1;
    gap: 12px;
  }
`;

const Certificates = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div id="Certificates">
      <Container>
        <Wrapper>
          <TitleWrapper>
            <TitleIcon
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              🏆
            </TitleIcon>
            <motion.div
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Title>Professional Certifications</Title>
            </motion.div>
            <Subtitle
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              ✨ Industry-recognized credentials & verified expertise in cloud technologies
            </Subtitle>
          </TitleWrapper>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <CertificatesGrid>
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  variants={cardVariants}
                >
                  <CertificateCard
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -8 }}
                  >
                    <CardContent>
                      <CertIcon>{cert.icon}</CertIcon>
                      <Badge>🌟 Verified Credential</Badge>
                      <CertTitle>✨ {cert.title}</CertTitle>
                      <CertDescription>{cert.description}</CertDescription>
                      <CertFooter>
                        <Issuer>
                          <span>🏢</span>
                          {cert.issuer}
                        </Issuer>
                        <Date>📅 {cert.date}</Date>
                      </CertFooter>
                      <LinkText>
                        <span>→</span>
                        View & Verify Certificate
                      </LinkText>
                    </CardContent>
                  </CertificateCard>
                </motion.div>
              ))}
            </CertificatesGrid>
          </motion.div>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Certificates;
