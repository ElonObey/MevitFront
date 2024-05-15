import { ThemeProvider } from "@mui/material";
import "./App.css";
import { AppRoutes } from "./routes/AppRoutes";
import { baseTheme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
