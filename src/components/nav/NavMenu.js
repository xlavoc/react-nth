import { useTranslation } from "react-i18next";
import { MenuWrapper, MenuItem } from "./NavMenu.styles";

const NavMenu = () => {

  const { t } = useTranslation('ui');

  return (
    <MenuWrapper>
      {t('navMenu', { returnObjects: true }).map((item, i) => (
        <MenuItem key={i} exact to={i === 0 ? "/" : `/${item.toLowerCase()}`}>
          {item}
        </MenuItem>
      ))}
    </MenuWrapper>
	);
}
 
export default NavMenu;