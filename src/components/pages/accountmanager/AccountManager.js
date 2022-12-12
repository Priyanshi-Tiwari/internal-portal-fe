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
  Card, CardContent ,
  Grid
} from "@mui/material";
import Navbar from "../../navbar/Navbar";
import "./AccountManager.css";
import { Box} from "@mui/system";
import CreateOpening from "./CreateOpening"


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
  Minyears,Maxyears, ofposition, QCallDone, Priority, Timing ,Location, Allocation, UpdateComment};
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
  const [openAddOpeningDialog, setOpenAddOpeningDialog] = useState(false);

  const handleClickAddOpening = () =>{
    setOpenAddOpeningDialog(true);

  }
  const handleCloseAddOpeningtDialog = () => {
    setOpenAddOpeningDialog(false);
  };

  const handleSubmitAddOpeningDialog = (AccountManagerObject) => {
    console.log("Account Manager Object", AccountManagerObject);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  
  const tableStyle = {
      borderCollapse: 'separate',
      borderSpacing: '0px 10px',
      padding: "0 10px",
      backgroundColor: '#f8fafb',
  };
  const btnStyle = {
   color: "black",
   backgroundColor:"White",
    marginRight: "30px",
    marginLeft: "16px",
    "&:hover": {
      backgroundColor: "none",
    }
  };
   
    const addbtnStyle = { 
        backgroundColor:"#5CA7C7",
      "&:hover": {
        backgroundColor: "none",
      }
    };

    

    
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="heading-left-container">
        <span className="heading">
        Account Manager
        </span>
        <div className="heading-right-container">
      <Button variant="contained"
       style={addbtnStyle}
       onClick={handleClickAddOpening}
      >
        Add Opening
        </Button>
        <CreateOpening
              open={openAddOpeningDialog}
              onClose={handleCloseAddOpeningtDialog}
              onSubmit={handleSubmitAddOpeningDialog}
            />
            <Button variant="contained" style={btnStyle}>
           View Archived
          </Button>
          </div>
        </div>
      <div>
        <hr className="line" />
      </div>
      <div className="account-container">
        <TableContainer>
          <Table sx={{ minWidth: 650 }} style={tableStyle}  aria-label="simple table">
            <TableHead sx={{boxShadow: "0px 0px 5px #978585"}}>
              <TableRow sx={{ "td, th": {borderTop: '1px solid #f8fafb', backgroundColor: 'white'}}}>
                <TableCell sx={{fontWeight: "bold", fontSize:"large"}}  align="center">No</TableCell>
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
                  sx={{boxShadow: "0px 0px 5px #978585","&:last-child td, &:last-child th": { border: 0 }, "td, th": {borderTop: '1px solid #f8fafb', backgroundColor: 'white'}}}
                >
                    <TableCell  component="th" scope="row" >
                  <span>
                    {row.no}
                    </span>
                  </TableCell>
                  <TableCell  className="MuiTableCell">
                  <span>
                    {row.account}
                    </span>
                    </TableCell>
                  <TableCell>
                  <span>
                    {row.JobTitle}
                    </span>
                    </TableCell>
                <TableCell sx={{ fontSize:"medium" }}>{row.PrimarySkill}</TableCell>
                <TableCell sx={{ fontSize:"medium" }}>{row.SecondarySkill}</TableCell>
                <TableCell sx={{ fontSize:"medium" }} >{row.JobCode}</TableCell>
                <TableCell sx={{ fontSize:"medium" }}>{row.Minyears}</TableCell>
                <TableCell sx={{ fontSize:"medium" }}>{row.Maxyears}</TableCell>
                <TableCell sx={{ fontSize:"medium" }}>{row.ofposition}</TableCell>
                <TableCell sx={{ fontSize:"medium" }}>{row.CallDone}?</TableCell>
                <TableCell sx={{ fontSize:"medium" }}>{row.Priority}</TableCell>
                <TableCell sx={{ fontSize:"medium" }}>{row.Timing}</TableCell>
                <TableCell sx={{ fontSize:"medium" }}>{row.Location}</TableCell>
                <TableCell sx={{ fontSize:"medium" }} >{row.Allocation}</TableCell>
                <TableCell sx={{ fontSize:"medium" }}>{row.UpdateComment}</TableCell>
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
      </div>
    
    </>
  );
};
export default AccountManager;
