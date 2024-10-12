import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'

const ConfirmDeleteDialog = ({open,handleClose,deleteHandle}) => {
  return (
    <Dialog open={open} onClose={handleClose} >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
            <DialogContentText>
                are you sure you want to delete this group?
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>No</Button>
            <Button onClick={deleteHandle}color="error">
              Yes
            </Button>
        </DialogActions>
    </Dialog>
  )
}

export default ConfirmDeleteDialog;