"use client"
import { Container } from "@mui/material"
import React, { useEffect, useState } from "react"
import Navbar from "components/Navbar"
import VerticalTabs from "components/VerticalTabs"
import { setAuthToken } from "app/api/apiClient"
import { getUserinfo } from "app/api/userService"
import { get } from "http"
const paperStyle = { padding: 0, margin: "7% auto", border: "1px solid #c2c2c2", borderRadius: "10px", width: "50%" }




export default function ProfileDashboard() {

  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      setAuthToken(storedToken);
      getUserinfo().then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.error('Error getting the user info:', error);
      }
      );
    }
  }, []);
  
  return (
    <>
      <Navbar />
      <Container style={paperStyle}>
        <VerticalTabs />
      </Container>
    </>
  )
}
