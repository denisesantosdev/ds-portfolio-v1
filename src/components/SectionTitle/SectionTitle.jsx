import React from 'react'

const SectionTitle = (props) => {
  return (
    <h2 className={`text-3xl font-bold mb-10 ${props.textAlign}`}>// {props.text}</h2>
  )
}

export default SectionTitle