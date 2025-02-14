import React from 'react'

const Status = ({text,icon:Icon, bg, color}) => {
  return (
    <div className={`${bg} ${color} px-2 py-2 font-medium flex items-center rounded-xl`}>
        {text} <Icon size={15} />
    </div>
  )
}

export default Status