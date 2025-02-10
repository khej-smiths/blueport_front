export interface DialogProps {
  onClose?: () => void;
  onConfirm?: (event: any) => void;
  closeText?: string;
  confirmText?: string;
  dialogId?: string;
  [property: string]: any;
}

export interface Dialog {
  open: boolean;
  props?: DialogProps;
}

export interface DialogStore {
  dialog?: Dialog;
  setDialog: (open: boolean, props?: DialogProps) => void;
}
