export interface TabsType {
  id: number;
  name: string;
}

export interface TabsProps {
  data: TabsType[];
  selectedTab: number;
  setSelectedTab: (id: number) => void;
}
