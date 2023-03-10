import React from 'react';

const Twitter = ({ width = '17', height = '16' }, props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g clipPath="url(#clip0_46_3112)">
        <path
          d="M5.53344 14.5001C11.5697 14.5001 14.8722 9.49786 14.8722 5.1613C14.8722 5.02068 14.8691 4.87693 14.8628 4.7363C15.5052 4.2717 16.0597 3.69623 16.5 3.03693C15.9017 3.30313 15.2664 3.47698 14.6159 3.55255C15.3009 3.142 15.8137 2.49704 16.0594 1.73724C15.415 2.1191 14.7104 2.38847 13.9756 2.5338C13.4806 2.00777 12.826 1.65947 12.1131 1.54276C11.4003 1.42605 10.6688 1.54743 10.0318 1.88813C9.39486 2.22882 8.88787 2.76986 8.58923 3.4276C8.2906 4.08534 8.21695 4.82314 8.37969 5.52693C7.075 5.46145 5.79862 5.12253 4.63332 4.53213C3.46802 3.94172 2.4398 3.11302 1.61531 2.09974C1.19627 2.82222 1.06804 3.67716 1.25669 4.49079C1.44534 5.30442 1.93671 6.01569 2.63094 6.48005C2.10975 6.4635 1.59998 6.32318 1.14375 6.07068V6.1113C1.14328 6.86949 1.4054 7.60445 1.88554 8.19124C2.36568 8.77803 3.03422 9.18043 3.7775 9.33005C3.2947 9.46215 2.78799 9.48139 2.29656 9.3863C2.5063 10.0384 2.91438 10.6087 3.46385 11.0176C4.01331 11.4266 4.67675 11.6538 5.36156 11.6676C4.19895 12.5808 2.76278 13.0761 1.28438 13.0738C1.02219 13.0734 0.760266 13.0573 0.5 13.0257C2.0019 13.9892 3.74902 14.501 5.53344 14.5001Z"
          fill="#98A2B3"
        />
      </g>
      <defs>
        <clipPath id="clip0_46_3112">
          <rect width="16" height="16" fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Twitter;
