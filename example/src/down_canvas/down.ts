// 本地下载图片
const downloadImage = (res: any) => {
    let url = res.preview
    debugger
    var a = document.createElement('a')
    a.href = url
    a.download = ''
    // 触发a链接点击事件，浏览器开始下载文件
    a.click()
}

//base64格式图片转成bolb格式
const base64ToBlob = ({
    b64data = '',
    contentType = '',
    sliceSize = 512
} = {}) => {
    return new Promise((resolve, _reject) => {
        let byteCharacters = atob(b64data) // 使用 atob() 方法将数据解码
        let byteArrays = []
        for (
            let offset = 0;
            offset < byteCharacters.length;
            offset += sliceSize
        ) {
            let slice = byteCharacters.slice(offset, offset + sliceSize)
            let byteNumbers = []
            for (let i = 0; i < slice.length; i++) {
                byteNumbers.push(slice.charCodeAt(i))
            }
            // 8 位无符号整数值的类型化数组。内容将初始化为0。如果无法分配请求数目的字节，则将引发异常。
            byteArrays.push(new Uint8Array(byteNumbers))
        }
        let result = new Blob(byteArrays, {
            type: contentType
        })
        result = Object.assign(result, {
            // 这里一定要处理一下 URL.createObjectURL
            preview: URL.createObjectURL(result),
            name: `tupian`
        })
        resolve(result)
    })
}
/**下载海报 */
export const downloadPoster = () => {
    let canvas = document.querySelectorAll('canvas')
    if (canvas.length > 0) {
        canvas.forEach((it) => {
            let type = 'png'
            let imageType = 'image/' + type
            let dataUrl = it.toDataURL(imageType)
            let base64 = dataUrl.split(',')[1]
            base64ToBlob({ b64data: base64, contentType: 'image/png' }).then((res): any => {
                // 转后后的blob对象
                if (res) {
                    downloadImage(res)
                }
            })
        })
    }
} 