import React from "react";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useNavigate} from 'react-router-dom';
import {
    Grid,
    Paper,
    Box,
    TextField,
    Checkbox,
    FormControlLabel,
    Button,
    Typography,
    Link,
    InputAdornment,
} from "@mui/material";

import "./Login.css";



const Login = () => {
    const paperStyle = {
        flex: "1",
        padding: 40,
        height: "460px",
        width: 295,
        marginLeft: "40%",
        marginTop: "10%",
    };
    const textFieldStyle = {
        marginTop: "10px",
    };
    const typographyStyle = {
        marginTop: "10px"
    };
    const buttonStyle = {
        marginTop: "20px"
    };
    const gridLeftStyle = {
        paddingTop: "20%",
        textAlign: "center",
        fontSize: "x-large",
        background: "skyblue",
        color: "white",
        height: "100vh",
    };
    const gridRightStyle = { 
        paddingTop: "50px",
        background: 'linear-gradient(80deg, #87ceeb 26%, #ffffff 22%)'
    };

    const navigate = useNavigate();

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4} style={gridLeftStyle} >
                        <div >
                            <h1 className="h1">Carnera</h1>
                            <h2 className="h2">Internal Portal</h2>
                        </div>
                    </Grid>
                    <Grid item xs={8} style={gridRightStyle}>
                        <Paper elevation={10} style={paperStyle}>
                            <Grid align="center">
                                <h1>Hello!</h1>
                                <p>
                                    Welcome to The Web Portal. Please sign in if you have credentials.
                                    if not, please see your adminstration.
                                </p>
                            </Grid>
                            <TextField
                                style={textFieldStyle}
                                label="UserName or Email"
                                placeholder="Enter username"
                                fullWidth
                                required
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <PersonOutlineIcon />
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <TextField
                                style={textFieldStyle}
                                label="Password"
                                placeholder="Enter password"
                                type="password"
                                fullWidth
                                required
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <VisibilityOffIcon />
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <Typography
                                style={typographyStyle}
                            >
                                <FormControlLabel
                                    control={<Checkbox name="checkdB" color="primary" />}
                                    label="Remember me"
                                />
                                <Link href="#">
                                    Forget password?
                                </Link>
                            </Typography>
                            <Button style={buttonStyle} type="Submit" color="primary" fullWidth variant="contained" onClick={() => navigate('/client-accounts')}>
                                Login
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </>
    )

};

export default Login;
