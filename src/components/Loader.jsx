import React from 'react'
import { MoonLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-50">
      <MoonLoader color="#1976d2" size={100} />
      <p className='text-slate-800 text-center pt-2'>Please waiting.....</p>
    </div>
  );
}

export default Loader