import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { BiUserCheck } from 'react-icons/bi'

const Dashboardnav = ({classname}:any) => {
  return (
    <div className={`navbar w-full h-[10vh]   flex justify-between items-center py-2 px-8 ${classname} bg-white shadow-sm `}  >
    <Link href="/Dashboard">
    <div className="logo  text-2xl font-bold">Digiskill</div></Link>
    <div className="profile flex items-center gap-4">
        <div className="avatar">
        {/* <img src="" alt="" /> */}
        <BiUserCheck size={30} />
        </div>
        <div className="logout">
        <Button  variant="contained" className='bg-blue-500 text-white'> logout</Button>
        </div>
    </div>
</div>
  )
}

export default Dashboardnav