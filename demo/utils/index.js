var barcode = require("./barcode");
const { api } = require("./qrcode");
var qrcode = require("./qrcode");

function convert_length(length) {
  return Math.round((wx.getSystemInfoSync().windowWidth * length) / 750);
}
/**
 *barc  生成条码
 * @param {*} id canvas 的id  必填
 * @param {*} code  内容条码  必填
 * @param {*} width 条码宽度  必填
 * @param {*} height 条码高度  必填
 * @param {*} bgcolor 条码背景颜色  选填
 * @param {*} color 条码颜色   选填
 * @param {*} padding_width  条码左右边距   选填
 * @param {*} padding_height   条码上下边距  选填
 */

function barc(
  id,
  code,
  width,
  height,
  bgcolor,
  color,
  padding_width,
  padding_height
) {
  barcode.code128(
    wx.createCanvasContext(id),
    code,
    convert_length(width),
    convert_length(height),
    bgcolor,
    color,
    padding_width,
    padding_height
  );
}

function qrc(id, code, width, height) {
  qrcode.api.draw(code, {
    ctx: wx.createCanvasContext(id),
    width: convert_length(width),
    height: convert_length(height),
  });
}

module.exports = {
  barcode: barc,
  qrcode: qrc,
};
