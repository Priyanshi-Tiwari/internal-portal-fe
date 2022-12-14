import React from "react";
import { TableCell } from "@mui/material";

const Cell = ({value}) => {
 return (
    <TableCell sx={{ fontWeight: "bold", fontSize: "large" }} align="center">{value}</TableCell>

 )
}

export default Cell ;