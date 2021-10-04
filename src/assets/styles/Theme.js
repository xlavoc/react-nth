import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    mainDark: '#282828',
    mainLight: '#FFF',
    mainActive: '#FAAD1B',
    mainAccent: '#404040',
    mainGray: '#8B8B8D',
    watermelon: '#FF515C',
    blueMain: '#4543A6',
    blueHover: '#373584',
    blueInactive: '#8383BD',
    grayLight: '#CFD0DC',
    grayHover: '#B0B1BB',
    lineLight: '#DDE8F1',
    deepGreen: '#00D791',
    deepBlue: '#48AFE3',
    bgTitle: '#F5F5FA',
    bgGroup: '#E3E5F1',
    bgSelect: '#FFF1D6',
    bgDone: '#DEFBF3',
    bgError: '#FFEEED',
    bgInfo: '#E4F3FB'
  },
  fontSize: {
    xxl: '1.75rem', //'28px',
    xl: '1rem', //'16px',
    l: '.875rem', // '14px',
    m: '.8125rem', // '13px',
    s: '.75rem', // '12px',
  }
};

const Theme = ({children}) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default Theme;