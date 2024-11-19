// src/components/ReportCaseSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ReportCaseWrapper, ReportButton, ButtonIcon, Description } from './ReportCaseSection.styles';
import { FaExclamationTriangle } from 'react-icons/fa';

function ReportCaseSection() {
  return (
    <ReportCaseWrapper>
      <h2>Raise a Complaint</h2>
      <Description>
        If you suspect or have information about a human trafficking case, report it anonymously and securely. Every report helps in the fight against human trafficking.
      </Description>
      <ReportButton to="/raise-complaint">
        <ButtonIcon>
          <FaExclamationTriangle />
        </ButtonIcon>
        Start a Report
      </ReportButton>
    </ReportCaseWrapper>
  );
}

export default ReportCaseSection;
