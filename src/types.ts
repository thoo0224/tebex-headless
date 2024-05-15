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

export type Coupon = {
  code: string;
};

export type Giftcard = {
  cardNumber: string;
};

export type Basket = {
  id: number;
  ident: string;
  complete: boolean;
  country: string;
  ip: string;
  usernameId: string;
  username: string;
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
  packages: Package[];
  coupons: Coupon[];
  giftcards: Giftcard[];
  creatorCode: string;
  links: {
    checkout: string;
  };
};

export type BasketAuthUrl = {
  name: string;
  url: string;
};

export type Webstore = {
  id: number;
  description: string;
  name: string;
  webstoreUrl: string;
  currency: string;
  lang: string;
  logo: string | null;
  platformType: string;
  createdAt: string;
};
