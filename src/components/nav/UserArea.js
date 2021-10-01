import UserPanel from "./UserPanel";
import { UserAreaWrapper, IconWrapper } from "./UserArea.styles";
import { ReactComponent as Bell } from '../../assets/svg/icon-bell.svg';
import { ReactComponent as HelpIcon } from '../../assets/svg/icon-help.svg';
import { useTranslation } from "react-i18next";

const UserArea = () => {

  const { t } = useTranslation('ui');

  return ( 
    <UserAreaWrapper>
      <IconWrapper href="#" title={t('navIconBellTitle')}>
        <Bell />
      </IconWrapper>

      <UserPanel />

      <IconWrapper href="#" title={t('helpIconTitle')}>
        <HelpIcon />
      </IconWrapper>
    </UserAreaWrapper>
  );
}
 
export default UserArea;