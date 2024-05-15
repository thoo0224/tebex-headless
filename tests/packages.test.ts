import "jest-extended";

import { TebexHeadlessClient } from "../src";

const client = new TebexHeadlessClient(process.env.WEBSTORE_IDENTIFIER!);

describe("PackagesService", () => {
  it("should get packages", async () => {
    const packages = await client.packages.getPackages();
    expect(packages).toBeDefined();
    expect(packages).toBeArray();

    packages.forEach((package_) => {
      expect(package_).toBeDefined();
      expect(package_).toContainKeys([
        "id",
        "name",
        "description",
        "image",
        "type",
        "category",
        "basePrice",
        "salesTax",
        "totalPrice",
        "currency",
        "discount",
        "disableQuantity",
        "disableGifting",
        "expirationDate",
        "createdAt",
        "updatedAt",
      ]);
    });
  });
});
