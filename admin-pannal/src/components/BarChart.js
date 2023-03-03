import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export default function BarChart() {
  const data = {
    labels: ["july", "aug", "sept", "oct", "nov", "dec"],
    datasets: [
      {
        label: "Dataset 1",
        data: ["25", "20", "30", "22", "18", "29"],
        backgroundColor: "#FB6340",
        barThickness: 30,
        borderWidth: 2,
        borderRadius: 20, // This will round the corners
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
    legend: {
      display: false,
    },
    animation: {
      duration: 3000,
      easing: "easeOutQuint",
    },
  };

  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "6px",
      }}
    >
      <Box
        sx={{
          padding: "21px 0px 0px 47px",
        }}
      >
        <Typography variant="body2" color={"#8898AA"}>
          PERFORMANCE
        </Typography>
        <Typography variant="h6" color={"#32325D"}>
          {" "}
          Total orders
        </Typography>
      </Box>
      <Bar height={312} width={300} options={options} data={data} />
    </div>
  );
}
