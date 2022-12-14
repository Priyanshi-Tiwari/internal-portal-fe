import React from "react";
import  {TableRow} from "@mui/material";
import HeaderCell from "./HeaderCell";

const HeaderRow = ({value }) => {
  return (
    <TableRow>
      {value.map((name, index) => (
                    <HeaderCell value={name} key={index + name} />
                  ))}
    </TableRow>
  );
};

export default HeaderRow;
