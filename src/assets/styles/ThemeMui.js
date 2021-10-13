//import { green } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const themeMui = createTheme({
  palette: {
    primary: {
      main: '#ff0000',
    }
  },
  typography: {
    fontFamily: ['Inter', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'].join(','),
    h1: { fontSize: 28, fontWeight: 700 },
    h2: { fontSize: 16, fontWeight: 700 },
    h3: { fontSize: 14, fontWeight: 500 },
    h4: { fontSize: 13, fontWeight: 700, letterSpacing: 0.5 },
    h5: { fontSize: 13, fontWeight: 500, lineHeight: 24 },
    
  }
});

const ThemeMui = ({children}) => (
  <ThemeProvider theme={themeMui}>
    {children}
  </ThemeProvider>
);

export default ThemeMui;