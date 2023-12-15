import './Footer.css';
import { AppBar, Container, Typography } from '@mui/material';

const Footer = () => {

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
