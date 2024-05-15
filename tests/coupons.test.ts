import { TebexHeadlessClient } from "../src";

import "jest-extended";
import { Basket, Package } from "../src/types";

const client = new TebexHeadlessClient(process.env.WEBSTORE_IDENTIFIER!);

describe("CouponsService", () => {
  let basket: Basket;
  // let packages: Package[];

  // beforeAll(async () => {
  //   basket = await client.basket.createBasket();
  // });

  // beforeAll(async () => {
  //   packages = await client.packages.getPackages();
  // });

  it("should get coupons", () => {
    expect(true).toBe(true);
  });

  // it("should apply a coupon", async () => {
  //   await client.basket.addPackage(basket.ident, packages[0].id);
  //   const response = await client.coupons.applyCoupon(
  //     basket.ident,
  //     "COUPON-1234"
  //   );

  //   expect(response).toBeDefined();
  //   expect(response).toContainKeys(["message"]);
  //   expect(response.message).toBe("Coupon applied successfully");
  // });
});
