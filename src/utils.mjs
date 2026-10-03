// generates a qrcode/ barcode. If it is barcode message must be json if not a string.
// by default is a barcode
// it has 3 options:
// 1. barcode ture/fals default false.
// 2. writenMessage to see the messageembaded into the string/qrcode under it
// 3. customText if you want a custom tect under it
export const generateCode = (message, { customText = "", writenMessage = false, barcode = false }) => (
  {
    "format": barcode ? "PKBarcodeFormatQR" : "PKBarcodeFormatCode128",
    message,
    "messageEncoding": "iso-8859-1",
    ...((customText.length || writenMessage) && { "altText": (`${customText.length ? customText : ""} ${writenMessage ? message : ""}`).trim() }),
  }
)
