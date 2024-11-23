import { Button } from '@mui/material'
import React from 'react'
import { BiUserCheck } from 'react-icons/bi'

const Dashboardnav = ({classname}:any) => {
  return (
    <div className={`navbar w-full h-[10vh]   flex justify-between items-center py-2 px-8 ${classname}`} style={{background: 'linear-gradient(180deg, #000000 0%, #711313 100%)'}} >
    <div className="logo text-white text-2xl font-bold">user dashboard</div>
    <div className="profile flex items-center gap-4">
        <div className="avatar">
        {/* <img src="" alt="" /> */}
        <BiUserCheck size={30} color='white'/>
        </div>
        <div className="logout">
        <Button  variant="contained" className='bg-blue-500 text-white'> logout</Button>
        </div>
    </div>
</div>
  )
}

export default Dashboardnav