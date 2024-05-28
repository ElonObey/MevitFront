import { createTheme } from "@mui/material";

export const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            backgroundColor: "black",
            borderRadius: "6px",
            color: "white",
            "&:hover": {
              borderRadius: "6px",
              backgroundColor: "#474747",
            },
          },
        },
        {
          props: { variant: "text" },
          style: {
            color: "black",
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            color: "black",
          },
        },
      ],
    },
  },
});

// styleOverrides: {
//   root: {
//     backgroundColor: "black",
//     borderRadius: '6px',
//     color: 'white',
//     '&:hover':{
//       borderRadius: '6px',
//       backgroundColor: "#474747",
//     }
//   },
// },
