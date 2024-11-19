import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Card,
  CardContent,
  Grid,
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Person, Event, LocationOn, Badge, Description } from "@mui/icons-material";
import axios from "axios";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";

const CaseStatusPage = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [withdrawDialogOpen, setWithdrawDialogOpen] = useState(false);
  const [withdrawReason, setWithdrawReason] = useState("");
  const [selectedCaseId, setSelectedCaseId] = useState(null);

  const userId = "110"; // Replace with the actual user ID
  const categoryId = 22; // Replace with the actual category ID
  const token = "eyJraWQiOiJPMGgyenNCR2lacnlSTzBkNklqdDI1SzdteldpREJKejdhK0lBV2R6XC9yVT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJlODMxZjMyMC0zMDQxLTcwYzctYjcxYS0zZGUzNjc1ZDVkNmMiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYmlydGhkYXRlIjoiMjBcLzEwXC8yMDAyIiwiZ2VuZGVyIjoiTWFsZSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy13ZXN0LTIuYW1hem9uYXdzLmNvbVwvdXMtd2VzdC0yX1FQdUpmT2FGYyIsInBob25lX251bWJlcl92ZXJpZmllZCI6ZmFsc2UsImNvZ25pdG86dXNlcm5hbWUiOiJlODMxZjMyMC0zMDQxLTcwYzctYjcxYS0zZGUzNjc1ZDVkNmMiLCJvcmlnaW5fanRpIjoiMTUzN2JkYjItZGFhOC00MzYzLWExZjctNzBmZjU2ODRmNjNjIiwiYXVkIjoiMm1udjE3dm9hN2U4cTZiYW5sZzBqMHF0aCIsImV2ZW50X2lkIjoiNTVjMzZmYmUtNGI4My00Y2VmLWEyZjItNjA3ZWI2MDYwMmFmIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3MzE5Mjc3NDIsIm5hbWUiOiJTaGl2YSIsInBob25lX251bWJlciI6Iis5MTg4MjU3OTIyNjUiLCJleHAiOjE3MzIwMTQxNDIsImlhdCI6MTczMTkyNzc0MiwianRpIjoiMDlhZGRmMGEtYWEzYy00Mzc1LTkzMmMtMzEzMjI0OWVhOWE3IiwiZW1haWwiOiJzaGl2YXJhbWFrcnNobm5AZ21haWwuY29tIn0.MhFf--ajnwHZFXrTYVoi9hL0KyfUEqIy74v2LfWxh0GHvGQVwzPixsPvMMQQzB5U9sXLkitWi7KmH7UOzFgBC0FWVkzA7zvPrkPhOqFRmjQwBL98iSq8HUQau9dBlVoT4qHaRGquPBWFoWT7W1UaPkn6YMi4p17FjmDCmItc8tsHNLh3Z8QNtkYlI8Dk4lrBZDP0uIK7s2fJ1Mnjtdy3H8QKjQCjkJEzl5JgY748k6n-G8nOuZLbwsSSUiyNIiQiwyYYkV-u84-31fbw91VKzutz6xC67RZQmNDHBM_qvAleg4Ae3NN8a3IgtM_i_6NrofOMCokqSQWZBpCHCQ2v6g"; // Replace with the actual token

  // Fetch cases on component mount
  useEffect(() => {
    const fetchCases = async () => {
      setLoading(true);
      setError(null);
  
      try {
        const response = await axios.get(
          `https://7umuvu5ypg.execute-api.eu-west-2.amazonaws.com/GetAll`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
  
        console.log("Raw API Response:", response);
  
        // Ensure `response.data.body` exists and is valid JSON
        const responseData = JSON.parse(response.data.body || "{}");
        console.log("Parsed API Response:", responseData);
  
        if (!responseData.items || !Array.isArray(responseData.items)) {
          throw new Error("Invalid response format: 'items' is missing or not an array.");
        }
  
        const userCases = responseData.items.filter(
          (item) => item.userid === String(userId) && item.categoryid === categoryId
        );
  
        console.log("Filtered User Cases:", userCases);
  
        const formattedCases = userCases.map((caseItem) => {
          const individualDetails = caseItem.individualdetails
            ? JSON.parse(caseItem.individualdetails)
            : {};
          return { ...caseItem, individualDetails };
        });
  
        setCases(formattedCases);
      } catch (err) {
        console.error("Error fetching cases:", err);
        setError("Failed to fetch cases. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchCases();
  }, [userId, categoryId, token]);
  
  const handleWithdrawClick = (caseId) => {
    setSelectedCaseId(caseId);
    setWithdrawDialogOpen(true);
  };

  const handleWithdrawSubmit = async () => {
    try {
      // Find the case being withdrawn
      const selectedCase = cases.find((caseItem) => caseItem.complaintid === selectedCaseId);
  
      if (!selectedCase) {
        alert("Case not found!");
        return;
      }
  
      // Prepare the payload with correct data types
      const payload = {
        complaintid: selectedCase.complaintid, // This should be numeric already
        categoryid: selectedCase.categoryid, // Ensure this is numeric
        userid: String(selectedCase.userid), 
        policeid: String(selectedCase.policeid), 
        reasonforwithdrawal: withdrawReason,
        iswithdrawalaccepted: selectedCase.iswithdrawalaccepted,
        iswithdrawn: 1, // Mark as withdrawn
        iscomplaintaccepted: selectedCase.iscomplaintaccepted,
        isfake: selectedCase.isfake,
        casestatus: selectedCase.casestatus,
        isfirfiled: selectedCase.isfirfiled,
        individualdetails: JSON.stringify(selectedCase.individualDetails || {}), // Pass as is, assuming it's already serialized
      };
  
      console.log("Submitting PUT payload:", payload);
  
      // Make the PUT API call
      const response = await fetch(
        "https://8lhcpuuc3j.execute-api.eu-west-2.amazonaws.com/FIR",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`, // Ensure the token is correctly passed
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Backend responded with an error:", errorData);
        throw new Error(errorData.message || "Failed to update complaint.");
      }
  
      alert("Withdrawal reason submitted successfully.");
      setWithdrawDialogOpen(false);
      setWithdrawReason("");
    } catch (error) {
      console.error("Failed to submit withdrawal reason:", error);
      alert("Failed to submit withdrawal reason. Please try again.");
    }
  };
  
  const handleVideoCall = (caseId) => {
    console.log(`Initiating video call for case ID: ${caseId}`);
    // Navigate to the video call page or open video call functionality
  };
  
  const handleChat = (caseId) => {
    console.log(`Opening chat for case ID: ${caseId}`);
    // Navigate to the chat page or open chat functionality
  };
  

  return (
    <div>
      <Header />
      <Box
        sx={{
          padding: 4,
          maxWidth: "900px",
          margin: "auto",
          backgroundColor: "#f4f6f8",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          My Cases
        </Typography>
        <Typography variant="body1" gutterBottom>
          Below are the complaints you have raised. Click on any case for more details.
        </Typography>

        {loading && (
          <Box display="flex" justifyContent="center" alignItems="center" mt={3}>
            <CircularProgress />
          </Box>
        )}

        {error && (
          <Alert severity="error" sx={{ marginTop: 3 }}>
            {error}
          </Alert>
        )}

        {!loading && cases.length === 0 && (
          <Typography variant="body1" sx={{ marginTop: 3 }}>
            No cases found for your account.
          </Typography>
        )}

        {!loading && cases.length > 0 && (
          <Grid container spacing={2} sx={{ marginTop: 3 }}>
            {cases.map((caseItem) => (
  <Grid item xs={12} md={6} key={caseItem.complaintid}>
    <Card sx={{ border: "1px solid #003366", "&:hover": { boxShadow: 4 } }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Case ID: {caseItem.complaintid}
        </Typography>
        <Typography variant="body1">
          <strong>Status:</strong> {caseItem.casestatus}
        </Typography>
        <Typography variant="body1" sx={{ display: "flex", alignItems: "center" }}>
          <Person sx={{ marginRight: 1 }} />
          Victim Name: {caseItem.individualDetails.victim_name || "N/A"}
        </Typography>
        <Typography variant="body1">
          Victim Age: {caseItem.individualDetails.victim_age || "N/A"}
        </Typography>
        <Typography variant="body1">
          <strong>Victim Gender:</strong> {caseItem.individualDetails.victim_gender || "N/A"}
        </Typography>
        <Typography variant="body1">
          <Event sx={{ marginRight: 1 }} />
          Date of Incident: {caseItem.individualDetails.date_of_incident || "N/A"}
        </Typography>
        <Typography variant="body1">
          <LocationOn sx={{ marginRight: 1 }} />
          Suspect Name: {caseItem.individualDetails.suspect_name || "N/A"}
        </Typography>
        <Typography variant="body1">
          <Description sx={{ marginRight: 1 }} />
          Evidence: {caseItem.individualDetails.evidence_description || "N/A"}
        </Typography>
        
        {/* Existing Withdraw Button */}
        <Button
          variant="contained"
          color="secondary"
          sx={{ marginTop: 2, marginRight: 2 }}
          onClick={() => handleWithdrawClick(caseItem.complaintid)}
        >
          Withdraw
        </Button>

        {/* New Video Call Button */}
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 2, marginRight: 2 }}
          onClick={() => handleVideoCall(caseItem.complaintid)}
        >
          Video Call
        </Button>

        {/* New Chat Button */}
        <Button
          variant="outlined"
          color="primary"
          sx={{ marginTop: 2 }}
          onClick={() => handleChat(caseItem.complaintid)}
        >
          Chat
        </Button>
      </CardContent>
    </Card>
  </Grid>
))}

          </Grid>
        )}

        <Dialog
          open={withdrawDialogOpen}
          onClose={() => setWithdrawDialogOpen(false)}
        >
          <DialogTitle>Withdrawal Reason</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please provide the reason for withdrawing this complaint.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="reason"
              label="Reason"
              type="text"
              fullWidth
              variant="outlined"
              value={withdrawReason}
              onChange={(e) => setWithdrawReason(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setWithdrawDialogOpen(false)} color="primary">
              Cancel
            </Button>
            <Button onClick={handleWithdrawSubmit} color="secondary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Footer />
    </div>
  );
};

export default CaseStatusPage;
