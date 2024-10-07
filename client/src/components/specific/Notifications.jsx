import { Dialog, DialogTitle, InputAdornment, List, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { sampleNotifications } from '../../constants/sampleData'

const Notifications = () => {
  return <Dialog open>
      <Stack p={{ xs:"1rem", sm:"2rem"}} maxWidth={"25rem"}>
        <DialogTitle>Notifications</DialogTitle>
        {
          sampleNotifications.length > 0 ? (
          <></>
        ) : (
        <Typography textAllign={"center"}>No Notification</Typography> 
      )}
      </Stack>
  </Dialog>
}

export default Notifications