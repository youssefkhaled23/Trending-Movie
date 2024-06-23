import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../NavBar/Navbar'

export default function Layout() {
  return (
    <>  
    <Navbar/>
      <Outlet/>
    </>
  )
}