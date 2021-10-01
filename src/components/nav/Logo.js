import { ReactComponent as LogoSvg } from '../../assets/svg/logo-nethansa-on-black.svg';
import { LogoWrapper } from './Logo.styles';

const Logo = () => {
	return ( 
		<LogoWrapper title="Nethansa" alt="Nethansa logo">
			<LogoSvg />
		</LogoWrapper>
  );
}
 
export default Logo;