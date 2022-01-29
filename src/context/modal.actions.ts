export enum ActionType {
  ShowModal,
  HideModal,
}

export interface ShowModal {
  type: ActionType.ShowModal;
  payload?: number;
}

export interface HideModal {
  type: ActionType.HideModal;
}

export type ModalActions = ShowModal | HideModal;

export const showModal = (id: number) => ({
  type: ActionType.ShowModal,
  payload: id,
});

export const hideModal = () => ({
  type: ActionType.HideModal,
});
