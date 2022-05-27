import React from 'react';
import './SideBarItem.css'

export default function SideBarItem(props) {
  return (
    <div className={`SideBarItem ${props.active && "SideBarItem--active"}`} >
        <props.Icon />
        <h2>{props.text}</h2>
    </div>
  )
}
