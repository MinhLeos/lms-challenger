export interface ReceipeHeaderType {
  imageUrl?: string;
  imageAltText?: string;
  title?: string;
  description?: string;
}

export interface ReceipeDataItem {
  title?: string;
  description?: string;
}

export interface ReceipeNutritionItem {
  nutritional?: string;
  value?: string;
}

export interface ReceipeNutritionType {
  description?: string;
  nutrition?: ReceipeNutritionItem[];
}
