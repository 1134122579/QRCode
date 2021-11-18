# wxbarcode

  微信小程序生成条码和二维码模块。
## 效果

![截图](https://raw.githubusercontent.com/alsey/wxbarcode/master/capture.png)

## 安装

还没有发布npm包 功能好了

```bash
$ npm install wx-qrcode
```

## 使用方法

```js
import wxQrcode from 'wx-qrcode'

/**
 *barc  生成条码
 * @param {*} id canvas 的id String  必填
 * @param {*} code  内容条码 String 必填
 * @param {*} width 条码宽度  String/Number 必填
 * @param {*} height 条码高度 String/Number  必填
 * @param {*} bgcolor 条码背景颜色  String选填
 * @param {*} color 条码颜色  String 选填
 * @param {*} padding_width  条码左右边距  String/Number 选填
 * @param {*} padding_height   条码上下边距 String/Number 选填
 */
wxQrcode.barcode('barcode', '1234567890123456789', 680, 200);





/**
 *  * 生成二维码条码
 * @param {*} id canvas 的id  String 必填
 * @param {*} code 内容条码 String  必填
 * @param {*} 样式对象  obj codeSize  二维码大小 String/Number  必填 color 二维码 bgcolor 二维码背景颜色  String 选填颜色 String  选填
 * @param {*} $this  可以$this指向
 * @param {*} callback  回调函数   
 */
wxQrcode.qrcode('qrcode', '1234567890123456789', {codeSize:420});
```

## 例子

请参考`demo`文件夹下代码。

## License

  [MIT](LICENSE)
