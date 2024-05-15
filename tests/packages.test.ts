import "jest-extended";

import { TebexHeadlessClient } from "../src";
import { Package } from "../src/types";

const client = new TebexHeadlessClient(process.env.WEBSTORE_IDENTIFIER!);

describe("PackagesService", () => {
  let packages: Package[];

  beforeAll(async () => {
    packages = await client.packages.getPackages();
  });

  it("should get packages", async () => {
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

  it("should get package", async () => {
    const pkg = packages[0];
    expect(pkg).toBeDefined();

    const package_ = await client.packages.getPackage(pkg.id);
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
