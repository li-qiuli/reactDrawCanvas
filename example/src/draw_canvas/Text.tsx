import React, { useEffect, useState } from 'react'
import { Text } from 'react-konva'
// import { TextParams } from './type'

function DrawText(props:any) {
  const [$x, setx] = useState(100)
  const [$y, sety] = useState(100)
  const [$strokeWidth, setstrokeWidth] = useState(0)
  const [$text, settext] = useState('')
  const [$fill, setfill] = useState('#0c74b5')
  const [$width, setwidth] = useState(20)
  const [$fontSize, setfontSize] = useState(20)
  const [$fontFamily, setfontFamily] = useState('#444455')
  const [$padding, setpadding] = useState(5)
  const [$align, setalign] = useState('align')

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
      padding: setpadding,
      align: setalign
    }
    for (let i in props.message) {
      Mapping[i](props.message[i] || `$${i}`)
    }
    return () => {}
  }, [props])
  return (
    <>
      <Text
        x={$x}
        y={$y}
        strokeWidth={$strokeWidth}
        text={$text}
        fill={$fill}
        width={$width}
        fontSize={$fontSize}
        fontFamily={$fontFamily}
        padding={$padding}
        align={$align}
      ></Text>
    </>
  )
}
export default DrawText
