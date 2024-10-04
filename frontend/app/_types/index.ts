export type ReactChildNode = React.ReactNode;

export interface Navigation {
  name: string;
  url: string;
}

export interface GuidesListProps {
  guides: Guide[];
}

export interface ModalDialogProps {
  onOk: () => void;
  children: ReactChildNode;
  onCancel: () => void;
  showModal: boolean;
}

export interface GuideDeletionProps {
  showModal: boolean;
  onCancel: () => void;
  guideToDeleteId: string | null;
}

export interface NavLinkProps {
  url: string;
  children: ReactChildNode;
}

export interface ButtonProps {
  onClick: () => void;
  children: ReactChildNode;
}

export interface Guide {
  firstName: string;
  lastName: string;
  id: string;
  documentId: string;
  onClick: (id: string) => void;
}

export type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
  guideToDeleteId?: number;
};

export enum QUERY_PARAMS {
  GUIDE_TO_DELETE_ID = "guideToDeleteId",
  SHOW_MODAL = "showModal",
}
