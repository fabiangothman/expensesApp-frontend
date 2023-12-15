import { useState } from 'react';
import './Footer.css';
import { AppBar, Box, Container, Typography } from '@mui/material';

const Footer = () => {
  const [count, setCount] = useState(0);

  return (
    <AppBar component="footer" color="primary" position="static">
      <Container maxWidth="xl" style={{
        padding: "10px 0",
      }}>
        <Typography textAlign="center">
          Copyright ©2023. [ExpensesApp] Limited
        </Typography>
      </Container>
    </AppBar>
  )
}

export default Footer;
