import React from "react";
import { Box } from "@mui/material";
import ChartDemo from "../components/ChartDemo";
import BarChart from "../components/BarChart";

export default function Dashboard() {
  return (
    <div className="postion-set">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "491px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "1052px",
              height: "491px",
              margin: "10px",
            }}
          >
            <ChartDemo />
          </Box>
          <Box
            sx={{
              width: "511px",
              height: "491px",
              margin: "10px",
            }}
          >
            <BarChart />
          </Box>
        </div>
      </Box>
    </div>
  );
}
