import React from 'react';

import { ModalContext } from '@/context/modal.context';

export default function useModal() {
  const context = React.useContext(ModalContext);

  return context;
}
