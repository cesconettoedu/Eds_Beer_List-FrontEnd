import React from 'react'

export default function Counter(props) {

  return (
    <div className='counter rounded fixed-bottom p-1'>
      {props.count} Listed
    </div>
  )
}
