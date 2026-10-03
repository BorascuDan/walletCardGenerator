import generateTiket from "./generateTiket.midleware.mjs";
import { passTypes, contentType, bufferMethod } from "./constans.mjs";

const publicApi = {
  validateCreate: (req, res, next) => {
    const { userId, type = "ios", message } = req.body;
    if (!Number.isInteger(Number(userId))) return res.status(400).send({ error: "User ID must be a number" })
    if (!passTypes.has(type)) return res.status(400).send({ error: "The type provided is not allowed" })

    req.type = type;
    return next();
  },

  create: async(req, res) => {
    const { type = "ios" } = req;

    try {
      const key = await generateTiket[type](req.body);

      // res.header('Content-Type', contentType[type]);
      // res.send(key[bufferMethod[type]]());
      res.send(key)
    } catch (e) {
      console.error('Pass failed to generate due to: ', e);
      res.status(500).send({ error: "Failed to generate your pass" });
    }
  }
}

export default publicApi;
