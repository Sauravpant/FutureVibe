import { Request, Response } from "express";
import { asyncHandler } from "../utils/async-handler";
import { Prediction } from "../models/prediction.model";
import { ShareResponse, PredictionRequest, PredictionResponse } from "../types/types";
import { ApiResponse } from "../utils/api-response";
import { predictionData } from "../data/prediction.data";
import { AppError } from "../utils/app-error";
import { IUser } from "../models/user.model";

interface AuthenticatedRequest extends Request {
  user?: IUser & { _id: any };
}

export const getPrediction = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { categoryId } = req.body as PredictionRequest;

  if (!categoryId || !predictionData[categoryId]) {
    throw new AppError(400, "Invalid category ID");
  }

  const lastPrediction = await Prediction.findOne({
    user: req.user!._id,
    categoryId: categoryId,
  }).sort({ createdAt: -1 });

  const categoryPredictions = predictionData[categoryId];

  let availablePredictions = categoryPredictions;
  if (lastPrediction) {
    availablePredictions = categoryPredictions.filter(
      (p) => p.text !== lastPrediction.predictionText
    );
  }

  if (availablePredictions.length === 0) {
    availablePredictions = categoryPredictions;
  }

  const randomIndex = Math.floor(Math.random() * availablePredictions.length);
  const selectedPrediction = availablePredictions[randomIndex];

  const newPrediction = await Prediction.create({
    user: req.user!._id,
    categoryId,
    predictionText: selectedPrediction.text,
    imageUrl: selectedPrediction.imageUrl || "",
  });

  const response: PredictionResponse = {
    id: newPrediction._id.toString(),
    categoryId: newPrediction.categoryId,
    predictionText: newPrediction.predictionText,
    imageUrl: newPrediction.imageUrl || undefined,
    createdAt: newPrediction.createdAt!,
  };

  return res.status(200).json(new ApiResponse(200, response, "Prediction generated successfully"));
});

export const sharePrediction = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const prediction = await Prediction.findById(id).populate<{ user: { name: string } }>("user", "name");
  if (!prediction) {
    return res.status(404).json({ message: "Prediction not found" });
  }
  prediction.isPublic = true;
  prediction.viewsCount += 1;
  await prediction.save();

  const result = {
    id: prediction._id.toString(),
    userName: prediction.user.name,
    predictionText: prediction.predictionText,
    imageUrl: prediction.imageUrl,
    categoryId: prediction.categoryId,
    createdAt: prediction.createdAt,
    viewsCount: prediction.viewsCount,
  };
  return res.status(200).json(new ApiResponse(200, result, "Prediction shared successfully"));
});

export const getSharedPrediction = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const prediction = await Prediction.findById(id).populate<{ user: { name: string } }>("user", "name");

  if (!prediction) {
    return res.status(404).json({ message: "Prediction not found" });
  }

  prediction.viewsCount += 1;
  await prediction.save();

  const result = {
    id: prediction._id.toString(),
    userName: prediction.user.name,
    predictionText: prediction.predictionText,
    imageUrl: prediction.imageUrl,
    categoryId: prediction.categoryId,
    createdAt: prediction.createdAt,
    viewsCount: prediction.viewsCount,
  };

  return res.status(200).json(new ApiResponse(200, result, "Prediction fetched successfully"));
});
