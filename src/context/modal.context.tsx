import React, { useReducer } from 'react';
import { ModalActions } from './modal.actions';

import { modalReducer } from './modal.reducer';
import { initialModalState, ModalState } from './modal.state';

export const ModalContext = React.createContext<{
  state: ModalState;
  dispatch: React.Dispatch<ModalActions>;
}>({
  state: initialModalState,
  dispatch: () => undefined,
});

interface Props {
  children: React.ReactNode;
}

export const ModalProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(modalReducer, initialModalState);

  const value = { state, dispatch };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
