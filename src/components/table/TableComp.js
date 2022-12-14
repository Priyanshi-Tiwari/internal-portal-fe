import React from "react";
import HeaderRow from "./HeaderRow";
import { TableBody, TableHead } from "@mui/material";
import BodyRow from "./BodyRow";

const TableComp = ({ value }) => {
  return (
    <>
      <TableHead>
        <HeaderRow value={value.tableColumns} />
      </TableHead>
      <TableBody>
        {value.accountsData?.map((account, index) => (
          <BodyRow value={account} key={index + 1} />
        ))}
      </TableBody>
    </>
  );
};

export default TableComp;
