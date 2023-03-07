import { Box } from "@mui/material";
import React from "react";
import TableData from "../components/TableData";

export default function Tables() {
  return (
    <div className="postion-set">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TableData />
      </Box>
    </div>
  );
}
