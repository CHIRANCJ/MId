// src/components/LawsSection.js
import React from 'react';
import { LawsWrapper, LawCard, IconWrapper, HeaderDescription } from './LawsSection.styles';
import { FaGavel, FaShieldAlt } from 'react-icons/fa';

function LawsSection() {
  const laws = [
    {
      title: 'Immoral Traffic (Prevention) Act, 1956 (ITPA)',
      description: `
        This act focuses on preventing human trafficking for prostitution. 
        - **Section 5**: Penalizes the act of procuring, inducing, or taking a person for the purpose of prostitution.
        - **Section 7**: Criminalizes conducting prostitution activities within 200 meters of public places, ensuring a safe public environment.
      `,
      icon: <FaGavel size={30} color="#ff6347" />
    },
    {
      title: 'Indian Penal Code, 1860 (IPC)',
      description: `
        The IPC contains key provisions to prevent human trafficking and exploitation.
        - **Section 370**: Defines and criminalizes the trafficking of persons through force, fraud, or coercion for exploitation.
        - **Section 372**: Prohibits the sale or exploitation of minors for prostitution or other forms of sexual exploitation.
      `,
      icon: <FaShieldAlt size={30} color="#ff6347" />
    }
  ];

  return (
    <LawsWrapper>
      <h2>Know Your Rights</h2>
      <HeaderDescription>
        Understanding the legal framework around human trafficking can help protect yourself and others. Here are key Indian laws aimed at preventing trafficking and ensuring justice.
      </HeaderDescription>
      {laws.map((law, index) => (
        <LawCard key={index}>
          <IconWrapper>{law.icon}</IconWrapper>
          <h3>{law.title}</h3>
          <p>{law.description}</p>
        </LawCard>
      ))}
    </LawsWrapper>
  );
}

export default LawsSection;
