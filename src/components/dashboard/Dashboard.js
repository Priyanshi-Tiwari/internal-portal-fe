import React, { useState, useEffect } from "react";
import axiosInstance from "../../config/axios";
import CreateClientAccount from "./CreateClientAccount";

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
import "./Dashboard.css";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Dashboard = () => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const [openAddAccountDialog, setOpenAddAccountDialog] = useState(false);

  // HARDCODED - To fetch from DB
  const clientAccountManagers = [
    "Robert Baratheon",
    "Ned Stark",
    "Daenerys Targaryen",
  ];
  const clientAccountStatuses = ["Active", "Archived", "Planned"];

  const handleClickAddAccount = () => {
    setOpenAddAccountDialog(true);
  };

  const handleCloseAddAccountDialog = () => {
    setOpenAddAccountDialog(false);
  };

  const handleSubmitAddAccountDialog = async (clientAccountObject) => {
    console.log("Client Account Object", clientAccountObject);

    try {
      const response = await axiosInstance({
        method: "post",
        url: "/v1/client-accounts",
        data: clientAccountObject,
      });

      console.log(response);

    } catch (error) {
      toast.error("Error occurred while creating new client account", {
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
    fetchData();
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [accountsData, setAccountsData] = useState([]);
  console.log("acc", accountsData);

  const navigate = useNavigate();

  const btnStyle = {
    backgroundColor: "#5CA7C7",
    marginRight: "25px",
    "&:hover": {
      backgroundColor: "none",
    },
  };
  const viewEditBtnStyle = {
    backgroundColor: "#5CA7C7",
    margin: "5px",
  };

  const fetchData = async () => {
    try {
      const response = await axiosInstance({
        method: "get",
        url: `/v1/client-accounts`,
      });
      setAccountsData(response.data);
      console.log("res", response.data);
    } catch (error) {
      toast.error("Error fetching client accounts!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [accountsData.length]);

  return (
    <>
      <Navbar />
      <div className="main-container">
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
                  <TableCell sx={{ fontWeight: "bold", fontSize: "large" }} >#</TableCell>
                  <TableCell sx={{ fontWeight: "bold", fontSize: "large" }} align="center">Account</TableCell>
                  <TableCell sx={{ fontWeight: "bold", fontSize: "large" }} align="center">Status</TableCell>
                  <TableCell sx={{ fontWeight: "bold", fontSize: "large" }} align="center">Assigned To</TableCell>
                  <TableCell sx={{ fontWeight: "bold", fontSize: "large" }} align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {accountsData?.map((account, index) => (
                  <TableRow
                    key={index+1}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index+1}
                    </TableCell>
                    <TableCell align="center">{account?.name}</TableCell>
                    <TableCell align="center">{account?.status}</TableCell>
                    <TableCell align="center">
                      {account?.account_manager_name}
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        style={viewEditBtnStyle}
                        onClick={() => navigate("/account-manager")}
                      >
                        {"View Opening"}
                      </Button>
                      <Button variant="contained" style={viewEditBtnStyle}>
                        {"Edit"}
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
            count={accountsData?.allClientAccounts?.length}
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
export default Dashboard;
