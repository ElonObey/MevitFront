import { createTheme } from "@mui/material";


export const baseTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "black",
          borderRadius: '6px',
          color: 'white',
          '&:hover':{
            borderRadius: '6px',
            backgroundColor: "#474747",
          }
        },
      },
    },
  },
});

