import React, { useEffect, useRef } from "react"
import lottie from "lottie-web"


export function Cuadros(){

  const container = useRef(null)
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      player:"cuadros",
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../asset-animation/cuadros.json"),
    })
  },
   [])

  return <div className="container" ref={container}></div>
}

export function Circulo(){
  const circulo = useRef(null)
  useEffect(() => {
    lottie.loadAnimation({

      container: circulo.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
    
      animationData: require("../asset-animation/circulo.json"),
    })
    
  }, [])

  return <div className="circulo" ref={circulo}></div>
}