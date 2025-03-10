/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import PropTypes from "prop-types";
import { Footer } from "../common/navbar";

export default function AuthLayout({ title, children }) {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className='min-h-full'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center gap-2'>
              <div className='flex-shrink-0'></div>
            </div>
          </div>
        </div>

        <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-xl font-display font-bold text-gray-900'>
            {title}
          </h1>
        </div>
        <main>
          <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-6'>
            {/* Replace with your content */}
            <div className='px-4 py-6 sm:px-0'>
              <div className=' rounded-lg min-h-screen p-4'>{children}</div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

AuthLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

AuthLayout.defaultProps = {
  title: "",
};
