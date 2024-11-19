import React from 'react';
import { Container, Grid, Typography, Box, Divider, List, ListItem, ListItemText, Paper } from '@mui/material';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import './AboutPage.css';
import { FaGavel, FaUsers, FaHandshake, FaShieldAlt, FaCogs } from 'react-icons/fa';
import { MdOutlineSecurity, MdSupportAgent } from 'react-icons/md';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register the required Chart.js components and plugin
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, ChartDataLabels);

function AboutPage() {

  // Pie chart data for human trafficking statistics in India
  const traffickingData1 = {
    labels: ['Sex Trafficking', 'Labor Trafficking', 'Child Trafficking', 'Other'],
    datasets: [
      {
        data: [60, 25, 10, 5], // Example data
        backgroundColor: ['#ffcc00', '#ff6666', '#66b3ff', '#ffb3e6'],
        borderColor: ['#ff9900', '#ff4d4d', '#4d94ff', '#ff80cc'],
        borderWidth: 1,
        hoverOffset: 10, // Hover effect
      },
    ],
  };

  const traffickingData2 = {
    labels: ['Women Victims', 'Men Victims', 'Children Victims'],
    datasets: [
      {
        data: [70, 20, 10], // Example data
        backgroundColor: ['#ff3333', '#3399ff', '#ffcc00'],
        borderColor: ['#ff1a1a', '#0066cc', '#ff9900'],
        borderWidth: 1,
        hoverOffset: 10, // Hover effect
      },
    ],
  };

  const traffickingData3 = {
    labels: ['Sex Trafficking', 'Forced Labor', 'Domestic Servitude'],
    datasets: [
      {
        data: [50, 30, 20], // Example data
        backgroundColor: ['#ff6666', '#ffcc00', '#ff99cc'],
        borderColor: ['#ff4d4d', '#ff9900', '#ff66b3'],
        borderWidth: 1,
        hoverOffset: 10, // Hover effect
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
          },
        },
      },
      datalabels: {
        color: '#ffffff',
        font: {
          weight: 'bold',
          size: 16,
        },
        formatter: (value) => `${value}%`, // Show percentage inside pie
      },
    },
  };

  return (
    <>
      <Header />
      <Container maxWidth="lg" className="about-container">
        <Typography variant="h3" className="about-title" align="center">
          About Human Trafficking Laws
        </Typography>

        {/* Victim Rights & Support */}
        <Divider className="custom-divider" />
        <Box className="section-container">
          <Typography variant="h4" className="section-title">
            <FaUsers style={{ marginRight: '10px', color: '#003366' }} />
            Victim Rights & Support
          </Typography>
          <Typography variant="body1" className="section-text">
            Victims of human trafficking have the right to protection, legal assistance, and rehabilitation. The government and various organizations provide shelter, medical care, and legal aid to trafficking survivors.
          </Typography>
          <Typography variant="body1" className="section-text">
            Some of the victim support measures include:
          </Typography>
          <List>
            <ListItem className="list-item">
              <MdOutlineSecurity style={{ marginRight: '10px', color: '#003366' }} />
              <ListItemText primary="Immediate protection and shelter" />
            </ListItem>
            <ListItem className="list-item">
              <FaShieldAlt style={{ marginRight: '10px', color: '#003366' }} />
              <ListItemText primary="Medical care and psychological support" />
            </ListItem>
            <ListItem className="list-item">
              <MdSupportAgent style={{ marginRight: '10px', color: '#003366' }} />
              <ListItemText primary="Legal assistance and representation" />
            </ListItem>
          </List>
        </Box>

        {/* Legal Process for Human Trafficking Cases */}
        <Divider className="custom-divider" />
        <Box className="section-container">
          <Typography variant="h4" className="section-title">
            <FaGavel style={{ marginRight: '10px', color: '#003366' }} />
            The Legal Process for Human Trafficking Cases
          </Typography>
          <Typography variant="body1" className="section-text">
            The legal process involves multiple stages, from reporting the crime to the final judicial proceedings. Here's a breakdown of how it works:
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} className="info-card">
                <Typography variant="h6" className="card-title">
                  <FaHandshake style={{ marginRight: '10px', color: '#003366' }} />
                  Step 1: Reporting a Case
                </Typography>
                <Typography variant="body1" className="section-text">
                  Human trafficking cases can be reported to local law enforcement, NGOs, or through helplines. Victims and witnesses can provide details, and authorities begin investigation upon receiving the complaint.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper elevation={3} className="info-card">
                <Typography variant="h6" className="card-title">
                  <FaGavel style={{ marginRight: '10px', color: '#003366' }} />
                  Step 2: Investigation and Arrest
                </Typography>
                <Typography variant="body1" className="section-text">
                  Investigations are carried out to identify traffickers, arrest the accused, and rescue the victims. Law enforcement agencies often work with NGOs and international bodies to track and apprehend perpetrators.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper elevation={3} className="info-card">
                <Typography variant="h6" className="card-title">
                  <FaHandshake style={{ marginRight: '10px', color: '#003366' }} />
                  Step 3: Trial and Prosecution
                </Typography>
                <Typography variant="body1" className="section-text">
                  Once arrested, the accused face legal prosecution. Trials are conducted in court, and evidence is presented to ensure justice is served. Victims may be required to testify and provide statements.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper elevation={3} className="info-card">
                <Typography variant="h6" className="card-title">
                  <FaCogs style={{ marginRight: '10px', color: '#003366' }} />
                  Step 4: Rehabilitation and Reintegration
                </Typography>
                <Typography variant="body1" className="section-text">
                  After a successful prosecution, victims are offered rehabilitation programs that include counseling, medical care, education, and vocational training. This helps them reintegrate into society and live independently.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Pie Charts Section */}
        <Divider className="custom-divider" />
        <Box className="section-container">
          <Typography variant="h4" className="section-title" align="center">
            <FaShieldAlt style={{ marginRight: '10px', color: '#003366' }} />
            Human Trafficking Statistics
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Paper elevation={3} className="info-card">
                <Typography variant="h6" className="card-title">Types of Human Trafficking</Typography>
                <Pie data={traffickingData1} options={chartOptions} />
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper elevation={3} className="info-card">
                <Typography variant="h6" className="card-title">Victim Demographics</Typography>
                <Pie data={traffickingData2} options={chartOptions} />
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper elevation={3} className="info-card">
                <Typography variant="h6" className="card-title">Types of Exploitation</Typography>
                <Pie data={traffickingData3} options={chartOptions} />
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Resources Section */}
        <Divider className="custom-divider" />
        <Box className="section-container">
          <Typography variant="h4" className="section-title">
            <FaUsers style={{ marginRight: '10px', color: '#003366' }} />
            Resources for Victims and Support
          </Typography>
          <Typography variant="body1" className="section-text">
            Several organizations provide crucial resources to support trafficking victims. These resources are vital for both immediate assistance and long-term recovery:
          </Typography>
          <List>
            <ListItem className="list-item">
              <MdSupportAgent style={{ marginRight: '10px', color: '#003366' }} />
              <ListItemText primary="National Helplines: Available 24/7 for reporting cases" />
            </ListItem>
            <ListItem className="list-item">
              <FaHandshake style={{ marginRight: '10px', color: '#003366' }} />
              <ListItemText primary="NGO Support: Provides shelter, legal aid, and rehabilitation programs" />
            </ListItem>
            <ListItem className="list-item">
              <FaGavel style={{ marginRight: '10px', color: '#003366' }} />
              <ListItemText primary="Legal Resources: Pro bono legal services to victims" />
            </ListItem>
          </List>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default AboutPage;
