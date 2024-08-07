type MenuContextType = {
  isOpen: boolean;
  toggleMenu: () => void;
};

type FormContextType = {
  value: string;
  setChart: (chart: string) => void;
};

export type { MenuContextType, FormContextType };
