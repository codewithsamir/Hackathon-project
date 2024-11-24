import Pagelayout from '@/components/Landingpage/Pagelayout'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <Pagelayout>
      <div className=' p-10'>
        {children}
      </div>
    </Pagelayout>
  )
}

export default layout