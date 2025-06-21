export interface NavItem {
  id: string;
  title: string;
  route: string;
  children?: NavItem[];
}
