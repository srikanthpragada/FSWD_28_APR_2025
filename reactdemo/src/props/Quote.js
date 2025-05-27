import React from 'react'

// export default function Quote(props) {
//   return (
//     <h1 style={{color: props.color}}>{props.quote}</h1>
//   )
// }

export default function Quote({color, quote}) {
  return (
    <h1 style={{color: color}}>{quote}</h1>
  )
}