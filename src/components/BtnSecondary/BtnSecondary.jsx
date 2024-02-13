import React from 'react'

const BtnSecondary = (props) => {
  return (
    <a
      href={props.url}
      className="btn btn-link no-underline text-lg">
      {props.text}
      {props.icon}
    </a>
  )
}

export default BtnSecondary