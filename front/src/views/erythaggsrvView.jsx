import React from 'react'
import { Head } from '../components/header'
import { Footer } from '../components/footer'
import { Erythaggsrv } from '../components/Module/erythaggsrv'
import CustomAppBar from '../components/AppBar/CustomAppBar'
import CustomFooter from '../components/footer/CustomFooter'

function ErythaggsrvView() {
  return (
    <>
    <CustomAppBar/>
    <Erythaggsrv/>
    {/* <Footer/> */}
    <CustomFooter/>
    </>
  )
}

export default ErythaggsrvView