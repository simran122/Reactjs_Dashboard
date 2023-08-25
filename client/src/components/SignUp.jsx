import React from 'react'
import { Box, Typography, Button, Stack } from "@mui/material"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';



import { useState, useEffect } from 'react';
import { useUSerAuth } from '../UserAuthContext';

function SignUp() {
    const [form, setForm] = useState({ username: "", email: "", password: "" })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    };
    const [disable, setDisable] = useState(false)
    const navigate = useNavigate();
    const { signUp, googleSignIn } = useUSerAuth();
    const [error, setError] = useState("")

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError("")
        try {
            await signUp(form.email, form.password)
            navigate("/")
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
    

    return (

        <>
            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: { xs: "column", sm: "row" }, maxWidth: "100%", bgcolor: "#F5F5F5", minHeight: "inherit" }}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "primary.main", minWidth: "35%", minHeight: "100%" }}>
                    <Typography variant='h1' sx={{ color: "white" }}>Broad.</Typography>

                </Box>
                <Box sx={{ display: "flex", alignItems: { xs: "flex-start", sm: "center" }, flexDirection: "column", bgcolor: "#F5F5F5", justifyContent: "center", minWidth: "65%", mt: { xs: "6rem", sm: 0 }, mx: "auto", minHeight: "100%" }}>
                    <Box sx={{
                        maxWidth: "32rem", p: "1.5rem", display
                            : 'flex', flexDirection: 'column', justifyContent: "center", flexGrow: { xs: 1, sm: 0 },
                    }} >
                        <Typography sx={{ mb: "0.5rem" }} variant='h2'>Sign Up</Typography>
                        <Typography sx={{ mb: "1rem", fontFamily: "Lato" }} variant='h5'>Sign Up to your account</Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "2rem", }}>
                            <Box onClick={googleSign} sx={{ display: "flex", gap: 1, alignItems: "center", bgcolor: "white", border: "1px solid transparent", p: "0.5rem 2rem", borderRadius: "15px", maxWidth: { xs: "28rem", sm: "15rem" }, justifyContent: "center", flexGrow: 1 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <g clip-path="url(#clip0_0_347)">
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
                            <Box   sx={{ display: "flex", gap: 1, alignItems: "center", bgcolor: "white", border: "1px solid transparent", p: "0.5rem 2rem", borderRadius: "15px", maxWidth: { xs: "28rem", sm: "15rem" }, justifyContent: "center", flexGrow: 1 }}>

                                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
  <g clipPath="url(#clip0_0_355)">
    <path d="M6.34516 1.21952C7.27201 0.00716167 8.56055 0.00125122 8.56055 0.00125122C8.56055 0.00125122 8.75222 1.14107 7.83144 2.23908C6.84828 3.41151 5.73078 3.21966 5.73078 3.21966C5.73078 3.21966 5.52094 2.29759 6.34516 1.21952ZM5.84866 4.0181C6.32548 4.0181 7.21043 3.36763 8.36232 3.36763C10.3451 3.36763 11.1251 4.76781 11.1251 4.76781C11.1251 4.76781 9.59954 5.54189 9.59954 7.42017C9.59954 9.53904 11.5 10.2693 11.5 10.2693C11.5 10.2693 10.1715 13.9801 8.37708 13.9801C7.55292 13.9801 6.91217 13.4289 6.04378 13.4289C5.15883 13.4289 4.28065 14.0007 3.70868 14.0007C2.0701 14.0007 0 10.4806 0 7.65098C0 4.86704 1.7522 3.40664 3.39569 3.40664C4.46411 3.40664 5.29321 4.0181 5.84866 4.0181Z" fill="#999999"/>
  </g>
  <defs>
    <clipPath id="clip0_0_355">
      <rect width="11.5" height="14" fill="white"/>
    </clipPath>
  </defs>
</svg>

                                <Typography variant='h6' sx={{ color: "primary.light" }}>Sign in with Apple</Typography>
                            </Box>

                        </Box>

                        <Box sx={{ bgcolor: "white", borderRadius: "20px", p: 2, mt: "2rem", maxWidth: "29rem", }}>

                            <label htmlFor='username'><Typography variant='h5' sx={{ fontFamily: "Lato" }}>Username</Typography></label>
                            <input style={{ marginTop: "0.7rem ", width: "100%", height: "2.4rem", borderRadius: "15px", outline: "none ", border: "none", backgroundColor: "#F5F5F5", padding: "1rem" }} type='text' id="username" name="username" required value={form.username} onChange={handleChange} />
                            <label htmlFor='email'><Typography variant='h5' sx={{ fontFamily: "Lato", my: "1rem" }}>Email Address</Typography></label>
                            <input style={{ marginTop: "0.7rem ", width: "100%", height: "2.4rem", borderRadius: "15px", outline: "none ", border: "none", backgroundColor: "#F5F5F5", padding: "1rem" }} type='email' id="email" name="email" required value={form.email} onChange={handleChange} />
                            <label htmlFor='password'><Typography variant='h5' sx={{ fontFamily: "Lato", mt: "1rem" }}>Password</Typography></label>
                            <input style={{ marginTop: "0.7rem ", width: "100%", height: "2.4rem", borderRadius: "15px", outline: "none ", border: "none", backgroundColor: "#F5F5F5", padding: "1rem" }} type='password' id="password" name="password" value={form.password} required onChange={handleChange} />


                            <Button onClick={handleSignUp} variant="contained" sx={{ mt: "1rem", width: "100%", borderRadius: "15px", mb: "2rem" }} disabled={disable}>Sign Up</Button>
                        </Box>
                        <Stack direction="row" spacing={1} sx={{ mt: "1rem", }} justifyContent="center">
                            <Typography variant='h5' sx={{ color: "primary.light", fontFamily: "Lato", mt: "1rem", textAlign: "center" }}> Have an account? </Typography>
                            <Link to="/">
                                <Typography variant='h5' sx={{ color: "info.main", fontFamily: "Lato" }}> Sign In</Typography>
                            </Link>
                        </Stack>

                        <Typography variant='h3' sx={{ color: "red", mt: "2rem", textAlign: "center" }}>{error}</Typography>
                    </Box>


                </Box>

            </Box >
        </>
    )
}

export default SignUp
