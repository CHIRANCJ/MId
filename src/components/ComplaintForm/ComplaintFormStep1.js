import React, { useState } from 'react';
import { TextField, Button, MenuItem, Box } from '@mui/material';
import { NavigateNext, Person, Phone, Category } from '@mui/icons-material';

function ComplaintFormStep1({ nextStep, formData, setFormData }) {
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const newErrors = {};

    if (!formData.complaintCategory) {
      newErrors.complaintCategory = 'Please select a complaint category.';
    }
    if (!formData.fullName || formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Full Name must be at least 3 characters long.';
    }
    if (
      !formData.phonenumber ||
      !/^\d{10}$/.test(formData.phonenumber) // Ensures the phone number is 10 digits
    ) {
      newErrors.phonenumber = 'Please enter a valid 10-digit phone number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // No errors means validation passed
  };

  const handleNext = () => {
    if (validateFields()) {
      nextStep();
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <h3>Step 1: Complaint Details</h3>

      <TextField
        label="Complaint Category"
        fullWidth
        value={formData.complaintCategory}
        onChange={(e) =>
          setFormData({ ...formData, complaintCategory: e.target.value })
        }
        select
        error={!!errors.complaintCategory}
        helperText={errors.complaintCategory}
        sx={{ marginBottom: 2 }}
        InputProps={{
          startAdornment: <Category sx={{ marginRight: 1 }} />,
        }}
      >
        <MenuItem value="Sex Trafficking">Sex Trafficking</MenuItem>
        <MenuItem value="Labor Trafficking">Labor Trafficking</MenuItem>
        <MenuItem value="Child Trafficking">Child Trafficking</MenuItem>
        <MenuItem value="Other">Other</MenuItem>
      </TextField>

      <TextField
        label="Full Name"
        fullWidth
        value={formData.fullName}
        onChange={(e) =>
          setFormData({ ...formData, fullName: e.target.value })
        }
        error={!!errors.fullName}
        helperText={errors.fullName}
        sx={{ marginBottom: 2 }}
        InputProps={{
          startAdornment: <Person sx={{ marginRight: 1 }} />,
        }}
      />

      <TextField
        label="Phone Number"
        fullWidth
        value={formData.phonenumber}
        onChange={(e) =>
          setFormData({ ...formData, phonenumber: e.target.value })
        }
        error={!!errors.phonenumber}
        helperText={errors.phonenumber}
        sx={{ marginBottom: 2 }}
        InputProps={{
          startAdornment: <Phone sx={{ marginRight: 1 }} />,
        }}
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleNext}
        endIcon={<NavigateNext />}
        sx={{ marginTop: 2 }}
      >
        Next
      </Button>
    </Box>
  );
}

export default ComplaintFormStep1;
