import React from "react";
import {Button, TableRow, } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BodyCell from "./BodyCell";
const BodyRow = ({value }) => {

    const navigate = useNavigate();

    const viewEditBtnStyle = {
        backgroundColor: "#5CA7C7",
        margin: "5px",
      };

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <BodyCell component="th" scope="row"/>
      <BodyCell align="center" value= {value?.name}/>
      <BodyCell align="center" value={value?.status}/>
      <BodyCell align="center" value={value?.account_manager_name}/>
      <BodyCell align="center">
        <Button
          variant="contained"
          style={viewEditBtnStyle}
          onClick={() => navigate("/account-manager")}

        >
          {"Open Position"}
        </Button>
        <Button variant="contained" style={viewEditBtnStyle}>
          {"Edit"}
        </Button>
      </BodyCell>
    </TableRow>
  );
};

export default BodyRow;
