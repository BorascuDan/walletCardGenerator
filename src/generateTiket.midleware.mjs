import basePass from "./passesFormats/ios.pass/pass.json" with { type: "json" };
import { generateCode } from "./utils.mjs";

const Middlewares = {
  // gets request.body as parameters it may contain the following:
  // userId, message, barcode, customText, writenMessage
  ios: (body) => {
    const { userId, message, background, foreground, label, ...options } = body;

    const barcodes = generateCode(message, options);
    return {
      ...basePass,
      barcodes,
      serialNumber: userId,
      ...(background && { backgroundColor: background }),
      ...(foreground && { foregroundColor: foreground }),
      ...(label && { labelColor: label }),
    };
  }
}

export default Middlewares;
