import React from 'react';

import clsx from 'clsx';

import Navbar from '@/components/Navbar';
import HomeForm from '@/components/forms/HomeForm';
import Features from '@/components/Features';

import features from '@/fixtures/features.json';
import faqs from '@/fixtures/faqs.json';
import Faqs from '@/components/Faqs';

export default function HomePage() {
  const [openQuestion, setOpenQuestion] = React.useState<number | undefined>();

  return (
    <div className='min-h-screen bg-black'>
      {/* Navbar */}
      <Navbar showBtn />

      {/* Content */}
      <div
        className='h-[40rem] md:h-[50rem]'
        style={{
          background: 'url(/static/signin-bg.jpg)',
        }}
      >
        <div
          className={clsx(
            'text-center h-full flex flex-col items-center justify-center',
            'bg-black/60 space-y-4'
          )}
        >
          <article className='md:w-2/3'>
            <h1 className='font-normal mb-4 max-w-[640px] mx-auto'>
              Unlimited movies, TV shows, and more.
            </h1>
            <p className='text-2xl md:text-3xl'>
              Watch anywhere. Cancel anytime.
            </p>
          </article>

          {/* Form */}
          <HomeForm />
        </div>

        {/* Features */}
        {features.map((feature) => (
          <Features key={feature.id} feature={feature} />
        ))}

        {/* FAQS */}
        <section className='px-12 py-20 bg-black'>
          <h2 className='mb-6 text-3xl font-normal text-center md:text-4xl'>
            Frequently Asked Questions
          </h2>
          {faqs.map((faq) => (
            <Faqs
              key={faq.id}
              faq={faq}
              openQuestion={openQuestion}
              setOpenQuestion={setOpenQuestion}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
