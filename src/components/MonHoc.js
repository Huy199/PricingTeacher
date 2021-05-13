import React from 'react';
import './MonHoc.css';
export default function MonHoc({
  name,
  teacher,
  backgroundColor,
  shape,
  contentHeader,
}) {
  return (
    <div className='subject'>
      <div className='subject-retangle' style={{ backgroundColor }}>
        <div className='content-header'>
          <div>{contentHeader}</div>
          {shape}
        </div>
        <div className='content-body'>
          <div className='subject-name'>{name}</div>
          <div className='teacher'>{teacher}</div>
          <div className='icon'>
            <div
              className='icon-bg'
              style={{ backgroundColor }}
            ></div>
            <svg
              width='40'
              height='40'
              viewBox='0 0 40 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M13 20H27'
                stroke='#FDCB6E'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M20 13L27 20L20 27'
                stroke='#FDCB6E'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
