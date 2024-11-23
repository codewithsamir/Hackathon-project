import Dashboardnav from '@/components/Dashboard/Dashboardnav'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
<Dashboardnav classname="sticky top-0 z-50" />
        {children}
    </div>
  )
}

export default layout