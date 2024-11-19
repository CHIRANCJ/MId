// src/components/AboutSection.styles.js
import styled from 'styled-components';

export const AboutWrapper = styled.section`
  padding: 2rem;
  background-color: #f4f6f8;
  color: #333333;
  text-align: center;
  border-radius: 8px;
`;

export const HeaderDescription = styled.p`
  max-width: 800px;
  margin: 0.5rem auto 1.5rem auto;
  font-size: 1rem;
  color: #555555;
  line-height: 1.6;
`;

export const AboutContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.6;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div`
  background-color: #ffffff;
  color: #333333;
  padding: 1.5rem;
  width: 30%;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s, box-shadow 0.3s;
  
  h3 {
    font-size: 1.2rem;
    color: #003366;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
  }
  
  p {
    font-size: 1rem;
    color: #555555;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

export const IconWrapper = styled.div`
  display: inline-block;
  margin-bottom: 1rem;
  color: #ff6347;
`;
