// src/components/HeroBanner.styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroWrapper = styled.section`
  text-align: center;
  padding: 3rem;
  background-color: #003366;
  color: white;
`;

export const HeroText = styled.div`
  margin-bottom: 1.5rem;
  
  h1 {
    font-size: 2.5rem;
    margin: 0.5rem 0;
  }
  
  p {
    font-size: 1.2rem;
  }
`;

export const HeroButton = styled(Link)`
  padding: 0.7rem 1.5rem;
  margin: 0.5rem;
  background-color: #ffb400;
  color: #003366;
  font-weight: bold;
  border-radius: 5px;
  text-decoration: none;
  
  &:hover {
    background-color: #005b96;
    color: white;
  }
`;
