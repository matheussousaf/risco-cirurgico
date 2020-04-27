import { RouteComponentProps } from "react-router-dom";

export interface SideMenuProps extends RouteComponentProps<any> {
  active: number;
  setActive: Function;
}

export interface SidebarItemProps {
  id: number;
  active: number;
  clicked: boolean;
  onClick: Function;
  text: string;
}
