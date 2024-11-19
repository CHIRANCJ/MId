import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { ArrowBack, NavigateNext, Person, Place, CalendarToday } from '@mui/icons-material';

function ComplaintFormStep2({ nextStep, prevStep, formData, setFormData }) {
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // Validate fields on every change
    setIsValid(validateFields());
  }, [formData]);

  const validateFields = () => {
    const newErrors = {};
    const currentDate = new Date();
    const incidentDate = new Date(formData.dateOfIncident);

    if (!formData.victimName || formData.victimName.trim().length < 3) {
      newErrors.victimName = "Victim's Name must be at least 3 characters long.";
    }
    if (!formData.victimAge || formData.victimAge <= 0) {
      newErrors.victimAge = "Please enter a valid age.";
    }
    if (!formData.victimGender) {
      newErrors.victimGender = "Please select a gender.";
    }
    if (!formData.location || formData.location.trim().length < 3) {
      newErrors.location = "Location of Incident must be specified.";
    }
    if (!formData.dateOfIncident) {
      newErrors.dateOfIncident = "Please select a date.";
    } else if (incidentDate > currentDate) {
      newErrors.dateOfIncident = "Date of Incident cannot be in the future.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Validation passed if no errors
  };

  const handleNext = () => {
    if (validateFields()) {
      nextStep();
    }
  };

  return (
    <div>
      <h3>Step 2: Victim Information</h3>

      <TextField
        label="Victim's Name"
        fullWidth
        value={formData.victimName}
        onChange={(e) =>
          setFormData({ ...formData, victimName: e.target.value })
        }
        error={!!errors.victimName}
        helperText={errors.victimName}
        sx={{ marginBottom: 2 }}
        InputProps={{
          startAdornment: <Person sx={{ marginRight: 1 }} />,
        }}
      />

      <TextField
        label="Victim's Age"
        fullWidth
        type="number"
        value={formData.victimAge}
        onChange={(e) =>
          setFormData({ ...formData, victimAge: e.target.value })
        }
        error={!!errors.victimAge}
        helperText={errors.victimAge}
        sx={{ marginBottom: 2 }}
      />

      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>Victim's Gender</InputLabel>
        <Select
          value={formData.victimGender}
          onChange={(e) =>
            setFormData({ ...formData, victimGender: e.target.value })
          }
          error={!!errors.victimGender}
        >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
        {errors.victimGender && (
          <span style={{ color: 'red', fontSize: '0.8em' }}>
            {errors.victimGender}
          </span>
        )}
      </FormControl>

      <TextField
        label="Suspect's Name"
        fullWidth
        value={formData.suspectName}
        onChange={(e) =>
          setFormData({ ...formData, suspectName: e.target.value })
        }
        sx={{ marginBottom: 2 }}
      />

      <TextField
        label="Location of Incident"
        fullWidth
        value={formData.location}
        onChange={(e) =>
          setFormData({ ...formData, location: e.target.value })
        }
        error={!!errors.location}
        helperText={errors.location}
        sx={{ marginBottom: 2 }}
        InputProps={{
          startAdornment: <Place sx={{ marginRight: 1 }} />,
        }}
      />

      <TextField
        label="Date of Incident"
        fullWidth
        type="date"
        value={formData.dateOfIncident}
        onChange={(e) =>
          setFormData({ ...formData, dateOfIncident: e.target.value })
        }
        error={!!errors.dateOfIncident}
        helperText={errors.dateOfIncident}
        sx={{ marginBottom: 2 }}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          startAdornment: <CalendarToday sx={{ marginRight: 1 }} />,
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
            disabled={!isValid} // Disable button if form is not valid
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default ComplaintFormStep2;
