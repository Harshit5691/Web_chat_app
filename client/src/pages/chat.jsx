import React, { Fragment, useRef } from 'react'
import AppLayout from '../components/layout/AppLayout'
import { IconButton, Stack } from '@mui/material';
import { grayColor, orange } from '../constants/color';
import { AttachFile as AttachFileIcon, Send as SendIcon} from '@mui/icons-material';
import { InputBox } from '../components/styles/StyledComponents';
import FileMenu from '../components/dailogs/FileMenu';
import { sampleMessages } from '../constants/sampleData';
import MessageComponent from '../components/shared/MessageComponent';
const user = {
  _id:"sdfsdfsdf",
  name:"John Doe",
}
const chat = () => {
  const containerRef = useRef(null);
  return (
    <Fragment>
      <Stack 
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={grayColor}
        height={"90%"}
        sx={{
          overflow:"hidden",
          overflowY:"auto",
        }}
      >
        {
          sampleMessages.map((i)=>(
          <MessageComponent message={i} user={user}/>
        ))
        }
      </Stack>
      <form style={{
        height:"10%",
      }}>
        <Stack 
        direction={"row"} 
        height={"100%"} 
        padding={"1rem"} 
        alignItems={"center"}
        position={"relative"}
        >
          <IconButton sx={{
            position:"absolute",
            Left:"1.5rem",
            rotate:"30deg",
          }}
          
          >
            <AttachFileIcon />
          </IconButton>

          <InputBox placeholder='Type Message Here....'/>
          
          <IconButton type='submit' sx={{
            rotate:"-30deg",
            backgroundColor:orange,
            color:"white",
            marginLeft:"1rem",
            padding:"0.5rem",
            "&:hover":{
              bgcolor:"error.dark",
            },
          }}>
            <SendIcon/>
          </IconButton>
        </Stack>
      </form>
      <FileMenu/>
    </Fragment>
  )
}

export default AppLayout()(chat);