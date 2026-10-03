import { Router } from "express";
import generateTiket from "./generateTiket.controler.mjs";

const { validateCreate, create } = generateTiket;
const router = Router();

router.post('/generateTicket', validateCreate, create);

export default router;
