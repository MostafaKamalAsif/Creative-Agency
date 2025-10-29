import React from 'react'

const Container = ({className,children}) => {
  return (
    <div className={`max-w-[520px] md:max-w-[680px] lg:max-w-[1170px] m-auto ${className}`}>{children}</div>
  )
}

export default Container