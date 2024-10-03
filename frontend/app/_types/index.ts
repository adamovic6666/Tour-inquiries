export interface Navigation {
  name: string;
  url: string;
}

export interface GuidesListProps {
  guides: Guide[];
}

export interface ModalDialogProps {
  onOk: () => void;
  children: React.ReactNode;
  onCancel: () => void;
}

export interface GuideDeletionProps {
  guideToDelete: Guide | null;
  showModal: boolean;
  onCancel: () => void;
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
