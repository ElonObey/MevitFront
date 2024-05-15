import { colors, createTheme } from "@mui/material";
import { hover } from "@testing-library/user-event/dist/hover";

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

