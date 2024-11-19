// src/components/Footer.styles.js
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  padding: 2rem;
  background-color: #003366;
  color: white;
  text-align: center;
  font-size: 1rem;
  margin-top: 0;  /* Ensure there's no margin creating a gap above the footer */
  margin-bottom: 0;  /* Remove bottom margin if there's unnecessary space below */
`;

export const FooterText = styled.p`
  margin-bottom: 1rem;
`;

export const FooterLinks = styled.div`
  margin-top: 1rem;
`;

export const LinkItem = styled.a`
  color: #ffb400;
  text-decoration: none;
  margin: 0 1rem;
  font-weight: bold;

  &:hover {
    color: #ffffff;
  }
`;
