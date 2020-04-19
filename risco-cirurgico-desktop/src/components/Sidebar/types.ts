export interface SideMenuProps {
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
