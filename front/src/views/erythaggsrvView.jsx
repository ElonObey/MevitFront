import React from 'react'
import { Head } from '../components/header'
import { Footer } from '../components/footer'
import { Erythaggsrv } from '../components/Module/erythaggsrv'
import CustomAppBar from '../components/AppBar/CustomAppBar'

function ErythaggsrvView() {
  return (
    <>
    {/* <Head/> */}
    <CustomAppBar/>
    <Erythaggsrv/>
    <Footer/>
    </>
  )
}

export default ErythaggsrvView