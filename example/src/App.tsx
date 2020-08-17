/* eslint-disable @typescript-eslint/no-unused-expressions */
// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
import 'react_clip/dist/index.css'
import { Stage, Layer } from 'react-konva'
import DrawUrlImage from './draw_canvas/Image'
import DrawText from './draw_canvas/Text'
import { Subject } from 'rxjs';
export const signEleLoaded={
  loaded$:new Subject(),
}

function Draw(props: any) {
  const [textOverlays, settextOverlays] = useState([])
  const [imgOverlays, setimgOverlays] = useState<any[]|undefined>(undefined)

   useEffect(() => {
    dataClassify()
    return () => {}
    // eslint-disable-next-line
  }, [])

  const dataClassify = () => {
    let texts: any = []
    let images: any = []
    // eslint-disable-next-line
    props.page.overlays.map((it: { iType: string }) => {
      if (it.iType === 'image')  images.push(it)
      if (it.iType === 'text') texts.push(it)
    })
    settextOverlays(texts)
    setimgOverlays(images)
    return texts
  }
  return (
    <>
      <Stage id={props.page.id} width={props.page.width} height={props.page.height}>
        <Layer>
          {textOverlays.map(
            (overlay: any, index) =>
              overlay.message && (
                <DrawText index={index+1} key={index} length={textOverlays.length} message={overlay.message}></DrawText>
              )
          )}
          {imgOverlays?.map(
            (overlay: any, index) =>
              overlay.message && (
                <DrawUrlImage index={index+1} key={index} length={imgOverlays.length} message={overlay.message}></DrawUrlImage>
              )
          )}
        </Layer>
      </Stage>
    </>
  )
}

export default Draw
