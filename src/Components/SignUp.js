import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { storeUser, storeToken } from '../redux/Userlogin';
import { useNavigate } from 'react-router-dom'
import {
    Button,
    CssBaseline,
    TextField,
    Box,
    Typography,
    Container, Alert
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import API from "../utils/api"


function SignUp() {
    const [input, setInput] = useState();
    const [signUpResponse, setSignUpResponse] = useState();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const theme = createTheme();


    const handleInput = (event) => {
        const { name, value } = event.target
        setInput({ ...input, [name]: value })
    }
    console.log(input)
    const handleSignUp = async () => {
        setSignUpResponse({ message: 'Please Wait', response: 'info' })

        try {
            const res = await API.signup(input)
            setSignUpResponse({ message: 'Successfully Registered', response: 'success' })
            console.log(res)
            const { user, token } = res
            setTimeout(() => {
                dispatch(storeUser(user))
                dispatch(storeToken(token))
                navigate("/form")
            }, 2500);
        } catch (err) {
            setSignUpResponse({ message: 'Something went wrong', response: 'error' })
            if (err.response) setSignUpResponse({ message: err.response?.data.message, response: 'error' })

            console.log(err.response.data.message)
            setTimeout(() => {
                setSignUpResponse()
            }, 2500);
        }
    }
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        {signUpResponse !== undefined &&
                            <Alert
                                variant="filled"
                                sx={{ mb: 3, width: "auto" }}
                                severity={signUpResponse?.response}>
                                {signUpResponse?.message}
                            </Alert>}
                        <Box component="form" onSubmit={handleSignUp} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Full Name"
                                type="text" name="userName"
                                onChange={(event) => { handleInput(event) }}
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Email Address"
                                type="email" name="email"
                                onChange={(event) => { handleInput(event) }}
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Password"
                                type="passowrd" name="password"
                                onChange={(event) => { handleInput(event) }}
                                autoComplete="current-password"
                            />

                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                onClick={handleSignUp}
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>

                        </Box>
                    </Box>

                </Container>
            </ThemeProvider>
        </div>
    )
}

export default SignUp