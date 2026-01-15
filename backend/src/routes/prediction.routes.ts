import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware";
import { getPrediction, sharePrediction, getSharedPrediction } from "../controllers/prediction.controller";

const router = Router();

router.post("/get-prediction", verifyJWT, getPrediction);
router.put("/share/:id", verifyJWT, sharePrediction);
router.get("/get-shared/:id", getSharedPrediction);

export default router;
