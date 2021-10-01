import { ItemLink } from "./UserDropdownPanelItem.styles";

const UserDropdownPanelItem = (props) => {
  return ( 
    <ItemLink href="#">{props.linkName}</ItemLink>
   );
}
 
export default UserDropdownPanelItem;