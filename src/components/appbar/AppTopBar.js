import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { ReactComponent as LogoSvg } from '../../assets/svg/logo-nethansa-on-black.svg';

const AppTopBar = () => {
  return ( 
    <AppBar position="sticky" sx={{ backgroundColor:  'common.black', boxShadow: 0, height: '3.375rem', flexDirection: 'row', alignItems: 'center' }}>
      <Box sx={{ px: 3, height: 32 }}>
        <LogoSvg />
      </Box>
    </AppBar>
   );
}
 
export default AppTopBar;