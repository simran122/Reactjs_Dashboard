import React from 'react'
import { Box, Typography, Button, Stack, Snackbar, } from "@mui/material"
import MuiAlert from '@mui/material/Alert'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import { useState, forwardRef } from 'react';
import { useUSerAuth } from '../UserAuthContext';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function ResetPassword() {
    const [error, setError] = useState("")
    const [email, setEmail] = useState("")
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();
    const { reset } = useUSerAuth();

    const handleReset = async (e) => {
        e.preventDefault();
        setError("")
        try {
            await reset(email)
            setEmail("");
            setOpen(true);

            setTimeout(() => {
                navigate('/')
            }, 2000);


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
                    <Typography sx={{ mb: "0.5rem", textAlign: "center" }} variant='h2'>Reset Password</Typography>


                    <Box sx={{ bgcolor: "white", borderRadius: "20px", p: 2, mt: "2rem", maxWidth: "29rem", }}>


                        <label htmlFor='email'><Typography variant='h5' sx={{ fontFamily: "Lato" }}>Email Address</Typography></label>
                        <input style={{ marginTop: "0.7rem ", width: "100%", height: "2.4rem", borderRadius: "15px", outline: "none ", border: "none", backgroundColor: "#F5F5F5", padding: "1rem" }} type='email' id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required />

                        <Button onClick={handleReset} variant="contained" sx={{ mt: "1rem", width: "100%", borderRadius: "15px", mb: "2rem" }}>Reset Password</Button>
                    </Box>
                    <Stack direction="row" spacing={1} sx={{ mt: "1rem", }} justifyContent="center">
                        <Typography variant='h5' sx={{ color: "primary.light", fontFamily: "Lato", mt: "1rem", textAlign: "center" }}> Don’t have an account? </Typography>
                        <Link to="/">
                            <Typography variant='h5' sx={{ color: "info.main", fontFamily: "Lato" }}> Log In</Typography>
                        </Link>
                    </Stack>

                    <Snackbar open={open} autoHideDuration={100}
                        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
                        <Alert severity="success" sx={{ width: '100%' }}>
                            Reset Link send to email!
                        </Alert>
                    </Snackbar>
                    <Typography variant='h3' sx={{ color: "red", mt: "2rem", textAlign: "center" }}>{error}</Typography>

                </Box>


            </Box>

        </Box >


    )
}

export default ResetPassword