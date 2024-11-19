import React, { useState, useEffect } from 'react';
import { Button, TextField, Grid, Typography } from '@mui/material';
import { ArrowBack, NavigateNext, CloudUpload } from '@mui/icons-material';

function ComplaintFormStep3({ nextStep, prevStep, formData, setFormData }) {
  const [evidenceDescription, setEvidenceDescription] = useState(
    formData.evidenceDescription || ''
  );
  const [evidenceFiles, setEvidenceFiles] = useState(formData.evidenceFiles || []);
  const [isValid, setIsValid] = useState(false);

  // Handle file selection
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const updatedFiles = [...evidenceFiles, ...files];
    setEvidenceFiles(updatedFiles);
    validateFields(updatedFiles, evidenceDescription);
  };

  // Validate the form fields
  const validateFields = (files, description) => {
    if (description.trim() && files.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  // Save data and proceed to the next step
  const handleNext = () => {
    setFormData({
      ...formData,
      evidenceDescription,
      evidenceFiles,
    });
    console.log('Evidence Description:', evidenceDescription);
    console.log('Evidence Files:', evidenceFiles);

    nextStep();
  };

  // Automatically validate whenever fields change
  useEffect(() => {
    validateFields(evidenceFiles, evidenceDescription);
  }, [evidenceFiles, evidenceDescription]);

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Step 3: Upload Evidence
      </Typography>

      {/* File input for evidence */}
      <label htmlFor="file-upload" style={{ marginBottom: '10px', cursor: 'pointer' }}>
        <Button
          variant="contained"
          component="span"
          color="primary"
          startIcon={<CloudUpload />}
          sx={{
            borderRadius: '8px',
            padding: '12px 20px',
            marginBottom: '10px',
            textTransform: 'none',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            '&:hover': {
              backgroundColor: '#0056b3',
              boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',
            },
            '&:active': {
              backgroundColor: '#004085',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)',
            },
          }}
        >
          Upload Evidence Files
        </Button>
      </label>
      <input
        type="file"
        id="file-upload"
        accept=".jpg,.png,.mp4,.mov"
        onChange={handleFileChange}
        multiple
        style={{ display: 'none' }}
      />
      {evidenceFiles.length > 0 && (
        <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
          {evidenceFiles.length} file(s) selected.
        </Typography>
      )}

      {/* Evidence description */}
      <TextField
        label="Evidence Description"
        fullWidth
        multiline
        rows={4}
        value={evidenceDescription}
        onChange={(e) => {
          setEvidenceDescription(e.target.value);
          validateFields(evidenceFiles, e.target.value);
        }}
        sx={{
          marginBottom: 2,
          '& .MuiInputBase-root': {
            borderRadius: '8px',
          },
        }}
      />

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={prevStep}
            startIcon={<ArrowBack />}
            sx={{
              borderRadius: '8px',
              padding: '8px 16px',
              textTransform: 'none',
            }}
          >
            Back
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleNext}
            endIcon={<NavigateNext />}
            disabled={!isValid} // Disable button until valid
            sx={{
              borderRadius: '8px',
              padding: '8px 16px',
              textTransform: 'none',
            }}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default ComplaintFormStep3;
