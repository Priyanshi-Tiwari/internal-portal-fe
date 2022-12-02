import React, { useState } from "react";
import {
  TableContainer,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  TablePagination,
  Paper,
  Button,
} from "@mui/material";
import Navbar from "../navbar/Navbar";
import "./AccountManager.css";
import { Box } from "@mui/system";


function createData(
  no,
  account,
  JobTitle,
  PrimarySkill,
  SecondarySkill,
  JobCode,
  Minyears,
  Maxyears,
  ofposition,
  QCallDone,
  Priority,
  Timing,
  Location,
  Allocation,
   UpdateComment,


  
) {
  return { no, account, JobTitle, PrimarySkill, SecondarySkill,JobCode,
  Minyears,Maxyears, ofposition, QCallDone, Priority, Timing ,Location, Allocation, UpdateComment  };
}

const rows = [
  createData(1, "ADSK", "System Admin/Infra Lead","Weblogic Application Servers Administrator", "CI/CD,AWS", 31002,  4,  5,  1, "Y/N", "1to5"),
  createData(2, "ADSK", "System Admin/Infra Lead","Weblogic Application Servers Administrator" ,"CI/CD,AWS", 31002, 4,  5,  1, "Y/N", "1to5"),
  createData(3, "ADSK", "System Admin/Infra Lead", "Weblogic Application Servers Administrator","CI/CD,AWS", 31002, 4,  5,  1, "Y/N", "1to5"),
  createData(4,"ADSK", "System Admin/Infra Lead","Weblogic Application Servers Administrator", "CI/CD,AWS", 31002, 4,  5,  1, "Y/N", "1to5"),
];

const AccountManager = () => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const btnStyle = {
   color: "black",
   backgroundColor:"White",
    margin: "20px",
    "&:hover": {
      backgroundColor: "none",
    }
  };
    const headingStyle ={
      marginbottom: "65px",
      marginright: "auto",
      "&:hover": {
        backgroundColor: "none",
      }
    };
    const addbtnStyle = {
      float:"right", 
        marginRight: "50px" ,
        backgroundColor:"#5CA7C7",
      "&:hover": {
        backgroundColor: "none",
      }
    };

    

    
  return (
    <>
      <Navbar />
      <div>
        <p>Home/Account Manager</p>
      </div>
      <Button variant="contained" style={addbtnStyle}>Add Opening</Button>
      <div style={ headingStyle}>
        <h1>Account Manager</h1>
        <hr className="line" />
        <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" style={btnStyle}>
           View Archived
          </Button>
        </Box>
      </div>
      <div className="dashboard-container">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow >
                <TableCell sx={{fontWeight: "bold", fontSize:"large" }}  align="center">No</TableCell>
                <TableCell sx={{fontWeight: "bold", fontSize:"large" }}  align="center">Account</TableCell>
                <TableCell sx={{fontWeight: "bold", fontSize:"large" }}  align="center">Job Title</TableCell>
                <TableCell sx={{fontWeight: "bold", fontSize:"large" }}  align="center">Primary Skill</TableCell>
                <TableCell sx={{fontWeight: "bold", fontSize:"large" }}  align="center">Secondary Skill</TableCell>
                <TableCell sx={{fontWeight: "bold", fontSize:"large" }}  align="center">Job Code</TableCell>
                <TableCell sx={{fontWeight: "bold", fontSize:"large" }}  align="center">Min years</TableCell>
                <TableCell sx={{fontWeight: "bold", fontSize:"large" }}  align="center">Max years</TableCell>
                <TableCell sx={{fontWeight: "bold", fontSize:"large" }}  align="center"># of position</TableCell>
                <TableCell sx={{fontWeight: "bold", fontSize:"large" }}  align="center">Q-Call Done?</TableCell>
                <TableCell sx={{fontWeight: "bold", fontSize:"large" }}  align="center">Priority</TableCell>
                <TableCell sx={{fontWeight: "bold", fontSize:"large" }}  align="center">Timing</TableCell>
                <TableCell sx={{fontWeight: "bold", fontSize:"large" }}  align="center">Location</TableCell>
                <TableCell sx={{fontWeight: "bold", fontSize:"large" }}  align="center">Allocation</TableCell>
                <TableCell sx={{fontWeight: "bold", fontSize:"large" }}  align="center">Update/Comment</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.no}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.no}
                  </TableCell>
                  <TableCell className="MuiTableCell">{row.account}</TableCell>
                  <TableCell>{row.JobTitle}</TableCell>
                <TableCell >{row.PrimarySkill}</TableCell>
                <TableCell>{row.SecondarySkill}</TableCell>
                <TableCell >{row.JobCode}</TableCell>
                <TableCell >{row.Minyears}</TableCell>
                <TableCell >{row.Maxyears}</TableCell>
                <TableCell >{row.ofposition}</TableCell>
                <TableCell >{row.CallDone}?</TableCell>
                <TableCell>{row.Priority}</TableCell>
                <TableCell>{row.Timing}</TableCell>
                <TableCell>{row.Location}</TableCell>
                <TableCell >{row.Allocation}</TableCell>
                <TableCell>{row.Update}</TableCell>
                <TableCell>{row.Comment}</TableCell>
                 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </>
  );
};
export default AccountManager;
