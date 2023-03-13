import React from 'react'

export default function Counter(props) {

  return (
    <div className='counter fixed-bottom p-1 w-100'>
      <div class="text-center rounded listed">
        {props.count} Listed
      </div>
    </div>
  )
}
