import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import {
  Typography,
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
   Update,
  Comment


  
) {
  return { no, account, PrimarySkill, SecondarySkill,JobCode,
  Minyears,Maxyears, ofposition, QCallDone, Priority, Timing ,Location, Allocation, Update, Comment  };
}

const rows = [
  createData(1, "AutoDesk", "Active", "John Doe"),
  createData(2, "AssetPanda", "Active", "John Doe"),
  createData(3, "TechM", "Active", "John Doe"),
  createData(4, "GrandRand", "Active", "John Doe"),
  createData(5, "RiskCast", "Active", "John Doe"),
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
    },
  };
  return (
    <>
      <Navbar />
      <div>
        <p>Home/Account Manager</p>
      </div>
      <div className="heading-container">
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
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell align="center">Account</TableCell>
                <TableCell align="center">Job Title</TableCell>
                <TableCell align="center">Primary Skill</TableCell>
                <TableCell align="center">Secondary Skill</TableCell>
                <TableCell align="center">Job Code</TableCell>
                <TableCell align="center">Min years</TableCell>
                <TableCell align="center">Max years</TableCell>
                <TableCell align="center"># of position</TableCell>
                <TableCell align="center">Q-Call Done?</TableCell>
                <TableCell align="center">Priority</TableCell>
                <TableCell align="center">Timing</TableCell>
                <TableCell align="center">Location</TableCell>
                <TableCell align="center">Allocation</TableCell>
                <TableCell align="center">Update</TableCell>
                <TableCell align="center">comment</TableCell>

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
                  <TableCell align="center">{row.account}</TableCell>
                  <TableCell align="center">{row.JobTitle}</TableCell>
                <TableCell align="center">{row.PrimarySkill}</TableCell>
                <TableCell align="center">{row.SecondarySkill}</TableCell>
                <TableCell align="center">{row.JobCode}</TableCell>
                <TableCell align="center">{row.Minyears}</TableCell>
                <TableCell align="center">{row.Maxyears}</TableCell>
                <TableCell align="center">{row.ofposition}</TableCell>
                <TableCell align="center">{row.CallDone}?</TableCell>
                <TableCell align="center">{row.Priority}</TableCell>
                <TableCell align="center">{row.Timing}</TableCell>
                <TableCell align="center">{row.Location}</TableCell>
                <TableCell align="center">{row.Allocation}</TableCell>
                <TableCell align="center">{row.Update}</TableCell>
                <TableCell align="center">{row.Comment}</TableCell>
                 
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
