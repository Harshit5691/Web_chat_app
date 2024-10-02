import React, { useState} from 'react'
import { Avatar, Button,Container, IconButton, Paper, Stack, TextField, Typography} from '@mui/material'
import {CameraAlt as CameraAltIcon} from '@mui/icons-material'
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import {useFileHandler, useInputValidation,useStrongPassword} from '6pp'
import { usernameValidator } from '../utils/validators';
const Login = () => {
    const [isLogin,setIsLogin] = useState(true)

    const toggleLogin = () => setIsLogin((prev) => !prev);

    const name = useInputValidation("")
    const bio = useInputValidation("")
    const username = useInputValidation("",usernameValidator)
    const password = useStrongPassword()
    const avatar = useFileHandler("single")
  return (<Container component={"main"} maxWidth="xs" sx={{
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <Paper 
    elevation={3} 
    sx={{
        padding: 4,
        display :'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }} 
    >
    {isLogin? (
        <>
        <Typography variant="h5">Login</Typography>
        <form style={{
            width: '100%',
            marginTop: '1rem',
        }}>
            <TextField
            required
            fullWidth
            margin="normal"
            label="Username"
            variant='outlined'
            value={username.value}
            onChange={username.changeHandler}
            />
            <TextField
            required
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            variant='outlined'
            value={password.value}
            onChange={password.changeHandler}
            />
            <Button 
            sx={{
                marginTop: "1rem",
            }}
            variant="contained" 
            color="primary" 
            type="submit"
            fullWidth
            >
                Login
            </Button>

            <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
            <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={toggleLogin} 
            >
                Sign
            </Button>
        </form>
        </>
    ) : (
        <>
        <Typography variant="h5">Sign Up</Typography>
        <form style={{
            width: '100%',
            marginTop: '1rem',
        }}>
            <Stack postion={"relative"} width={"7rem"} margin={"auto"}>
                <Avatar sx={{
                    width: 100,
                    height: 100,
                    objectFit: "contain",
                }} 
                src={avatar.preview}
                />
                <IconButton 
                sx={{
                    positon:"absolute",
                    bottom: "0",
                    right: "0",
                    backgroundColor: "white",
                    bgcolor: "rgba(0,0,0,0)",
                    ":hover": {
                        backgroundColor: "rgba(0,0,0,0.4)"
                    }
                }}
                component="label"
                >
                    <>
                        <CameraAltIcon/>
                        <VisuallyHiddenInput type="file" onChange={avatar.changeHandler}/>
                    </>
                </IconButton>
            </Stack>
            {
                avatar.error && (
                    <Typography 
                    m={"1rem"} 
                    color="error" 
                    variant="caption"
                    width={"fit-block"}
                    display={"block"}
                    >
                        {avatar.error}
                    </Typography>
                )
            }   
            <TextField
            required
            fullWidth
            margin="normal"
            label="Name"
            variant='outlined'
            value={name.value}
            onChange={name.changeHandler}
            />
            <TextField
            required
            fullWidth
            margin="normal"
            label="Username"
            variant='outlined'
            value={username.value}
            onChange={username.changeHandler}
            />
            {
                username.error && (
                    <Typography color="error" variant="caption">
                        {username.error}
                        </Typography>
                )
            }
            <TextField
            required
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            variant='outlined'
            value={password.value}
            onChange={password.changeHandler}
            />
            {
                password.error && (
                    <Typography color="error" variant="caption">
                        {password.error}
                    </Typography>
                )
            }
            <TextField
            required
            fullWidth
            margin="normal"
            label="Bio"
            variant='outlined'
            value={bio.value}
            onChange={bio.changeHandler}
            />
            <Button 
            sx={{
                marginTop: "1rem",
            }}
            variant="contained" 
            color="primary" 
            type="submit"
            fullWidth
            >
                Sign Up
            </Button>

            <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
            <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={toggleLogin} 
            >
                Login Instead
            </Button>
        </form>
        </>
    )}
    </Paper>
  </Container>
  );
};

export default Login