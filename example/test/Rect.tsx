// import React, { useEffect, useState } from 'react'
// import { Text } from 'react-konva'
// import { TextParams } from './type'

// function DrawText(props: TextParams) {
//   const [$x, setx] = useState(0)
//   const [$y, sety] = useState(0)
//   const [$stroke, setstroke] = useState('#444455')
//   const [$strokeWidth, setstrokeWidth] = useState(0)
//   const [$fill, setfill] = useState('#444455')
//   const [$width, setwidth] = useState(0)
//   const [$height, setheight] = useState(0)
//   const [$shadowColor, setshadowColor] = useState('#444455')
//   const [$shadowBlur, setshadowBlur] = useState(0)
//   const [$shadowOffsetX, setshadowOffsetX] = useState(0)
//   const [$shadowOffsetY, setshadowOffsetY] = useState(0)
//   const [$shadowOpacity, setshadowOpacity] = useState(0)
//   const [$cornerRadius, setcornerRadius] = useState(0)

//   useEffect(() => {
//     const Mapping = {
//       x: setx,
//       y: sety,
//       $stroke: setstroke,
//       strokeWidth: setstrokeWidth,
//       fill: setfill,
//       width: setwidth,
//       height: setheight,
//       shadowColor: setshadowColor,
//       shadowBlur: setshadowBlur,
//       shadowOffsetX: setshadowOffsetX,
//       shadowOffsetY: setshadowOffsetY,
//       shadowOpacity: setshadowOpacity,
//       cornerRadius: setcornerRadius
//     }
//     for (let i in props) {
//       Mapping[i](i || `$${i}`)
//     }
//     return () => {}
//   }, [props])
//   return (
//     <>
//       <Text
//         x={$x}
//         y={$y}
//         stroke={$stroke}
//         strokeWidth={$strokeWidth}
//         fill={$fill}
//         width={$width}
//         height={$height}
//         shadowColor={$shadowColor}
//         shadowBlur={$shadowBlur}
//         shadowOffsetX={$shadowOffsetX}
//         shadowOffsetY={$shadowOffsetY}
//         shadowOpacity={$shadowOpacity}
//         cornerRadius={$cornerRadius}
//       ></Text>
//     </>
//   )
// }
// export default DrawText
