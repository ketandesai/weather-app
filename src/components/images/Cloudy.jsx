import * as React from 'react'

function Cloudy(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <path
        fill="#ff9800"
        d="M25 22.5l4-4-4-4V10h-4.5l-4-4-4 4H8v4.5l-4 4 4 4V27h4.5l4 4 4-4H25z"
      />
      <path
        d="M10 18.5c0 3.6 2.9 6.5 6.5 6.5s6.5-2.9 6.5-6.5-2.9-6.5-6.5-6.5-6.5 2.9-6.5 6.5"
        fill="#ffeb3b"
      />
      <g fill="#bbdefb">
        <path d="M29.5 17c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5z" />
        <path d="M37 26.9c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zM11 27c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z" />
        <path d="M17.5 20c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5 6.5-2.9 6.5-6.5-2.9-6.5-6.5-6.5z" />
        <path d="M25 24.9c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z" />
        <path d="M7 37c0 2.2 1.8 4 4 4h25c2.2 0 4-1.8 4-4v-1c0-2.2-1.8-4-4-4H11c-2.2 0-4 1.8-4 4v1z" />
      </g>
    </svg>
  )
}

export default Cloudy