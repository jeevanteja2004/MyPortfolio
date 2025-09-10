// MuiBorderLinearProgress.js
import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./ProgressWithLabel.css"

const BorderLinearProgress = styled(LinearProgress)(({ theme, color }) => ({
  height: 14,
  borderRadius: 12,
  backgroundColor: "rgba(255,255,255,0.06)",
  "& .MuiLinearProgress-bar": {
    borderRadius: 12,
    backgroundColor: color || "#06b6d4",
  },
  border: "2px solid rgba(255,255,255,0.12)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)",
}));

export default function ProgressWithLabel({ value = 80, color }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Box sx={{ width: "320px", mr: 1 }}>
        <BorderLinearProgress variant="determinate" value={value} color={color} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" className="typo">{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  );
}
