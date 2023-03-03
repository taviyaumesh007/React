import React from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  CategoryScale,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Box } from "@mui/system";
import { Typography, Button, Stack } from "@mui/material";
ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Title
);

export default function ChartDemo() {
  const data = {
    labels: ["may", "jun", "july", "aug", "sept", "oct", "nov", "dec"],
    backgroundColor: "#F5DEB3",
    datasets: [
      {
        label: "mobile app",
        data: ["0", "20", "10", "30", "18", "40", "21", "60"],
        tension: 0.4,
        pointRadius: 1,
        borderWidth: 5,
        // fill: true,
        backgroundColor: "yellow",
        borderColor: "#5E72E4",
        pointWidth: "5000px",
      },
    ],
  };

  const options = {
    responsive: true,

    layout: {
      padding: {
        top: 90,
        bottom: 0,
        right: 50,
        left: 50,
      },
    },
    animation: {
      duration: 3000,
      easing: "easeOutQuint",
    },
  };

  return (
    <div
      style={{
        background: " linear-gradient(90deg, #172B4D 0%, #1A174D 100%)",
        borderRadius: "6px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "22px 44px 0px 47px",
        }}
      >
        <Box>
          <Typography variant="body2" color="#ffffff">
            OVERVIEW
          </Typography>
          <Typography variant="h4" color="#ffffff">
            Sales value
          </Typography>
        </Box>
        <Box>
          <Stack spacing={2} direction="row">
            <Button variant="contained">Month</Button>
            <Button
              variant="outlined"
              sx={{
                background: "#ffffff",
              }}
            >
              Week
            </Button>
          </Stack>
        </Box>
      </Box>
      <Line data={data} options={options} />
    </div>
  );
}
