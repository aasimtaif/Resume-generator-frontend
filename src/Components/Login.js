import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { storeUser, storeToken } from '../redux/Userlogin';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container
} from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import API from "../utils/api"


const theme = createTheme();



function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [input, setInput] = useState();

  const handleInput = (event) => {
    const { name, value } = event.target
    setInput({ ...input, [name]: value })
  }
  console.log(input)


  const handleSignUp = async () => {
    try {
      const res = await API.login(input)
      const { user, token } = res
      // console.log(token,"line 25")
      dispatch(storeUser(user))
      dispatch(storeToken(token))
      navigate('/form')
      console.log(res.data)
    } catch (err) {
      console.log(err.message, "error")
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
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSignUp} noValidate sx={{ mt: 1 }}>
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
                sx={{ mt: 3, mb: 2 }}
                onClick={ handleSignUp}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/signUp" >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>

        </Container>
      </ThemeProvider>

    </div>
  )
}

export default Login