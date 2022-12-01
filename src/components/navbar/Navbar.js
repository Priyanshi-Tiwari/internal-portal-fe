import React from 'react' 
import AppBar from '@mui/material/AppBar';
import { Tabs, Toolbar, Typography, Avatar, } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import "./Navbar.css"; 

const Navbar = () => {
    return(
       <div>
        <>
        <AppBar  position="static" sx={{background: "#5CA7C7"}}>
            <Toolbar>
            <Typography sx={{fontSize: "30px"}}>
                Carnera
            </Typography>
            <div className='nav-right-container' >
            <Avatar sx={{mr: "8px", mt:"8px"}}>JD</Avatar> 
            <Typography  sx={{mr: "53px", mt:"13px", fontSize:"22px"}} >
                John doe
                </Typography>
            <Tabs  sx={{ mt:"17px"}}>
            <LogoutIcon/>
            </Tabs>
            </div>
            </Toolbar>
        </AppBar>
        </>

       </div>
    );
}
export default Navbar;