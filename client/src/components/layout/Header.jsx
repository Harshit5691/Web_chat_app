import { AppBar, Backdrop, Box, Icon, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React,{lazy, Suspense, useState} from 'react'
import { orange } from '../../constants/color'
import {Add as AddIcon, Menu as MenuIcon, Search as SearchIcon,Group as GroupIcon,Logout as LogoutIcon, Notifications as NotificationsIcon} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { server } from '../../constants/config'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { userNotExists } from '../../redux/reducer/auth'
import { setIsMobile, setIsNotification, setIsSearch } from '../../redux/reducer/misc'
const SearchDialog = lazy(() => import('../specific/Search'));
const NotificationDialog = lazy(() => import('../specific/Notifications'));
const NewGroupDialog = lazy(() => import('../specific/NewGroup'));
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isSearch,isNotification} = useSelector(state => state.misc);
  const [isNewGroup,setIsNewGroup] = useState(false);
  const HandleMobile = () => dispatch(setIsMobile(true));
  const OpenSearch = () => dispatch(setIsSearch(true));
  const OpenNewGroup = () => {
    setIsNewGroup((prev) => !prev);
  };
  const OpenNotification = () => dispatch(setIsNotification(true));
  const NavigateToGroup = () => navigate("/group");
  const LogoutHandler = async() => {
    try {
      const {data} = await axios.get(`${server}/api/v1/user/logout`,{
        withCredentials: true,
      });
      dispatch(userNotExists());
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
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
            <IconBtn title="Search" icon={<SearchIcon />} onClick={OpenSearch} />
            <IconBtn title="New Group" icon={<AddIcon />} onClick={OpenNewGroup} />
            <IconBtn title="Manage Groups" icon={<GroupIcon />} onClick={NavigateToGroup} />
            <IconBtn title="Logout" icon={<LogoutIcon />} onClick={LogoutHandler} />
            <IconBtn title="Notification" icon={<NotificationsIcon />} onClick={OpenNotification} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    {
      isSearch && (
          <Suspense fallback={<Backdrop open/>}>
            <SearchDialog/>
          </Suspense>
      )
    }
    {
      isNotification && (
          <Suspense fallback={<Backdrop open/>}>
            <NotificationDialog/>
          </Suspense>
      )
    }
    {
      isNewGroup && (
          <Suspense fallback={<Backdrop open/>}>
            <NewGroupDialog/>
          </Suspense>
      )
    }
    </>
  )
}
const IconBtn = ({title,icon,onClick}) => {
  return(
    <Tooltip title={title}>
      <IconButton color='inherit' size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};
export default Header