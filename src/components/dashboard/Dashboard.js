import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import axiosInstance from "../../config/axios";
import CreateClientAccount from "./CreateClientAccount";

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
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Dashboard = () => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const [openAddAccountDialog, setOpenAddAccountDialog] = useState(false);

  // HARDCODED - To fetch from DB
  const clientAccountManagers = ["Robert Baratheon", "Ned Stark", "Daenerys Targaryen"];
  const clientAccountStatuses = ["Active", "Archived", "Planned"];

  const handleClickAddAccount = () => {
    setOpenAddAccountDialog(true);
  }

  const handleCloseAddAccountDialog = () => {
    setOpenAddAccountDialog(false);
  }

  const handleSubmitAddAccountDialog = async(clientAccountObject) => {
    console.log("Client Account Object", clientAccountObject);

    try {
      const response = await axiosInstance({
        method: "post",
        url: "/v1/client-accounts",
        data: clientAccountObject,
      });

    } catch (error) {
      toast.error("Reset Pin Failed", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    handleCloseAddAccountDialog();
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [accountData, setAccountData] = useState({})
  console.log('acc', accountData.allClientAccounts)

  const navigate = useNavigate();

  const btnStyle = {
    backgroundColor: "#5CA7C7",
    margin: "20px",
    "&:hover": {
      backgroundColor: "none",
    },
  };
  const viewEditBtnStyle = {
    backgroundColor: "#5CA7C7",
    margin: "5px"
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance({
        method: "get",
        url: `/v1/client-accounts`,
      });
      setAccountData(response.data);
      console.log('res', response.data)
    };

    fetchData().catch((error) => {
      toast.error("Something went wrong!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  }, []);

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
          <Button
            variant="contained"
            style={btnStyle}
            onClick={handleClickAddAccount}>
            Add Account
          </Button>
          <CreateClientAccount
            open={openAddAccountDialog}
            onClose={handleCloseAddAccountDialog}
            onSubmit={handleSubmitAddAccountDialog}
            clientAccountManagers={clientAccountManagers}
            clientAccountStatuses={clientAccountStatuses}
          />
        </Box>
      </div>
      <div className="dashboard-container">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead >
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", fontSize: "large" }} >No</TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "large" }} align="center">Account</TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "large" }} align="center">Status</TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "large" }} align="center">Assigned to</TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "large" }} align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accountData?.allClientAccounts?.map((account) => (
                <TableRow
                  key={1}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {1}
                  </TableCell>
                  <TableCell align="center">{account?.name}</TableCell>
                  <TableCell align="center">{account?.status}</TableCell>
                  <TableCell align="center">{account?.account_manager_name}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      style={viewEditBtnStyle}
                      onClick={() => navigate('/account-manager')}
                    >
                      {'View Opening'}
                    </Button>
                    <Button
                      variant="contained"
                      style={viewEditBtnStyle}
                    >
                      {'Edit'}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}

              {/* {rows.map((row) => (
                <TableRow
                  key={row.no}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {1}
                  </TableCell>
                  <TableCell align="center">{row.account}</TableCell>
                  <TableCell align="center">{row.status}</TableCell>
                  <TableCell align="center">{row.assignedto}</TableCell>
                  <TableCell align="center">
                    <Button 
                      variant="contained"
                      style={viewEditBtnStyle}
                      onClick = {() => navigate('/account-manager')}
                    >
                      {'View Opening'}
                    </Button>
                    <Button 
                      variant="contained"
                      style={viewEditBtnStyle}
                    >
                      {'Edit'}
                    </Button> 
                     </TableCell>
                </TableRow>
              ))} */}


            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={accountData?.allClientAccounts?.length}
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
