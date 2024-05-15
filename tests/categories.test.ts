import "jest-extended";

import { TebexHeadlessClient } from "../src";
import { Category } from "../src/types";

const client = new TebexHeadlessClient(process.env.WEBSTORE_IDENTIFIER!);

const categoryKeys = [
  "id",
  "name",
  "description",
  "parent",
  "order",
  "packages",
  "displayType",
];

describe("CategoriesService", () => {
  let categories: Category[];

  beforeAll(async () => {
    categories = await client.categories.getCategories();
  });

  it("should get categories", async () => {
    expect(categories).toBeDefined();

    categories.forEach((category) => {
      expect(category).toBeDefined();
      expect(category).toContainKeys(categoryKeys);
    });
  });

  it("should get a category", async () => {
    const category = await client.categories.getCategory(categories[0].id);
    expect(category).toBeDefined();
    expect(category).toContainKeys(categoryKeys);
  });
});
