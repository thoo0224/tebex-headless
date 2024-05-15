import { TebexHeadlessClient } from "../src";
import { Basket } from "../src/types";

import "jest-extended";

const client = new TebexHeadlessClient(process.env.WEBSTORE_IDENTIFIER!);

const basketKeys = [
  "ident",
  "complete",
  "id",
  "country",
  "ip",
  "usernameId",
  "username",
  "basePrice",
  "salesTax",
  "totalPrice",
  "packages",
  "coupons",
  "giftcards",
  "creatorCode",
  "links",
];

const basketAuthUrlKeys = ["name", "url"];

describe("BasketService", () => {
  let createdBasket: Basket;

  beforeAll(async () => {
    createdBasket = await client.basket.createBasket();
  });

  it("should create a basket", async () => {
    expect(createdBasket).toBeDefined();
    expect(createdBasket).toContainKeys(basketKeys);
  });

  it("should get a basket", async () => {
    const basket = await client.basket.getBasket(createdBasket.ident);
    expect(basket).toBeDefined();
    expect(basket).toContainKeys(basketKeys);
  });

  it("should get the auth url", async () => {
    const returnUrl = "https://vertexscripts.com";
    const authUrls = await client.basket.getBasketAuthUrl(
      createdBasket.ident,
      returnUrl
    );

    expect(authUrls).toBeDefined();
    expect(authUrls).toBeArray();

    authUrls.forEach((authUrl) => {
      expect(authUrl).toContainKeys(basketAuthUrlKeys);

      const url = new URL(authUrl.url);
      const returnUrl = url.searchParams.get("return");
      expect(returnUrl).toBe(returnUrl);
    });
  });
});
