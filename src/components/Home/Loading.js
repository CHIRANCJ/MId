// src/components/Loading.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Spinner = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 6px solid ${({ theme }) => theme.primary};
  border-top: 6px solid ${({ theme }) => theme.secondary};
  border-radius: 50%;
  margin: 20px auto;
`;

function Loading() {
  return (
    <Spinner
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity }}
    />
  );
}

export default Loading;
