import React from 'react';

import clsx from 'clsx';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';

interface IProps {
  faq: {
    id: number;
    question: string;
    answer: string;
  };
  openQuestion: number | undefined;
  setOpenQuestion: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export default function Faqs({ faq, openQuestion, setOpenQuestion }: IProps) {
  return (
    <div className='mb-2 max-w-3xl mx-auto'>
      <div
        className={clsx(
          'bg-gray-primary flex items-center justify-between',
          'p-4 text-2xl mb-[1px]'
        )}
      >
        <h3>{faq.question}</h3>
        <button
          onClick={() => {
            if (openQuestion === faq.id) {
              setOpenQuestion(undefined);
            } else {
              setOpenQuestion(faq.id);
            }
          }}
        >
          {openQuestion === faq.id ? (
            <AiOutlineClose className='w-10 h-10' />
          ) : (
            <AiOutlinePlus className='w-10 h-10' />
          )}
        </button>
      </div>
      {openQuestion === faq.id && (
        <div className='bg-gray-primary p-4'>
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
}
