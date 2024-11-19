// src/components/AboutSection.js
import React from 'react';
import { AboutWrapper, AboutContent, CardContainer, Card, IconWrapper, HeaderDescription } from './AboutSection.styles';
import { FaTools, FaHandHoldingHeart, FaChild } from 'react-icons/fa';

function AboutSection() {
  return (
    <AboutWrapper>
      <h2>Understanding Human Trafficking</h2>
      <HeaderDescription>
        Human trafficking is a global crime that exploits women, children, and men for numerous purposes, including forced labor and sex.
        Below are some common types of human trafficking that highlight the different forms of exploitation faced by victims.
      </HeaderDescription>
      <AboutContent>
        <CardContainer>
          <Card>
            <IconWrapper>
              <FaTools size={30} color="#ff6347" />
            </IconWrapper>
            <h3>Labor Trafficking</h3>
            <p>
              Labor trafficking involves the coercive recruitment and exploitation of individuals for forced labor,
              often through deception, violence, or economic control. Victims may endure hazardous work environments, low or no wages, and severe restrictions on freedom.
            </p>
          </Card>

          <Card>
            <IconWrapper>
              <FaHandHoldingHeart size={30} color="#ff6347" />
            </IconWrapper>
            <h3>Sex Trafficking</h3>
            <p>
              This form of trafficking exploits individuals through force, deception, or coercion for commercial sex.
              Often targeting vulnerable individuals, traffickers manipulate victims into sexual exploitation, threatening their safety, autonomy, and wellbeing.
            </p>
          </Card>

          <Card>
            <IconWrapper>
              <FaChild size={30} color="#ff6347" />
            </IconWrapper>
            <h3>Child Trafficking</h3>
            <p>
              Child trafficking exploits minors in forced labor, sexual exploitation, or servitude. Lacking protection and guidance, children are highly susceptible to traffickers who exploit their vulnerabilities for illegal gain.
            </p>
          </Card>
        </CardContainer>
      </AboutContent>
    </AboutWrapper>
  );
}

export default AboutSection;
