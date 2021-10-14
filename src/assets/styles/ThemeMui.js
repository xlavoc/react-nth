//import { green } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const themeMui = createTheme({
  palette: {
    primary: {
      light: '#8383BD',
      main: '#4543A6',
      dark: '#373584'
    },
    secondary: {
      main: '#FAAD1B'
    },
    error: {
      main: '#FF515C'
    },
    info: {
      main: '#48AFE3'
    },
    success: {
      main: '#00D791'
    },
    common: {
      black: '#282828'
    }
  },
  typography: {
    fontFamily: ['Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'].join(','),
    h1: { fontSize: 28, fontWeight: 700 },
    h2: { fontSize: 16, fontWeight: 700 },
    h3: { fontSize: 14, fontWeight: 500 },
    h4: { fontSize: 13, fontWeight: 700, letterSpacing: 0.5 },
    h5: { fontSize: 13, fontWeight: 500, lineHeight: '24px' },
    body1: { fontSize: 13, fontWeight: 700 },
    body2: { fontSize: 13, fontWeight: 500, lineHeight: '18px' },
    button: { fontSize: 12, fontWeight: 700, letterSpacing: 0.22 },
  }
});

const ThemeMui = ({children}) => (
  <ThemeProvider theme={themeMui}>
    {children}
  </ThemeProvider>
);

export default ThemeMui;