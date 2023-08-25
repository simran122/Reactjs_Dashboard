import React from 'react'
import { Box, Typography, Button, Stack } from "@mui/material"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { useUSerAuth } from '../UserAuthContext';
function Login() {
    const [form1, setForm1] = useState({ email: "", password: "" })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm1((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    };
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const { logIn, googleSignIn , facebookSignIn } = useUSerAuth();
    const handleSignIn = async (e) => {
        e.preventDefault();
        setError("")
        try {
            await logIn(form1.email, form1.password)
            navigate("/Dashboard")
          
        } catch (err) {
            setError(err.message)

        }
    }

    const googleSign = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate("/Dashboard")
        } catch (err) {
            setError(err.message)

        }

    }

    
    const facebookSign = async (e) => {
        e.preventDefault();
        try {
            await facebookSignIn();
            navigate("/Dashboard")
        } catch (err) {
            setError(err.message)

        }

    }

    return (

        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, bgcolor: "#F5F5F5", minHeight: "inherit" }}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "primary.main", minWidth: "35%", minHeight: "100%" }} >
                <Typography variant='h1' sx={{ color: "white" }}>Broad.</Typography>

            </Box>
            <Box sx={{ display: "flex", alignItems: { xs: "flex-start", sm: "center" }, flexDirection: "column", bgcolor: "#F5F5F5", justifyContent: "center", minWidth: "65%", mx: "auto", minHeight: "100%" }}>
                <Box sx={{
                    maxWidth: "32rem", p: "1.5rem", display
                        : 'flex', flexDirection: 'column', justifyContent: "center", flexGrow: { xs: 1, sm: 0 }, mt: { xs: "3rem", sm: 0 }
                }} >
                    <Typography sx={{ mb: "0.5rem" }} variant='h2'>Sign In</Typography>
                    <Typography sx={{ mb: "1rem", fontFamily: "Lato" }} variant='h5'>Sign in to your account</Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "2rem", }}>
                        <Box onClick={googleSign} sx={{ display: "flex", gap: 1, alignItems: "center", bgcolor: "white", border: "1px solid transparent", p: "0.5rem 2rem", borderRadius: "15px", maxWidth: { xs: "28rem", sm: "15rem" }, justifyContent: "center", flexGrow: 1 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <g clipPath="url(#clip0_0_347)">
                                    <path d="M13.9926 7.13096C13.9926 6.55738 13.9449 6.13883 13.8419 5.70477H7.1394V8.2936H11.0736C10.9943 8.93695 10.566 9.90584 9.61414 10.5569L9.6008 10.6436L11.72 12.2478L11.8668 12.2622C13.2152 11.0452 13.9926 9.25473 13.9926 7.13096Z" fill="#4285F4" />
                                    <path d="M7.13948 13.9519C9.06691 13.9519 10.685 13.3318 11.8669 12.2622L9.61422 10.5569C9.0114 10.9677 8.20233 11.2545 7.13948 11.2545C5.2517 11.2545 3.64946 10.0376 3.07831 8.35565L2.99459 8.3626L0.791024 10.0291L0.762207 10.1074C1.93612 12.3862 4.34742 13.9519 7.13948 13.9519Z" fill="#34A853" />
                                    <path d="M3.07816 8.35566C2.92746 7.92161 2.84024 7.45651 2.84024 6.97597C2.84024 6.49537 2.92746 6.03033 3.07023 5.59627L3.06624 5.50383L0.835056 3.81058L0.762055 3.84451C0.27823 4.79015 0.000610352 5.85207 0.000610352 6.97597C0.000610352 8.09987 0.27823 9.16173 0.762055 10.1074L3.07816 8.35566Z" fill="#FBBC05" />
                                    <path d="M7.13948 2.69735C8.47995 2.69735 9.38417 3.26317 9.89976 3.73602L11.9145 1.81375C10.6771 0.689847 9.0669 0 7.13948 0C4.34742 0 1.93612 1.5657 0.762207 3.8445L3.07038 5.59626C3.64946 3.91428 5.2517 2.69735 7.13948 2.69735Z" fill="#EB4335" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_347">
                                        <rect width="14" height="14" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <Typography variant='h6' sx={{ color: "primary.light" }}>Sign in with Google</Typography>

                        </Box>
                        <Box onClick={facebookSign} sx={{ display: "flex", gap: 1, alignItems: "center", bgcolor: "white", border: "1px solid transparent", p: "0.5rem 2rem", borderRadius: "15px", maxWidth: { xs: "28rem", sm: "15rem" }, justifyContent: "center", flexGrow: 1 }}>

                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px" height="25px" fill="#3F51B5"><path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z" /><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z" /></svg>

                            <Typography variant='h6' sx={{ color: "primary.light" }}>Sign in with Facebook</Typography>
                        </Box>

                    </Box>

                    <Box sx={{ bgcolor: "white", borderRadius: "20px", p: 2, mt: "2rem", maxWidth: "29rem", }}>


                        <label htmlFor='email'><Typography variant='h5' sx={{ fontFamily: "Lato" }}>Email Address</Typography></label>
                        <input style={{ marginTop: "0.7rem ", width: "100%", height: "2.4rem", borderRadius: "15px", outline: "none ", border: "none", backgroundColor: "#F5F5F5", padding: "1rem" }} type='email' id="email" name="email" required value={form1.email} onChange={handleChange} />
                        <label htmlFor='password'><Typography variant='h5' sx={{ fontFamily: "Lato", mt: "1rem" }}>Password</Typography></label>
                        <input style={{ marginTop: "0.7rem ", width: "100%", height: "2.4rem", borderRadius: "15px", outline: "none ", border: "none", backgroundColor: "#F5F5F5", padding: "1rem" }} type='password' id="password" name="password" required value={form1.password} onChange={handleChange} />

                        <Typography variant='h5' sx={{ color: "info.main", mt: "0.7rem", fontFamily: "Lato", ml: "0.4rem" }}>Forgot password?</Typography>
                        <Button onClick={handleSignIn} variant="contained" sx={{ mt: "1rem", width: "100%", borderRadius: "15px", mb: "2rem" }}>Sign In</Button>
                    </Box>
                    <Stack direction="row" spacing={1} sx={{ mt: "1rem", }} justifyContent="center">
                        <Typography variant='h5' sx={{ color: "primary.light", fontFamily: "Lato", mt: "1rem", textAlign: "center" }}> Don’t have an account? </Typography>
                        <Link to="/SignUp">
                            <Typography variant='h5' sx={{ color: "info.main", fontFamily: "Lato" }}> Register here</Typography>
                        </Link>
                    </Stack>
                    <Typography variant='h3' sx={{ color: "red", mt: "2rem", textAlign: "center" }}>{error}</Typography>

                </Box>


            </Box>

        </Box >

    )
}

export default Login
