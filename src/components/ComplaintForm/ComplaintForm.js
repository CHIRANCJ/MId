import React, { useState } from 'react';
import axios from 'axios';
import ComplaintFormStep1 from './ComplaintFormStep1';
import ComplaintFormStep2 from './ComplaintFormStep2';
import ComplaintFormStep3 from './ComplaintFormStep3';
import ComplaintFormStep4 from './ComplaintFormStep4';
import Header from '../Home/Header';
import './ComplaintForm.styles.css';
import { useNavigate } from 'react-router-dom';

function ComplaintForm() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    complaintCategory: '',
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    address: '',
    victimName: '',
    victimAge: '',
    victimGender: '',
    suspectName: '',
    location: '',
    dateOfIncident: '',
    evidenceDescription: '',
    evidenceFiles: [],
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    console.log('Submitting final form data...');
    console.log('Form Data:', formData);
  
    try {
      
      // Step 2: Prepare individual details
      const individualDetails = JSON.stringify({
        complaint_category: formData.complaintCategory,
        victim_name: formData.victimName,
        victim_age: formData.victimAge,
        victim_gender: formData.victimGender,
        suspect_name: formData.suspectName,
        date_of_incident: formData.dateOfIncident,
        evidence_description: formData.evidenceDescription,
      });
      console.log('Individual details:', individualDetails);
  
      // Step 3: Prepare payload for complaint submission
      const payload = {
        categoryid: 22,
        userid: 110,
        policeid: 2002,
        isfake: 0,
        reasonforwithdrawal: null,
        iswithdrawalaccepted: 0,
        iswithdrawn: 0,
        iscomplaintaccepted: 1,
        casestatus: 'under investigation',
        isfirfiled: 1,
        individualdetails: individualDetails,
      };
      console.log('Payload to be sent:', payload);
      const token ='eyJraWQiOiJPMGgyenNCR2lacnlSTzBkNklqdDI1SzdteldpREJKejdhK0lBV2R6XC9yVT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJlODMxZjMyMC0zMDQxLTcwYzctYjcxYS0zZGUzNjc1ZDVkNmMiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYmlydGhkYXRlIjoiMjBcLzEwXC8yMDAyIiwiZ2VuZGVyIjoiTWFsZSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy13ZXN0LTIuYW1hem9uYXdzLmNvbVwvdXMtd2VzdC0yX1FQdUpmT2FGYyIsInBob25lX251bWJlcl92ZXJpZmllZCI6ZmFsc2UsImNvZ25pdG86dXNlcm5hbWUiOiJlODMxZjMyMC0zMDQxLTcwYzctYjcxYS0zZGUzNjc1ZDVkNmMiLCJvcmlnaW5fanRpIjoiMTUzN2JkYjItZGFhOC00MzYzLWExZjctNzBmZjU2ODRmNjNjIiwiYXVkIjoiMm1udjE3dm9hN2U4cTZiYW5sZzBqMHF0aCIsImV2ZW50X2lkIjoiNTVjMzZmYmUtNGI4My00Y2VmLWEyZjItNjA3ZWI2MDYwMmFmIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3MzE5Mjc3NDIsIm5hbWUiOiJTaGl2YSIsInBob25lX251bWJlciI6Iis5MTg4MjU3OTIyNjUiLCJleHAiOjE3MzIwMTQxNDIsImlhdCI6MTczMTkyNzc0MiwianRpIjoiMDlhZGRmMGEtYWEzYy00Mzc1LTkzMmMtMzEzMjI0OWVhOWE3IiwiZW1haWwiOiJzaGl2YXJhbWFrcnNobm5AZ21haWwuY29tIn0.MhFf--ajnwHZFXrTYVoi9hL0KyfUEqIy74v2LfWxh0GHvGQVwzPixsPvMMQQzB5U9sXLkitWi7KmH7UOzFgBC0FWVkzA7zvPrkPhOqFRmjQwBL98iSq8HUQau9dBlVoT4qHaRGquPBWFoWT7W1UaPkn6YMi4p17FjmDCmItc8tsHNLh3Z8QNtkYlI8Dk4lrBZDP0uIK7s2fJ1Mnjtdy3H8QKjQCjkJEzl5JgY748k6n-G8nOuZLbwsSSUiyNIiQiwyYYkV-u84-31fbw91VKzutz6xC67RZQmNDHBM_qvAleg4Ae3NN8a3IgtM_i_6NrofOMCokqSQWZBpCHCQ2v6g';
      // Step 4: Submit complaint data to backend
      const response = await axios.post(
        'https://8lhcpuuc3j.execute-api.eu-west-2.amazonaws.com/FIR',
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Replace with your actual token variable
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Complaint submitted successfully:', response.data);
  
      // Step 5: Extract complaint ID from response
      const responseBody = JSON.parse(response.data.body);
      const complaintId = responseBody.data.complaintid;
  
      // Step 6: Upload evidence files to complaint folder
      for (let file of formData.evidenceFiles) {
        const folderName = `${complaintId}`; // Use complaint ID as folder name
        const evidencePayload = {
          folderName: folderName,
          fileName: file.name, // Assuming `file` is a File object
          fileType: file.type,
          isEvidence: true,
        };
        console.log('Evidence payload:', evidencePayload);
  
        try {
          // Generate pre-signed URL for the file upload
          const uploadResponse = await axios.post(
            'https://kz6gmd08a6.execute-api.ap-northeast-2.amazonaws.com/dev/uploadvideo',
            { body: evidencePayload },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
  
          if (uploadResponse.status === 200) {
            const preSignedUrl = JSON.parse(uploadResponse.data.body).url;
            console.log('Pre-signed URL:', preSignedUrl);
  
            // Upload the file to the pre-signed URL
            await axios.put(preSignedUrl, file, {
              headers: {
                'Content-Type': file.type,
              },
            });
  
            console.log(`Evidence file ${file.name} uploaded successfully`);
          } else {
            console.error('Error generating pre-signed URL:', uploadResponse.data.error);
          }
        } catch (uploadError) {
          console.error('Error uploading evidence:', uploadError);
        }
      }
  
      alert('Complaint submitted successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error submitting complaint:', error);
      alert('An error occurred during submission.');
    }
  };
  
  return (
    <div>
      <Header/>
    <div className="form-container">
      <div className="form-step-container">
        {step === 1 && (
          <ComplaintFormStep1
            nextStep={nextStep}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {step === 2 && (
          <ComplaintFormStep2
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {step === 3 && (
          <ComplaintFormStep3
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {step === 4 && (
          <ComplaintFormStep4
            prevStep={prevStep}
            formData={formData}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>

</div>
  );
}

export default ComplaintForm;
