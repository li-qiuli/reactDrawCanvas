/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState } from 'react'
import { Text } from 'react-konva'
import { signEleLoaded } from '../App'
function DrawText(props:any) {
  const {index,length}=props
  const [$x, setx] = useState(0)
  const [$y, sety] = useState(0)
  const [$width, setwidth] = useState(20)
  const [$height, setheight] = useState(20)

  const [$strokeWidth, setstrokeWidth] = useState(0)
  const [$text, settext] = useState('')
  const [$fill, setfill] = useState('#0c74b5')


  const [$fontSize, setfontSize] = useState(20)
  const [$fontFamily, setfontFamily] = useState('Arial')//字体
  const [$fontStyle, setfontStyle] = useState('normal')

  const [$padding, setpadding] = useState(5)
  const [$lineHeight, setlineHeight] = useState(5)
  const [$align, setalign] = useState('left')


  useEffect(() => {
    const Mapping = {
      x: setx,
      y: sety,
      strokeWidth: setstrokeWidth,
      text: settext,
      fill: setfill,
      width: setwidth,
      fontSize: setfontSize,
      fontFamily: setfontFamily,
      fontStyle:setfontStyle,
      padding: setpadding,
      align: setalign,
      lineHeight:setlineHeight,
      height: setheight
      // fontFamily:''
    }
    for (let i in props.message) {
      Mapping[i](props.message[i] || `$${i}`)
    }
   
    if(index===length){
      signEleLoaded.loaded$.next('textLoaded')
    }
    return () => {}
  }, [index, length, props.message])
  return (
    <>
      <Text 
        x={$x}
        y={$y}
        strokeWidth={$strokeWidth}
        text={$text}
        fill={$fill}
        width={$width}
        height={$height}
        fontSize={$fontSize}
        fontFamily={$fontFamily}
        lineHeight={$lineHeight}
        padding={$padding}
        align={$align}
        fontStyle={$fontStyle}
      ></Text>
    </>
  )
}
export default DrawText
