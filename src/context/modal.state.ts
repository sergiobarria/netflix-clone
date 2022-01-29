export interface ModalState {
  isModalOpen: boolean;
  id?: number;
}

export const initialModalState: ModalState = {
  isModalOpen: false,
  id: undefined,
};
