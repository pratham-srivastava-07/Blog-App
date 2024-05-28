import React from 'react'
import Navlink from './components/Navlink'

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <Navlink/>
      {children}
    </div>
  )
}
