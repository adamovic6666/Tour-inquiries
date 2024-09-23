export interface Navigation {
  name: string;
  url: string;
}

export interface NavLinkProps {
  url: string;
  children: React.ReactNode;
}

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export interface Guide {
  id: number;
  firstName: string;
  lastName: string;
}
