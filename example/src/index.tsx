/* eslint-disable array-callback-return */
import './index.css'
import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import Draw, { signEleLoaded } from './App'
import { page } from './type/type'
import { downloadPoster } from './down_canvas/down'
import { Subject } from 'rxjs'
const changePage = {
  nexpage$: new Subject()
}
const EpubPages: page[] = [
  {
    id: '11111111',
    width: 400,
    height: 500,
    overlays: [
      {
        id: 'e_245656',
        iType: 'text',
        message: {
          text: 'ceshiwfnonfcknfcjmckm ',
          width: 100,
          height: 200,
          x: 60,
          y: 44
        }
      },
      {
        id: 'e_223456',
        iType: 'text',
        message: {
          text: '多文本渲染时，显示测试文本',
          width: 100,
          height: 200,
          x: 20,
          y: 44
        }
      },
      {
        id: 'e_78878',
        iType: 'image',
        message: {
          src: 'https://konvajs.org/assets/yoda.jpg',
          x: 10,
          y: 40
        }
      },
      {
        id: 'e_78378',
        iType: 'image',
        message: {
          src: 'https://konvajs.org/assets/yoda.jpg',
          x: 20,
          y: 60
        }
      }
    ]
  },
  {
    id: '222222222',
    width: 200,
    height: 400,
    overlays: [
      {
        id: 'e_245656',
        iType: 'text',
        message: { text: 'ceshiwfnonfcknfcjmckm ', x: 60, y: 44 }
      },
      {
        id: 'e_223456',
        iType: 'text',
        message: { text: 'qqqq多文本渲染时，显示测试文本', x: 20, y: 44 }
      },
      {
        id: 'e_78878',
        iType: 'image',
        message: {
          src: 'https://konvajs.org/assets/lion.png',
          x: 10,
          y: 40
        }
      }
    ]
  }
]

//promise one page
const getData = async (page: page) => {
  let havedloaded: any[] = []
  let shouldLoaded = ['textLoaded', 'imageLoaded']
  return new Promise(function (resolve) {
    ReactDOM.render(<Draw page={page} />, document.getElementById('root'))
    signEleLoaded.loaded$.subscribe((signstr) => {
      havedloaded.push(signstr)
      if (havedloaded.length === shouldLoaded.length) {
        resolve('success')
      }
    })
  })
}

//*epub图片数据预加载
const epubPagesPreladImg = (it: page) => {
  it.overlays.map((item: any) => {
    if (item.iType === 'image') {
      let image = new window.Image()
      image.crossOrigin = 'Anonymous'
      image.src = item.message.src
      item.message['image'] = image
    }
  })
}

/**
 * @name :下载page并卸载,进入下一页进行渲染
 */
export const init = async (page: page, ind: number) => {
  await epubPagesPreladImg(page)
  getData(page).then((data) => {
    console.log(data)
    if (data === 'success') {
      setTimeout(() => {
        downloadPoster()
        let dom = document.getElementById('root')
        if (dom) {
          unmountComponentAtNode(dom)
          changePage.nexpage$.next(['next', ind+1])
        }
      }, 10)
    }
  })
}

const cont=(epubPages:any)=>{
  init(epubPages[0], 0)
  changePage.nexpage$.subscribe(([nexstr, num]) => {
    if (nexstr === 'next' && num < EpubPages.length) {
      init(epubPages[num], num)
    }
  })
}

cont(EpubPages)

