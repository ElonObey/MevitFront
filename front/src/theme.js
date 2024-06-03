import { createTheme } from "@mui/material";

const BaseTheme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: '#fff',
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

export const theme = createTheme(BaseTheme, {
  // Custom colors created with augmentColor go here
  palette: {
    white: BaseTheme.palette.augmentColor({
      color: {
        main: '#fff',
      },
      name: 'white',
    }),
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
