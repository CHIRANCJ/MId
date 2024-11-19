// src/components/Footer.js
import React from 'react';
import { FooterWrapper, FooterText, FooterLinks, LinkItem } from './Footer.styles';

function Footer() {
  return (
    <FooterWrapper>
      <FooterText>&copy; 2024 Reporting Platform. All rights reserved.</FooterText>
      <FooterLinks>
        <LinkItem href="/about">About Us</LinkItem>
        <span>Contact: +1-800-555-1234</span>
      </FooterLinks>
    </FooterWrapper>
  );
}

export default Footer;
