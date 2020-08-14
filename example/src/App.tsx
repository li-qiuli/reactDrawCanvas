/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, useEffect } from 'react'
import 'react_clip/dist/index.css'
// import { Stage, Layer } from 'react-konva'
// import DrawUrlImage from './draw_canvas/Image'
// import DrawText from './draw_canvas/Text'

const canva = [
  {
    text: { message: { text: 'ceshi' } },
    image: {
      imageMessage: {
        src: 'https://konvajs.org/assets/yoda.jpg',
        x: 10,
        y: 40
      }
    }
  },
  {
    text: { message: { text: 'ceshi' } },
    image: {
      imageMessage: {
        src: 'https://konvajs.org/assets/yoda.jpg',
        x: 10,
        y: 40
      }
    }
  }
]

function Draw(props:any) {
 const [can, setcan] = useState(props)
  // console.log(props)
  // const message = { text: 'ceshi' }
  // const imageMessage = {
  //   src: 'https://konvajs.org/assets/yoda.jpg',
  //   x: 10,
  //   y: 40
  // }
  useEffect(() => {
    setcan(props)
    return () => {
      
    };
  }, [props])
  return (
    <>
      <div>{can}</div>
      {/* <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <DrawUrlImage message={imageMessage}></DrawUrlImage>
          <DrawText message={message}></DrawText>
        </Layer>
      </Stage> */}
    </>
  )
}

function App  ()  {
  // const state={canva}
  return (
    <>
    {
    // for(let i=0,i<canva.length,i++){
      canva.map((it)=>{
        <Draw can={it}></Draw>
      })
    }
  
    </>
  )
}

export default App
