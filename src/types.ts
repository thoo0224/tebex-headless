export type BaseResponse<T> = {
  data: T;
};

export type Package = {
  id: number;
  name: string;
  description: string;
  image: string;
  type: "single" | "subscription";
  category: {
    id: number;
    name: string;
  };
  basePrice: number;
  salesTax: number;
  totalPrice: number;
  currency: string;
  discount: number;
  disableQuantity: boolean;
  disableGifting: boolean;
  expirationDate: string | null;
  createdAt: string;
  updatedAt: string;
};
