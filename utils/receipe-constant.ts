import type { ReceipeDataItem, ReceipeHeaderType, ReceipeNutritionType } from "~/types/Receipe";

const receipeHeader: ReceipeHeaderType = {
  imageUrl: "https://mgisolutions-coffee.imgix.net/special-coffee/image-omelette.jpeg",
  imageAltText: "Omelette",
  title: "Simple Omelette Recipe",
  description:
    "An easy and quickly dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
};
const receipePreparation: ReceipeDataItem[] = [
  {
    title: "Total",
    description: "Approximately 10 minutes",
  },
  {
    title: "Preparation",
    description: "5 minutes",
  },
  {
    title: "Cooking",
    description: "5 minutes",
  },
];

const receipeIngredients: ReceipeDataItem[] = [
  {
    title: "",
    description: "2-3 large eggs",
  },
  {
    title: "",
    description: "Salt, to taste",
  },
  {
    title: "",
    description: "Pepper, to taste",
  },
  {
    title: "",
    description: "1 tablespoon of butter or oil",
  },
  {
    title: "",
    description: "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
  },
];

const receipeInstructions: ReceipeDataItem[] = [
  {
    title: "Beat the eggs",
    description:
      "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
  },
  {
    title: "Heat the pan",
    description: "Place a non-stick frying pan over medium heat and add butter or oil.",
  },
  {
    title: "Cook the omelette",
    description:
      "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
  },
  {
    title: "Add fillings (optional)",
    description:
      "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
  },
  {
    title: "Fold and serve",
    description:
      "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
  },
  {
    title: "Enjoy",
    description: "Serve hot, with additional salt and pepper if needed.",
  },
];

const receipeNutrition: ReceipeNutritionType = {
  description: "The table below shows nutritional values per serving without the additional fillings.",
  nutrition: [
    { nutritional: "Calories", value: "277kcal" },
    { nutritional: "Carbs", value: "0g" },
    { nutritional: "Protein", value: "20g" },
    { nutritional: "Fat", value: "22g" },
  ],
};

export { receipeHeader, receipePreparation, receipeIngredients, receipeInstructions, receipeNutrition };
