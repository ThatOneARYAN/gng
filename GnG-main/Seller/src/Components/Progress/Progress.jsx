import React from 'react';

function Progress({ value, type }) {
  const progressClass = type === 'success'
    ? 'bg-green-600'
    : type === 'error'
    ? 'bg-pink-600'
    : type === 'warning'
    ? 'bg-yellow-400'
    : 'bg-blue-500';

  return (
    <div className='w-full sm:w-[150px] md:w-[200px] !text-left h-auto bg-[#f1f1f1] overflow-hidden rounded-md'>
      <span
        className={`flex items-center h-[8px] ${progressClass}`}
        style={{ width: `${value}%` }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
      ></span>
    </div>
  );
}

export default Progress;
