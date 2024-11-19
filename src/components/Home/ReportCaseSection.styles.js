// src/components/ReportCaseSection.styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ReportCaseWrapper = styled.section`
  padding: 2.5rem;
  background: linear-gradient(135deg, #003366, #005f99);
  color: #ffffff;
  text-align: center;
  border-radius: 8px;
  margin: 1rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

export const Description = styled.p`
  max-width: 700px;
  margin: 0.5rem auto 1.5rem auto;
  font-size: 1rem;
  color: #e0e0e0;
  line-height: 1.6;
`;

export const ReportButton = styled(Link)`
  background-color: #ff6347;
  color: #ffffff;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-size: 1rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #ff4a33;
  }
`;

export const ButtonIcon = styled.div`
  display: inline-flex;
  margin-right: 0.5rem;
  color: #ffffff;
`;
