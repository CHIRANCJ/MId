import React, { useState } from 'react';
import ComplaintFormStep1 from '../components/ComplaintForm/ComplaintFormStep1';
import ComplaintFormStep2 from '../components/ComplaintForm/ComplaintFormStep2';
import ComplaintFormStep3 from '../components/ComplaintForm/ComplaintFormStep3';
import ComplaintFormStep4 from '../components/ComplaintForm/ComplaintFormStep4';
import { Container, Paper } from '@mui/material';

function ComplaintPage() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 3 }}>
        <h2>Raise a Complaint</h2>
        <div>
          {step === 1 && <ComplaintFormStep1 nextStep={nextStep} />}
          {step === 2 && <ComplaintFormStep2 nextStep={nextStep} prevStep={prevStep} />}
          {step === 3 && <ComplaintFormStep3 nextStep={nextStep} prevStep={prevStep} />}
          {step === 4 && <ComplaintFormStep4 prevStep={prevStep} />}
        </div>
      </Paper>
    </Container>
  );
}

export default ComplaintPage;
