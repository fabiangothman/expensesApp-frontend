import { Outlet } from "react-router-dom";
import './Layout.css';
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";
import { Box, Container } from "@mui/material";

const Layout = () => {

  return (
    <>
      <Box height="100vh" position="static"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box>
          <Navbar />
        </Box>
        <Box
          sx={{
            flex: 1,
            overflowY: "auto"
          }}
        >
          <Container maxWidth="lg" style={{ height: '100%' }}>
            <Outlet />
          </Container >
        </Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </>
  )
}

export default Layout;
