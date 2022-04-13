import React from "react"
import { Circulo, Cuadros } from "../components/Animaciones";


const IndexPage = () => {
  return (
    <>
  <div className="App" style={{ height:'1000mr'}}>
  <h1>Hola putitos</h1>
  <div style={{ width:'400px'}}><Circulo></Circulo></div>
  <div style={{ width:'400px'}}><Cuadros></Cuadros></div> 

  </div>
    </>
  )
};

export default IndexPage

 