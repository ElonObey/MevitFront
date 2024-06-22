import { Box } from "@mui/material";
import React from "react";

export default function Wrapper({ children }) {
  return (
    <Box mx={10} my={3}>
      {children}
    </Box>
  );
}
