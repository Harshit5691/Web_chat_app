import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { orange } from '../../constants/color'
import {Add as AddIcon, Menu as MenuIcon, Search as SearchIcon,Group as GroupIcon} from '@mui/icons-material'
const Header = () => {
  const HandleMobile = () => {
    console.log('Mobile Menu');
  };
  const OpenSearchDialog = () => {
    console.log('Open Search');
  };
  const OpenNewGroup = () => {
    console.log('Open new Group');
  };
  const NavigateToGroup = () => {
    console.log('Navigate to Group');
  };
  return (
    <>
    <Box sx={{flexGrow:1}} height={"4rem"}>
      <AppBar position="static" sx={{
        bgcolor: orange,
      }}>
        <Toolbar>
          <Typography variant="h6" sx={{
            display: { xs: 'none', sm: 'block' },
          }}>
            Chat App
          </Typography>
          <Box sx={{
            display: { xs: 'block', sm: 'none' },
          }}>
            <IconButton color='inherit' onClick={HandleMobile}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{flexGrow:1}} />
          <Box>
            <Tooltip title="Search">
            <IconButton color='inherit' size="large" onClick={OpenSearchDialog}>
              <SearchIcon />
            </IconButton>
            </Tooltip>
            <Tooltip title="New Group">
              <IconButton color='inherit' size="large" onClick={OpenNewGroup}>
                <AddIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Manage Groups">
              <IconButton color='inherit' size="large" onClick={NavigateToGroup}>
                <GroupIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Header