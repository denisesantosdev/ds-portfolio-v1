import React from 'react'
import {SectionTitle, TechBadge} from '../components/components-index'
import { FaCss3Alt } from 'react-icons/fa6'

const TechSkills = () => {
  return (
    <section>
      <SectionTitle text='Tecnologias' subtitleText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, fugit?"/>
      <ul className='grid grid-cols-4 gap-9 place-items-center max-w-lg m-auto'>
        <TechBadge 
        text="CSS"
        icon={<FaCss3Alt size={50} />} toolTip="Linguagem de estilização"/>
        <TechBadge 
        text="React"
        icon={<FaCss3Alt size={50} />} toolTip="Linguagem de estilização"/>
        <TechBadge 
        text="React"
        icon={<FaCss3Alt size={50} />} toolTip="Linguagem de estilização"/>
        <TechBadge 
        text="React"
        icon={<FaCss3Alt size={50} />} toolTip="Linguagem de estilização"/>
        <TechBadge 
        text="Javascript"
        icon={<FaCss3Alt size={50} />} toolTip="Linguagem de estilização"/>
        <TechBadge 
        text="Javascript"
        icon={<FaCss3Alt size={50} />} toolTip="Linguagem de estilização"/>
        <TechBadge 
        text="Javascript"
        icon={<FaCss3Alt size={50} />} toolTip="Linguagem de estilização"/>
      </ul>
    </section>
  )
}

export default TechSkills