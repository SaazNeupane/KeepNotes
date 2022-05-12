import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Create } from "./pages/Create";
import { Notes } from "./pages/Notes";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { purple, orange } from "@mui/material/colors";
import { Layout } from "./components/Layout";

const theme = createTheme({
  palette: {
    primary: purple,
    secondary: orange,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
