import React from 'react';
import { PropsWithChildren } from 'react';

import clsx from 'clsx';

import Modal from 'react-modal';

import useModal from '@/hooks/useModal';
import { hideModal, showModal } from '@/context/modal.actions';

interface Props {
  children: React.ReactNode;
}

export default function ModalComponent({ children }: Props) {
  const { state, dispatch } = useModal();

  function handleCloseModal() {
    dispatch(hideModal());
  }

  return (
    <Modal
      isOpen={state.isModalOpen}
      contentLabel='Video Details'
      onRequestClose={handleCloseModal}
      className='fixed inset-0 bg-gray-dark rounded-xl w-[850px] mx-auto mt-20 overflow-y-scroll'
      overlayClassName='bg-black/70 fixed inset-0'
    >
      <button
        className={clsx(
          'absolute flex items-center justify-center top-4 right-4 text-3xl',
          'rounded-full bg-white text-red-700 w-8 h-8 z-50'
        )}
        onClick={handleCloseModal}
      >
        &times;
      </button>
      {children}
    </Modal>
  );
}
