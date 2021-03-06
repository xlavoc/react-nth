import UserDropdownPanelItem from "./UserDropdownPanelItem";
import LangButton from "./LangButton";
import { UserPanelWrapper, UserWrapper, Avatar, UserName, UserDropdownPanel, LangWrapper, Line } from "./UserPanel.styles";
import { Hr } from "../atoms/Hr.styles";
import { ReactComponent as UserIcon } from '../../assets/svg/icon-user.svg';
import { ReactComponent as UserArrow } from '../../assets/svg/icon-chevron-down.svg';
import { useTranslation } from "react-i18next";

const UserPanel = () => {

  const { t } = useTranslation('ui');

  return ( 
    <UserPanelWrapper>
      <UserWrapper>
        <Avatar>
          <UserIcon />
        </Avatar>
        <UserName>
          Robert
        </UserName>
        <UserArrow />
      </UserWrapper>
      <UserDropdownPanel>
        <UserDropdownPanelItem linkName={t('userPanelYourAccountLink')} />
        <UserDropdownPanelItem linkName={t('userPanelSettingsLink')} />
        <Hr />
        <LangWrapper>
          <LangButton lang={t('langEn')} title={t('langEnTitle')} />
          <Line>I&nbsp;&nbsp;</Line>
          <LangButton lang={t('langPl')} title={t('langPlTitle')} />
        </LangWrapper>
        <UserDropdownPanelItem linkName={t('userResetUi')} />
        <UserDropdownPanelItem linkName={t('userPanelLogout')} />
      </UserDropdownPanel>
    </UserPanelWrapper>
   );
}
 
export default UserPanel;