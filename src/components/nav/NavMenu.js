import { useTranslation } from "react-i18next";
import { MenuWrapper, MenuItem } from "./NavMenu.styles";

const NavMenu = () => {

  const { t } = useTranslation('ui');
  const navLinks = ['/', '/products', '/offers', '/orders'];

  return (
    <MenuWrapper>
      {t('navMenu', { returnObjects: true }).map((item, i) => (
        // <MenuItem key={i} exact to={i === 0 ? "/" : `/${item.to/LowerCase()}`}>
        <MenuItem key={i} exact to={navLinks[i]}>
          {item}
        </MenuItem>
      ))}
    </MenuWrapper>
	);
}
 
export default NavMenu;