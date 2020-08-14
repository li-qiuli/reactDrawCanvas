import React, { useEffect, useState } from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';
// import { ImageParam} from './type'

function DrawUrlImage(props:any) {
  const [image, status] = useImage(props.message.src, 'Anonymous');
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const [$width, setwidth] = useState(50);
  const [$height, setheight] = useState(50);

  useEffect(() => {
    const {x,y,width,height}=props.message
    
    setx(y?y:0)
    sety(x?x:0)
    setwidth(width||$width)
    setheight(height||$height)
    return () => {};
  }, [$height, $width, props, props.src, props.x, props.y, status])
  return (
    <Image image={image} x={x} y={y}  width={$width} height={$height}/>
  );
}
export default DrawUrlImage