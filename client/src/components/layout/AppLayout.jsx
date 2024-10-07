import React from 'react'
import Header from './Header';
import Title from '../shared/Title';
import {Grid} from '@mui/material';
import Chatlist from '../specific/Chatlist';
import { sampleChats } from '../../constants/sampleData';
import { useParams } from 'react-router-dom';
import Profile from '../specific/Profile';
const AppLayout = () => (WrappedComponent) => {
    return (props) => {
        const { chatid } = useParams(); 
        const handleDeleteChat = (e,_id,groupChat) => {
            e.preventDefault();
            console.log("Delete chat",_id,groupChat);
        };
  return (
    <>
        <Title />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
            <Grid item sm={4} md={3} sx={{
                display: { xs: 'none', sm: 'block' },
            }} height={"100%"}>
                <Chatlist 
                chats={sampleChats} 
                chatId={chatid}
                handleDeleteChat={handleDeleteChat}
                />
            </Grid>
            <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
                <WrappedComponent {...props} /> 
            </Grid>
            <Grid item md={4} lg={3} height={"100%"} sx={{
                display: { xs: 'none', md: 'block' },
                padding: "2rem",
                bgcolor: "rgba(0,0,0,0.85)",
            }} >
                <Profile />
            </Grid>
        </Grid>  
    </>
  );
};
};

export default AppLayout;

