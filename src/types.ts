export type BaseResponse<T> = {
  data: T;
};

export type TebexErrorResponse = {
  status: number;
  type: string;
  title: string;
  detail: string;
  errorCode: string;
  fieldDetails: string[];
  meta: string[];
};

export type Category = {
  id: number;
  name: string;
  description: string;
  parent: Category | null;
  order: number;
  packages: Package[];
  displayType: "grid" | "list";
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
