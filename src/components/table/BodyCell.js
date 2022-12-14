import React, {  } from "react";
import {TableCell } from "@mui/material";

const Cell = ({value, children}) => {
 return (
  
      <TableCell align="center">{value ? value : children} </TableCell>
 )
}

export default Cell ;