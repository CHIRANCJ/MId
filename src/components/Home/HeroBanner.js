// src/components/HeroBanner.js
import React from 'react';
import { Link } from 'react-router-dom';
import { HeroWrapper, HeroText, HeroButton } from './HeroBanner.styles';

function HeroBanner() {
  return (
    <HeroWrapper>
      <HeroText>
        <h1>Take a Stand Against Human Trafficking</h1>
        <p>Report a case, check status, and learn about the laws in place to protect you.</p>
      </HeroText>
      <div>
        <HeroButton to="/raise-complaint">Raise a Complaint</HeroButton>
        <HeroButton to="/about">Learn More</HeroButton>
      </div>
    </HeroWrapper>
  );
}

export default HeroBanner;
