import React from "react";
import logo from '../assets/PocketPorridgeLogo.png'
import './Logo.css'

export function Logo() {

  return (
    <>
    <img className="logoSize" src={logo} alt="Pocket Porridge logo" />
    </>
  )
}