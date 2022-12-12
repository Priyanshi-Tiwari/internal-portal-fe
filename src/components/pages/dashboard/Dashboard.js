import React, { useState, useEffect } from "react";
import axiosInstance from "../../../config/axios";
import CreateClientAccount from "./CreateClientAccount";
import {
  TableContainer,
  Table,
  TablePagination,
  Paper,
  Button,
} from "@mui/material";
import Navbar from "../../navbar/Navbar";
import "./Dashboard.css";
import { Box } from "@mui/system";
import { toast } from "react-toastify";
import TableComp from "../../table/TableComp";

const Dashboard = () => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const tableColumns = ["#", "Account", "Status", "Assigned To", "Action"];

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
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [accountsData, setAccountsData] = useState([]);
  console.log("acc", accountsData);


  const btnStyle = {
    float: "right",
    backgroundColor: "#5CA7C7",
    marginRight: "25px",
    "&:hover": {
      backgroundColor: "none",
    },
  };
  
  const headingStyle ={
    marginTop: "0px",
  }

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
        <Box display="flex" justifyContent="flex-end">
            
            <CreateClientAccount
              open={openAddAccountDialog}
              onClose={handleCloseAddAccountDialog}
              onSubmit={handleSubmitAddAccountDialog}
              clientAccountManagers={clientAccountManagers}
              clientAccountStatuses={clientAccountStatuses}
            />
          </Box>
          <Button
              variant="contained"
              style={btnStyle}
              onClick={handleClickAddAccount}
            >
              Add Account
            </Button>
          <div>
        <h1 style={headingStyle}>Client Account Dashboard</h1>
          <hr/> 
        </div>
        <div className="dashboard-container">
          <TableContainer sx={{marginTop: '50px'}} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableComp value={{tableColumns, accountsData}}/>
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
