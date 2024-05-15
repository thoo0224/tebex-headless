import "jest-extended";

import { TebexHeadlessClient } from "../src";

const client = new TebexHeadlessClient(process.env.WEBSTORE_IDENTIFIER!);

const webstoreKeys = [
  "id",
  "description",
  "name",
  "webstoreUrl",
  "currency",
  "lang",
  "logo",
  "platformType",
  "createdAt",
];

describe("WesbtoreService", () => {
  it("should get the webstore", async () => {
    const webstore = await client.webstore.getWebstore();
    expect(webstore).toBeDefined();
    expect(webstore).toContainKeys(webstoreKeys);
  });
});
