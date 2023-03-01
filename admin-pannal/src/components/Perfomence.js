import { Box, Typography } from "@mui/material";
import React from "react";

export default function Perfomence({
  title,
  count,
  chart,
  arrow,
  percentage,
  month,
}) {
  return (
    <div>
      <Box>
        <Box
          sx={{
            height: "123px",
            width: "377px",
            left: "0px",
            top: "0px",
            borderRadius: "6px",
            background: "#FFFFFF",
            padding: "10px ",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "19px",
                  color: "#8898AA",
                }}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "27px",
                  color: "#32325D",
                  paddingLeft: "20px",
                }}
              >
                {count}
              </Typography>
            </Box>
            <Box>
              <img src={chart} alt="img" />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              paddingTop: "10px",
              paddingLeft: "20px",
            }}
          >
            <div sx={{ height: "10px" }}>
              <img src={arrow} alt="img" />
            </div>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "19px",
                color: "#2DCE89",
              }}
            >
              {percentage}
            </Typography>
            <Typography
              sx={{
                fontWeight: 300,
                fontSize: "14px",
                lineHeight: "19px",
                color: "#8898AA",
                paddingLeft: "5px",
              }}
            >
              {month}
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
