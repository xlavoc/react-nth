import { LangButtonStyle } from "./LangButton.styles";
import { useTranslation } from "react-i18next";

const LangButton = (props) => {

  const { i18n } = useTranslation('ui');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
  };

  const isCurrentLang = () => props.lang.toLowerCase() === i18n.language;

  return ( 
    <LangButtonStyle
      type="button"
      title={props.title}
      disabled={isCurrentLang()}
      onClick={() => changeLanguage(props.lang.toLowerCase())}>
        {props.lang}
    </LangButtonStyle>
  );
}
 
export default LangButton;