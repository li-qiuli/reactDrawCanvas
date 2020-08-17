import React, { useEffect, useState } from 'react';
import { Image } from 'react-konva';
import { signEleLoaded } from '../App';

function DrawUrlImage(props:any) {
  const {x,y,width,height,image}=props.message
  const [posx] = useState(x?x:0);
  const [posy] = useState(y?y:0);
  const [$width] = useState(width||50);
  const [$height] = useState(height||50);

  useEffect(() => {
    const {index,length}=props
    if(index===length){
      signEleLoaded.loaded$.next('imageLoaded')
    }
    return ()=>{}
  }, [props])
  return (
    <Image image={image} x={posx} y={posy}  width={$width} height={$height}/>
  );
}
export default DrawUrlImage