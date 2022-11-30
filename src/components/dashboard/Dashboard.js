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
import "./Dashboard.css";
import { Box } from "@mui/system";

function createData(
  no,
  account,
  status,
  assignedto,
) {
  return { no, account, status, assignedto };
}

const rows = [
  createData(1, "AutoDesk", "Active", "John Doe"),
  createData(2, "AssetPanda", "Active", "John Doe"),
  createData(3, "TechM", "Active", "John Doe"),
  createData(4, "GrandRand", "Active", "John Doe"),
  createData(5, "RiskCast", "Active", "John Doe"),
];

const Dashboard = () => {
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
    backgroundColor: "#5CA7C7",
    margin: "20px",
    "&:hover": {
      backgroundColor: "none",
    },
  };
  return (
    <>
      <Navbar />
      <div>
        <p>Home/ Client Account Dashboard</p>
      </div>
      <div className="heading-container">
        <h1>Client Account Dashboard</h1>
        <hr className="line" />
        <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" style={btnStyle}>
            Add Account
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
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Assigned to</TableCell>
                <TableCell align="center">Action</TableCell>
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
                  <TableCell align="center">{row.status}</TableCell>
                  <TableCell align="center">{row.assignedto}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "#5CA7C7", m: "5px" }}
                    >
                      {'View Opening'}
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "#5CA7C7" }}
                    >
                      {'Edit'}
                    </Button>
                  </TableCell>
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
export default Dashboard;
