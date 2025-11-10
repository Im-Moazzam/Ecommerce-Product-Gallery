import React from 'react'

function Footer() {
  return (
    <footer className='p-4 bg-bg text-textMain flex flex-col items-center justify-center shadow-inner mt-10'>
      <p className='text-sm'>
        &copy; {new Date().getFullYear()} Product Gallery. All rights reserved.
      </p>
      <p className='text-xs text-textMuted mt-1'>
        Built with React, JavaScript, and modern web technologies by Moazzam Aleem.
      </p>
    </footer>
  );
}

export default Footer