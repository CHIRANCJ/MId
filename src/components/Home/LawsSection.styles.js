// src/components/LawsSection.styles.js
import styled from 'styled-components';

export const LawsWrapper = styled.section`
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

export const LawCard = styled.div`
  background-color: #ffffff;
  color: #333333;
  padding: 1.5rem;
  margin: 1rem 0;
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
    white-space: pre-line; /* Preserves newlines for better readability */
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
