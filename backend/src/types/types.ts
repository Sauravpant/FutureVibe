export interface ShareResponse {
  id: string;
  userName: string;
  predictionText: string;
  imageUrl: string;
  viewsCount: number;
}

export interface PredictionRequest {
  categoryId: string;
}

export interface PredictionResponse {
  id: string;
  categoryId: string;
  predictionText: string;
  imageUrl?: string;
  createdAt: Date;
}

