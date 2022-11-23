import React from 'react'
import CocktailNavbar from '../CocktailNavbar'

const Layout = ({children}) => {
  return (
    <>
    <CocktailNavbar />
    {children}
    </>
  )
}

export default Layout