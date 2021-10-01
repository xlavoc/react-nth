import NavMenu from "./NavMenu";
import Logo from "./Logo";
import UserArea from "./UserArea";
import { NavWrapper } from "./Nav.styles";

const Nav = () => {

  return ( 
    <NavWrapper>
      <Logo />
      <NavMenu />
      <UserArea />
    </NavWrapper>
  );
}

export default Nav;