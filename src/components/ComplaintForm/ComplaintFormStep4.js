import React, { useEffect } from 'react';
import { Button, Checkbox, FormControlLabel, Grid, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

function ComplaintFormStep4({ prevStep, formData, handleSubmit }) {
  const [isConfirmed, setIsConfirmed] = React.useState(false);

  // Log form data for review (on mount)
  useEffect(() => {
    console.log('Reviewing the following form data for submission:');
    console.log(formData);
  }, [formData]);

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Step 4: Review and Submit
      </Typography>

      {/* Display entered data for review */}
      <div>
        <Typography variant="h6" gutterBottom>
          Victim Information:
        </Typography>
        <Typography variant="body1">
          <strong>Name:</strong> {formData.victimName}
        </Typography>
        <Typography variant="body1">
          <strong>Age:</strong> {formData.victimAge}
        </Typography>
        <Typography variant="body1">
          <strong>Gender:</strong> {formData.victimGender}
        </Typography>
        <Typography variant="body1">
          <strong>Suspect Name:</strong> {formData.suspectName}
        </Typography>
        <Typography variant="body1">
          <strong>Date of Incident:</strong> {formData.dateOfIncident}
        </Typography>
        <Typography variant="body1">
          <strong>Evidence Description:</strong> {formData.evidenceDescription}
        </Typography>
        <Typography variant="body1">
          <strong>Evidence Files:</strong> {formData.evidenceFiles.length} file(s) selected.
        </Typography>
      </div>

      {/* Confirmation checkbox */}
      <FormControlLabel
        control={
          <Checkbox
            checked={isConfirmed}
            onChange={(e) => setIsConfirmed(e.target.checked)}
          />
        }
        label="I confirm the information is accurate"
      />

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={prevStep}
            startIcon={<ArrowBack />}
          >
            Back
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            disabled={!isConfirmed}
            onClick={handleSubmit}  
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default ComplaintFormStep4;
