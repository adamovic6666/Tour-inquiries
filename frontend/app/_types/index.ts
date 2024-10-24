import { Control, FieldValues, UseFormRegister } from "react-hook-form";

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
  onClick?: () => void;
  children: ReactChildNode;
  isPending?: boolean;
}

export interface GuideFormFields {
  firstName: string;
  lastName: string;
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

export enum ToastType {
  ERROR = "error",
  SUCCESS = "success",
}

export interface ToastProps {
  message: string;
  type: ToastType.ERROR | ToastType.SUCCESS;
}

export enum ContentType {
  GUIDE = "Vodič",
}

export interface InputProps {
  placeholder: string;
  errorMessage?: string | null;
  name: string;
  defaultValue?: string;
  errors: FieldValues;
}

export interface ActionState {
  success?: boolean;
  toast: ToastProps | null;
  errors: string[] | null;
}

export interface RequestBody {
  [key: string]: any;
}
