import { useFileHandler, useInputValidation, useStrongPassword } from '6pp';
import { CameraAlt as CameraAltIcon } from '@mui/icons-material';
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import { server } from '../constants/config';
import { userExists } from '../redux/reducer/auth';
import { usernameValidator } from '../utils/validators';
const Login = () => {
    const [isLogin,setIsLogin] = useState(true)

    const toggleLogin = () => setIsLogin((prev) => !prev);

    const name = useInputValidation("")
    const bio = useInputValidation("")
    const username = useInputValidation("",usernameValidator)
    const password = useStrongPassword()
    const avatar = useFileHandler("single")
    const dispatch = useDispatch();
    const handleLogin = async(e) => {
        e.preventDefault();
        const config = {
          withCredentials: true,
          headers:{
            "Content-Type": "application/json",
          },
        };
        try {
          const {data} = await axios.post(
            `${server}/api/v1/user/login`,
            {
              username: username.value,
              password: password.value,
            },
            config
          );
          dispatch(userExists(true));
          toast.success(data.message);
        } catch (error) {
          toast.error(error?.response?.data?.message || "Something Went Wrong");
        }
    };
    const handleSignUp = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("avatar", avatar.file);
        formData.append("name",name.value);
        formData.append("bio",bio.value);
        formData.append("username",username.value);
        formData.append("password",password.value);
        const config = {
          withCredentials: true,
          headers:{
            "Content-Type": "multipart/form-data"
          }
        };
        try {
          const {data} = await axios.post(
            `${server}/api/v1/user/new`,
            formData,
            config,
          )
          dispatch(userExists(true));
          toast.success(data.message);
        } catch (error) {
          
        }
    };
  return (
    <div 
    style={{
        backgroundImage:
        "linear-gradient(rgba(200,200,200,0.5),rgba(120,110,220,0.5))",
    }}
    >
  <Container component={"main"} maxWidth="xs" sx={{
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
        }}
        onSubmit={handleLogin}
        >
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
        }}
        onSubmit={handleSignUp}
        >
            <Stack postion={"relative"} width={"6.3rem"} margin={"auto"}>
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
  </div>
  );
};

export default Login
// import React, { useEffect, useState } from "react";
// import {
//   Avatar,
//   Button,
//   Container,
//   IconButton,
//   Paper,
//   Stack,
//   TextField,
//   Typography,
// } from "@mui/material";
// import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
// import { useFileHandler, useInputValidation, useStrongPassword } from "6pp"; 
// import { usernameValidator } from "../utils/validators";
// import "./Login.css"; 

// const Login = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   useEffect(() => {
//     document.title = isLogin ? "Login | WebChat" : "Sign Up | WebChat";
//   }, [isLogin]);

//   const toggleLogin = () => setIsLogin((prev) => !prev);

//   const username = useInputValidation("", usernameValidator);
//   const password = useStrongPassword();
//   const avatar = useFileHandler("single");
//   const [bio, setBio] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//   };

//   const handleSignUp = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div
//       style={{
//         background:
//           "linear-gradient(39deg, rgba(2,0,36,1) 0%, rgba(59,108,143,1) 48%, rgba(11,219,217,1) 100%)",
//       }}
//     >
//       <Container
//         component={"main"}
//         maxWidth="xs"
//         sx={{
//           height: "100vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Paper
//           elevation={3}
//           sx={{
//             padding: 4,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             borderRadius: 10, 
//           }}
//         >
//           {isLogin ? (
//             <>
//               <Typography variant="h5">Login</Typography>
//               <form
//                 style={{
//                   width: "100%",
//                   marginTop: "1rem",
//                 }}
//                 onSubmit={handleLogin}
//               >
//                 <TextField
//                   required
//                   fullWidth
//                   margin="normal"
//                   label="Username"
//                   variant="outlined"
//                   value={username.value}
//                   onChange={username.changeHandler}
//                 />
//                 <TextField
//                   required
//                   fullWidth
//                   margin="normal"
//                   label="Password"
//                   type="password"
//                   variant="outlined"
//                   value={password.value}
//                   onChange={password.changeHandler}
//                 />
//                 <Button
//                   sx={{
//                     marginTop: "1rem",
//                   }}
//                   variant="contained"
//                   color="primary"
//                   type="submit"
//                   fullWidth
//                 >
//                   Login
//                 </Button>

//                 <Typography textAlign={"center"} m={"1rem"}>
//                   First time?{" "}
//                   <span
//                     onClick={toggleLogin}
//                     style={{ cursor: "pointer", color: "#1976d2" }}
//                   >
//                     Sign Up
//                   </span>
//                 </Typography>
//               </form>
//             </>
//           ) : (
//             <>
//               <Typography variant="h5">Sign Up</Typography>

//               {/* Avatar Upload Section */}
//               <Stack position={"relative"} width={"6.3rem"} margin={"auto"}>
//                 <Avatar
//                   className="avatar"
//                   src={avatar.preview}
//                   sx={{
//                     width: 100,
//                     height: 100,
//                     margin: "0 auto",
//                     borderRadius: "50%",
//                   }}
//                 />
//                 <IconButton
//                   className="upload-button"
//                   component="label"
//                   sx={{
//                     position: "absolute",
//                     bottom: 0,
//                     right: "25%",
//                     backgroundColor: "rgba(255, 255, 255, 0.8)",
//                   }}
//                 >
//                   <input
//                     hidden
//                     accept="image/*"
//                     type="file"
//                     onChange={avatar.changeHandler}
//                   />
//                   <CameraAltIcon />
//                 </IconButton>
//               </Stack>
//               {avatar.error && (
//                 <Typography className="error-text">{avatar.error}</Typography>
//               )}

//               <form
//                 style={{
//                   width: "100%",
//                   marginTop: "1rem",
//                 }}
//                 onSubmit={handleSignUp}
//               >
//                 <TextField
//                   required
//                   fullWidth
//                   margin="normal"
//                   label="Username"
//                   variant="outlined"
//                   value={username.value}
//                   onChange={username.changeHandler}
//                 />
//                 <TextField
//                   required
//                   fullWidth
//                   margin="normal"
//                   label="Password"
//                   type="password"
//                   variant="outlined"
//                   value={password.value}
//                   onChange={password.changeHandler}
//                 />
//                 {password.error && (
//                   <Typography style={{ color: "red" }}>
//                     {password.error}
//                   </Typography>
//                 )}
//                 <TextField
//                   fullWidth
//                   margin="normal"
//                   label="Bio"
//                   variant="outlined"
//                   multiline
//                   rows={4}
//                   value={bio}
//                   onChange={(e) => setBio(e.target.value)}
//                 />
//                 <Button
//                   sx={{
//                     marginTop: "1rem",
//                   }}
//                   variant="contained"
//                   color="primary"
//                   type="submit"
//                   fullWidth
//                 >
//                   Sign Up
//                 </Button>

//                 <Typography textAlign={"center"} m={"1rem"}>
//                   Already have an account?{" "}
//                   <span
//                     onClick={toggleLogin}
//                     style={{ cursor: "pointer", color: "#1976d2" }}
//                   >
//                     Login
//                   </span>
//                 </Typography>
//               </form>
//             </>
//           )}
//         </Paper>
//       </Container>
//     </div>
//   );
// };

// export default Login;

