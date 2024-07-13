import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      { <h4>BRILLI MALTA</h4> }
      <svg
        width={127}
        height={24}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 127.67 23.36"
      >
        <path
          fill="currentColor"
          d="M14.14,11.84a38.37,38.37,0,0,0-3.26-2.05C9.73,9.13,8.81,8.57,8.13,8.1a7.8,7.8,0,0,1-1.7-1.64,3.62,3.62,0,0,1-.67-2.14,3.63,3.63,0,0,1,.9-2.53A2.78,2.78,0,0,1,8.8.8a4.35,4.35,0,0,1,2.59.8,6.86,6.86,0,0,1,1.92,2A9.35,9.35,0,0,1,14.56,6.4h1.28V.32H15s-.26.17-.64.45a6,6,0,0,0-1.12,1.31,6.94,6.94,0,0,0-1.41-1A7.39,7.39,0,0,0,8.16,0,10.81,10.81,0,0,0,3.84.77a6,6,0,0,0-2.66,2A4.89,4.89,0,0,0,.32,5.6a6.37,6.37,0,0,0,.93,3.46,8.87,8.87,0,0,0,2.24,2.4A33.75,33.75,0,0,0,6.91,13.6c1.11.64,2,1.17,2.59,1.6A6.56,6.56,0,0,1,11,16.67a3,3,0,0,1,.64,1.89,3.9,3.9,0,0,1-1.09,2.91,3.9,3.9,0,0,1-2.91,1.09,6,6,0,0,1-5.06-2.78A10.34,10.34,0,0,1,1.28,17H0V23H.8s.26-.17.64-.45a5.37,5.37,0,0,0,1.12-1.31,5.83,5.83,0,0,0,1.5,1.06,9.23,9.23,0,0,0,4.26,1,12.56,12.56,0,0,0,4.83-.83,6.72,6.72,0,0,0,3-2.24,5.68,5.68,0,0,0,.13-6.21A8.1,8.1,0,0,0,14.14,11.84Z"
        />
        <path
          fill="currentColor"
          d="M33.43,1l2.4,1L31,12.64,26.23,3.2a5.17,5.17,0,0,0-1.66-2,4.51,4.51,0,0,0-2.66-.7h-4V1l1.6.48,6.56,13.12v7.36l-1.92.48v.48h9.12V22.4l-1.92-.48V14.24L37,1.92l2.56-1V.48H33.43Z"
        />
        <path
          fill="currentColor"
          d="M49,.48H40.79V1l1.92.48V21.92l-1.92.48v.48H49q5.73,0,8.77-2.94t3.07-8.26q0-5.31-3.07-8.26T49,.48Zm4.61,19.2A5.25,5.25,0,0,1,49,22.08H48V1.28h1a5.23,5.23,0,0,1,4.61,2.43q1.63,2.4,1.63,8T53.56,19.68Z"
        />
        <path
          fill="currentColor"
          d="M78.87,1l2.56,1v12.8l-10.24-12a8.07,8.07,0,0,0-1.83-1.63A4.88,4.88,0,0,0,66.71.48H63.35V1l2.24.64V21.44L63,22.4v.48h6.08V22.4l-2.56-1V5.92L81.43,23.36h1V1.92L85,1V.48H78.87Z"
        />
        <path
          fill="currentColor"
          d="M102.79,18.34a7.14,7.14,0,0,0-1,3.74H94.24V12.16h3.68a7.19,7.19,0,0,0,.83,2.27,7.82,7.82,0,0,0,.61.93h1V8.16h-1a7.82,7.82,0,0,0-.61.93,7.19,7.19,0,0,0-.83,2.27H94.24V1.28h6.88a7.14,7.14,0,0,0,1,3.74,4.66,4.66,0,0,0,1,1.22h1V.48H87V1L89,1.44V21.92L87,22.4v.48H104.8V17.12h-1A4.66,4.66,0,0,0,102.79,18.34Z"
        />
        <path
          fill="currentColor"
          d="M121.59.48V1l2.4,1-4.87,10.72L114.39,3.2a5.11,5.11,0,0,0-1.67-2,4.47,4.47,0,0,0-2.65-.7h-4V1l1.6.48,6.56,13.12v7.36l-1.92.48v.48h9.12V22.4l-1.92-.48V14.24l5.6-12.32,2.56-1V.48Z"
        />
      </svg>
    </div>
  );
};

export default Brand;
