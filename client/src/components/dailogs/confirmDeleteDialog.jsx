import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'

const confirmDeleteDialog = ({open,handleClose,deleteHandle}) => {
  return (
    <Dialog open={open} onClose={handleClose} >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
            <DialogContentText>
                are you sure you want to delete this group?
            </DialogContentText>
        </DialogContent>
    </Dialog>
  )
}

export default confirmDeleteDialog