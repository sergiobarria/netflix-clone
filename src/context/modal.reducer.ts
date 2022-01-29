import { Reducer } from 'react';

import { ActionType, ModalActions } from './modal.actions';
import { initialModalState, ModalState } from './modal.state';

export const modalReducer: Reducer<ModalState, ModalActions> = (
  state = initialModalState,
  action
) => {
  switch (action.type) {
    case ActionType.ShowModal:
      return { ...state, isModalOpen: true, id: action.payload };
    case ActionType.HideModal:
      return { ...state, isModalOpen: false, id: undefined };
    default:
      return state;
  }
};
