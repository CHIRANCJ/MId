// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles';
import { theme } from './styles/theme';

import HomePage from './pages/HomePage';

import ComplaintForm from './components/ComplaintForm/ComplaintForm';
import CaseStatusPage from './pages/CaseStatusPage';
import AboutPage from './pages/AboutPage';
import Appl from './components/Appl';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/raise-complaint" element={<ComplaintForm />} />
          <Route path="/case-status" element={<CaseStatusPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/chat" element={<Appl/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
