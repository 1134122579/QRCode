//index.js
var wxbarcode = require("../../utils/index.js");

Page({
  data: {
    code: "1234567890123456789",
  },

  onLoad: function () {
    wxbarcode.barcode("barcode", "1234567890123456789", 680, 200);
    wxbarcode.qrcode("qrcode", "1234567890123456789", {
      codeSize: 420,
      color: "#ff0000",
      bgcolor: "#ffffff",
    });
  },
});
